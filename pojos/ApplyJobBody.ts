import fs from 'fs';
import path from 'path';

/**
 * Playwright'in desteklediği dosya formatı arayüzü.
 */
export interface PlaywrightFile {
  name: string;
  mimeType: string;
  buffer: Buffer;
}

/**
 * İş başvuru formu verilerini temsil eden sınıf.
 */
export class ApplyJobBody {
  email: string;
  name: string;
  lastName: string;
  cv: PlaywrightFile;
  additionalDocument: PlaywrightFile;

  constructor(
    email: string,
    name: string,
    lastName: string,
    cv: PlaywrightFile,
    additionalDocument: PlaywrightFile
  ) {
    this.email = email;
    this.name = name;
    this.lastName = lastName;
    this.cv = cv;
    this.additionalDocument = additionalDocument;
  }

  /**
   * Tüm zorunlu alanların dolu olup olmadığını kontrol eder.
   */
  public isComplete(): boolean {
    return Boolean(this.email && this.name && this.lastName && this.cv);
  }

  /**
   * Verilen dosyanın PDF olup olmadığını kontrol eder.
   */
  public static isPdf(file: PlaywrightFile): boolean {
    return file.mimeType === 'application/pdf';
  }

  /**
   * Dosya yolundan PlaywrightFile nesnesi oluşturur.
   */
  public static fromPath(filePath: string): PlaywrightFile {
    const buffer = fs.readFileSync(filePath);
    return {
      name: path.basename(filePath),
      mimeType: 'application/pdf',
      buffer,
    };
  }
}
