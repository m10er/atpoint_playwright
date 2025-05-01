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
  phone:string;
  cv: PlaywrightFile;
  motivation: string;
  constructor(
    email: string,
    name: string,
    lastName: string,
    phone:string,
    cv: PlaywrightFile,
    motivation:string
  ) {
    this.email = email;
    this.name = name;
    this.lastName = lastName;
    this.phone= phone;
    this.cv = cv;
    this.motivation= motivation;
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
