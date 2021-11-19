// https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyVaultCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#key_vault_id KeyVaultCertificate#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#name KeyVaultCertificate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#tags KeyVaultCertificate#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#certificate KeyVaultCertificate#certificate}
  */
  readonly certificate?: KeyVaultCertificateCertificate;
  /**
  * certificate_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#certificate_policy KeyVaultCertificate#certificate_policy}
  */
  readonly certificatePolicy?: KeyVaultCertificateCertificatePolicy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#timeouts KeyVaultCertificate#timeouts}
  */
  readonly timeouts?: KeyVaultCertificateTimeouts;
}
export class KeyVaultCertificateCertificateAttribute extends cdktf.ComplexComputedList {

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }

  // expires - computed: true, optional: false, required: false
  public get expires() {
    return this.getStringAttribute('expires');
  }

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }

  // recovery_level - computed: true, optional: false, required: false
  public get recoveryLevel() {
    return this.getStringAttribute('recovery_level');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }
}
export interface KeyVaultCertificateCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#contents KeyVaultCertificate#contents}
  */
  readonly contents: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#password KeyVaultCertificate#password}
  */
  readonly password?: string;
}

function keyVaultCertificateCertificateToTerraform(struct?: KeyVaultCertificateCertificateOutputReference | KeyVaultCertificateCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contents: cdktf.stringToTerraform(struct!.contents),
    password: cdktf.stringToTerraform(struct!.password),
  }
}

export class KeyVaultCertificateCertificateOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // contents - computed: false, optional: false, required: true
  private _contents?: string; 
  public get contents() {
    return this.getStringAttribute('contents');
  }
  public set contents(value: string) {
    this._contents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents
  }

  // password - computed: false, optional: true, required: false
  private _password?: string | undefined; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }
}
export interface KeyVaultCertificateCertificatePolicyIssuerParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#name KeyVaultCertificate#name}
  */
  readonly name: string;
}

function keyVaultCertificateCertificatePolicyIssuerParametersToTerraform(struct?: KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference | KeyVaultCertificateCertificatePolicyIssuerParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }
}
export interface KeyVaultCertificateCertificatePolicyKeyProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#curve KeyVaultCertificate#curve}
  */
  readonly curve?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#exportable KeyVaultCertificate#exportable}
  */
  readonly exportable: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#key_size KeyVaultCertificate#key_size}
  */
  readonly keySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#key_type KeyVaultCertificate#key_type}
  */
  readonly keyType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#reuse_key KeyVaultCertificate#reuse_key}
  */
  readonly reuseKey: boolean | cdktf.IResolvable;
}

function keyVaultCertificateCertificatePolicyKeyPropertiesToTerraform(struct?: KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference | KeyVaultCertificateCertificatePolicyKeyProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curve: cdktf.stringToTerraform(struct!.curve),
    exportable: cdktf.booleanToTerraform(struct!.exportable),
    key_size: cdktf.numberToTerraform(struct!.keySize),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    reuse_key: cdktf.booleanToTerraform(struct!.reuseKey),
  }
}

export class KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // curve - computed: true, optional: true, required: false
  private _curve?: string | undefined; 
  public get curve() {
    return this.getStringAttribute('curve');
  }
  public set curve(value: string | undefined) {
    this._curve = value;
  }
  public resetCurve() {
    this._curve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curveInput() {
    return this._curve
  }

  // exportable - computed: false, optional: false, required: true
  private _exportable?: boolean | cdktf.IResolvable; 
  public get exportable() {
    return this.getBooleanAttribute('exportable') as any;
  }
  public set exportable(value: boolean | cdktf.IResolvable) {
    this._exportable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportableInput() {
    return this._exportable
  }

  // key_size - computed: true, optional: true, required: false
  private _keySize?: number | undefined; 
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }
  public set keySize(value: number | undefined) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize
  }

  // key_type - computed: false, optional: false, required: true
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType
  }

  // reuse_key - computed: false, optional: false, required: true
  private _reuseKey?: boolean | cdktf.IResolvable; 
  public get reuseKey() {
    return this.getBooleanAttribute('reuse_key') as any;
  }
  public set reuseKey(value: boolean | cdktf.IResolvable) {
    this._reuseKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseKeyInput() {
    return this._reuseKey
  }
}
export interface KeyVaultCertificateCertificatePolicyLifetimeActionAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#action_type KeyVaultCertificate#action_type}
  */
  readonly actionType: string;
}

function keyVaultCertificateCertificatePolicyLifetimeActionActionToTerraform(struct?: KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference | KeyVaultCertificateCertificatePolicyLifetimeActionAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
  }
}

export class KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType
  }
}
export interface KeyVaultCertificateCertificatePolicyLifetimeActionTrigger {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#days_before_expiry KeyVaultCertificate#days_before_expiry}
  */
  readonly daysBeforeExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#lifetime_percentage KeyVaultCertificate#lifetime_percentage}
  */
  readonly lifetimePercentage?: number;
}

function keyVaultCertificateCertificatePolicyLifetimeActionTriggerToTerraform(struct?: KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference | KeyVaultCertificateCertificatePolicyLifetimeActionTrigger): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_before_expiry: cdktf.numberToTerraform(struct!.daysBeforeExpiry),
    lifetime_percentage: cdktf.numberToTerraform(struct!.lifetimePercentage),
  }
}

export class KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // days_before_expiry - computed: false, optional: true, required: false
  private _daysBeforeExpiry?: number | undefined; 
  public get daysBeforeExpiry() {
    return this.getNumberAttribute('days_before_expiry');
  }
  public set daysBeforeExpiry(value: number | undefined) {
    this._daysBeforeExpiry = value;
  }
  public resetDaysBeforeExpiry() {
    this._daysBeforeExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysBeforeExpiryInput() {
    return this._daysBeforeExpiry
  }

  // lifetime_percentage - computed: false, optional: true, required: false
  private _lifetimePercentage?: number | undefined; 
  public get lifetimePercentage() {
    return this.getNumberAttribute('lifetime_percentage');
  }
  public set lifetimePercentage(value: number | undefined) {
    this._lifetimePercentage = value;
  }
  public resetLifetimePercentage() {
    this._lifetimePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimePercentageInput() {
    return this._lifetimePercentage
  }
}
export interface KeyVaultCertificateCertificatePolicyLifetimeAction {
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#action KeyVaultCertificate#action}
  */
  readonly action: KeyVaultCertificateCertificatePolicyLifetimeActionAction;
  /**
  * trigger block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#trigger KeyVaultCertificate#trigger}
  */
  readonly trigger: KeyVaultCertificateCertificatePolicyLifetimeActionTrigger;
}

function keyVaultCertificateCertificatePolicyLifetimeActionToTerraform(struct?: KeyVaultCertificateCertificatePolicyLifetimeAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: keyVaultCertificateCertificatePolicyLifetimeActionActionToTerraform(struct!.action),
    trigger: keyVaultCertificateCertificatePolicyLifetimeActionTriggerToTerraform(struct!.trigger),
  }
}

export interface KeyVaultCertificateCertificatePolicySecretProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#content_type KeyVaultCertificate#content_type}
  */
  readonly contentType: string;
}

function keyVaultCertificateCertificatePolicySecretPropertiesToTerraform(struct?: KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference | KeyVaultCertificateCertificatePolicySecretProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
  }
}

export class KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType
  }
}
export interface KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#dns_names KeyVaultCertificate#dns_names}
  */
  readonly dnsNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#emails KeyVaultCertificate#emails}
  */
  readonly emails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#upns KeyVaultCertificate#upns}
  */
  readonly upns?: string[];
}

function keyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesToTerraform(struct?: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference | KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dnsNames),
    emails: cdktf.listMapper(cdktf.stringToTerraform)(struct!.emails),
    upns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.upns),
  }
}

export class KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // dns_names - computed: false, optional: true, required: false
  private _dnsNames?: string[] | undefined; 
  public get dnsNames() {
    return this.getListAttribute('dns_names');
  }
  public set dnsNames(value: string[] | undefined) {
    this._dnsNames = value;
  }
  public resetDnsNames() {
    this._dnsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNamesInput() {
    return this._dnsNames
  }

  // emails - computed: false, optional: true, required: false
  private _emails?: string[] | undefined; 
  public get emails() {
    return this.getListAttribute('emails');
  }
  public set emails(value: string[] | undefined) {
    this._emails = value;
  }
  public resetEmails() {
    this._emails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailsInput() {
    return this._emails
  }

  // upns - computed: false, optional: true, required: false
  private _upns?: string[] | undefined; 
  public get upns() {
    return this.getListAttribute('upns');
  }
  public set upns(value: string[] | undefined) {
    this._upns = value;
  }
  public resetUpns() {
    this._upns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upnsInput() {
    return this._upns
  }
}
export interface KeyVaultCertificateCertificatePolicyX509CertificateProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#extended_key_usage KeyVaultCertificate#extended_key_usage}
  */
  readonly extendedKeyUsage?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#key_usage KeyVaultCertificate#key_usage}
  */
  readonly keyUsage: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#subject KeyVaultCertificate#subject}
  */
  readonly subject: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#validity_in_months KeyVaultCertificate#validity_in_months}
  */
  readonly validityInMonths: number;
  /**
  * subject_alternative_names block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#subject_alternative_names KeyVaultCertificate#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames;
}

function keyVaultCertificateCertificatePolicyX509CertificatePropertiesToTerraform(struct?: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference | KeyVaultCertificateCertificatePolicyX509CertificateProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extended_key_usage: cdktf.listMapper(cdktf.stringToTerraform)(struct!.extendedKeyUsage),
    key_usage: cdktf.listMapper(cdktf.stringToTerraform)(struct!.keyUsage),
    subject: cdktf.stringToTerraform(struct!.subject),
    validity_in_months: cdktf.numberToTerraform(struct!.validityInMonths),
    subject_alternative_names: keyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesToTerraform(struct!.subjectAlternativeNames),
  }
}

export class KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // extended_key_usage - computed: true, optional: true, required: false
  private _extendedKeyUsage?: string[] | undefined; 
  public get extendedKeyUsage() {
    return this.getListAttribute('extended_key_usage');
  }
  public set extendedKeyUsage(value: string[] | undefined) {
    this._extendedKeyUsage = value;
  }
  public resetExtendedKeyUsage() {
    this._extendedKeyUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedKeyUsageInput() {
    return this._extendedKeyUsage
  }

  // key_usage - computed: false, optional: false, required: true
  private _keyUsage?: string[]; 
  public get keyUsage() {
    return this.getListAttribute('key_usage');
  }
  public set keyUsage(value: string[]) {
    this._keyUsage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject
  }

  // validity_in_months - computed: false, optional: false, required: true
  private _validityInMonths?: number; 
  public get validityInMonths() {
    return this.getNumberAttribute('validity_in_months');
  }
  public set validityInMonths(value: number) {
    this._validityInMonths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validityInMonthsInput() {
    return this._validityInMonths
  }

  // subject_alternative_names - computed: false, optional: true, required: false
  private _subjectAlternativeNames?: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames | undefined; 
  private __subjectAlternativeNamesOutput = new KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference(this as any, "subject_alternative_names", true);
  public get subjectAlternativeNames() {
    return this.__subjectAlternativeNamesOutput;
  }
  public putSubjectAlternativeNames(value: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames | undefined) {
    this._subjectAlternativeNames = value;
  }
  public resetSubjectAlternativeNames() {
    this._subjectAlternativeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNamesInput() {
    return this._subjectAlternativeNames
  }
}
export interface KeyVaultCertificateCertificatePolicy {
  /**
  * issuer_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#issuer_parameters KeyVaultCertificate#issuer_parameters}
  */
  readonly issuerParameters: KeyVaultCertificateCertificatePolicyIssuerParameters;
  /**
  * key_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#key_properties KeyVaultCertificate#key_properties}
  */
  readonly keyProperties: KeyVaultCertificateCertificatePolicyKeyProperties;
  /**
  * lifetime_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#lifetime_action KeyVaultCertificate#lifetime_action}
  */
  readonly lifetimeAction?: KeyVaultCertificateCertificatePolicyLifetimeAction[];
  /**
  * secret_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#secret_properties KeyVaultCertificate#secret_properties}
  */
  readonly secretProperties: KeyVaultCertificateCertificatePolicySecretProperties;
  /**
  * x509_certificate_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#x509_certificate_properties KeyVaultCertificate#x509_certificate_properties}
  */
  readonly x509CertificateProperties?: KeyVaultCertificateCertificatePolicyX509CertificateProperties;
}

function keyVaultCertificateCertificatePolicyToTerraform(struct?: KeyVaultCertificateCertificatePolicyOutputReference | KeyVaultCertificateCertificatePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuer_parameters: keyVaultCertificateCertificatePolicyIssuerParametersToTerraform(struct!.issuerParameters),
    key_properties: keyVaultCertificateCertificatePolicyKeyPropertiesToTerraform(struct!.keyProperties),
    lifetime_action: cdktf.listMapper(keyVaultCertificateCertificatePolicyLifetimeActionToTerraform)(struct!.lifetimeAction),
    secret_properties: keyVaultCertificateCertificatePolicySecretPropertiesToTerraform(struct!.secretProperties),
    x509_certificate_properties: keyVaultCertificateCertificatePolicyX509CertificatePropertiesToTerraform(struct!.x509CertificateProperties),
  }
}

export class KeyVaultCertificateCertificatePolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // issuer_parameters - computed: false, optional: false, required: true
  private _issuerParameters?: KeyVaultCertificateCertificatePolicyIssuerParameters; 
  private __issuerParametersOutput = new KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference(this as any, "issuer_parameters", true);
  public get issuerParameters() {
    return this.__issuerParametersOutput;
  }
  public putIssuerParameters(value: KeyVaultCertificateCertificatePolicyIssuerParameters) {
    this._issuerParameters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerParametersInput() {
    return this._issuerParameters
  }

  // key_properties - computed: false, optional: false, required: true
  private _keyProperties?: KeyVaultCertificateCertificatePolicyKeyProperties; 
  private __keyPropertiesOutput = new KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference(this as any, "key_properties", true);
  public get keyProperties() {
    return this.__keyPropertiesOutput;
  }
  public putKeyProperties(value: KeyVaultCertificateCertificatePolicyKeyProperties) {
    this._keyProperties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPropertiesInput() {
    return this._keyProperties
  }

  // lifetime_action - computed: false, optional: true, required: false
  private _lifetimeAction?: KeyVaultCertificateCertificatePolicyLifetimeAction[] | undefined; 
  public get lifetimeAction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('lifetime_action') as any;
  }
  public set lifetimeAction(value: KeyVaultCertificateCertificatePolicyLifetimeAction[] | undefined) {
    this._lifetimeAction = value;
  }
  public resetLifetimeAction() {
    this._lifetimeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeActionInput() {
    return this._lifetimeAction
  }

  // secret_properties - computed: false, optional: false, required: true
  private _secretProperties?: KeyVaultCertificateCertificatePolicySecretProperties; 
  private __secretPropertiesOutput = new KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference(this as any, "secret_properties", true);
  public get secretProperties() {
    return this.__secretPropertiesOutput;
  }
  public putSecretProperties(value: KeyVaultCertificateCertificatePolicySecretProperties) {
    this._secretProperties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretPropertiesInput() {
    return this._secretProperties
  }

  // x509_certificate_properties - computed: false, optional: true, required: false
  private _x509CertificateProperties?: KeyVaultCertificateCertificatePolicyX509CertificateProperties | undefined; 
  private __x509CertificatePropertiesOutput = new KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference(this as any, "x509_certificate_properties", true);
  public get x509CertificateProperties() {
    return this.__x509CertificatePropertiesOutput;
  }
  public putX509CertificateProperties(value: KeyVaultCertificateCertificatePolicyX509CertificateProperties | undefined) {
    this._x509CertificateProperties = value;
  }
  public resetX509CertificateProperties() {
    this._x509CertificateProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x509CertificatePropertiesInput() {
    return this._x509CertificateProperties
  }
}
export interface KeyVaultCertificateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#create KeyVaultCertificate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#delete KeyVaultCertificate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#read KeyVaultCertificate#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html#update KeyVaultCertificate#update}
  */
  readonly update?: string;
}

function keyVaultCertificateTimeoutsToTerraform(struct?: KeyVaultCertificateTimeoutsOutputReference | KeyVaultCertificateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class KeyVaultCertificateTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html azurerm_key_vault_certificate}
*/
export class KeyVaultCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_key_vault_certificate";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html azurerm_key_vault_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyVaultCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: KeyVaultCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault_certificate',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyVaultId = config.keyVaultId;
    this._name = config.name;
    this._tags = config.tags;
    this._certificate = config.certificate;
    this._certificatePolicy = config.certificatePolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_attribute - computed: true, optional: false, required: false
  public certificateAttribute(index: string) {
    return new KeyVaultCertificateCertificateAttribute(this, 'certificate_attribute', index);
  }

  // certificate_data - computed: true, optional: false, required: false
  public get certificateData() {
    return this.getStringAttribute('certificate_data');
  }

  // certificate_data_base64 - computed: true, optional: false, required: false
  public get certificateDataBase64() {
    return this.getStringAttribute('certificate_data_base64');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_vault_id - computed: false, optional: false, required: true
  private _keyVaultId?: string; 
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: KeyVaultCertificateCertificate | undefined; 
  private __certificateOutput = new KeyVaultCertificateCertificateOutputReference(this as any, "certificate", true);
  public get certificate() {
    return this.__certificateOutput;
  }
  public putCertificate(value: KeyVaultCertificateCertificate | undefined) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate
  }

  // certificate_policy - computed: false, optional: true, required: false
  private _certificatePolicy?: KeyVaultCertificateCertificatePolicy | undefined; 
  private __certificatePolicyOutput = new KeyVaultCertificateCertificatePolicyOutputReference(this as any, "certificate_policy", true);
  public get certificatePolicy() {
    return this.__certificatePolicyOutput;
  }
  public putCertificatePolicy(value: KeyVaultCertificateCertificatePolicy | undefined) {
    this._certificatePolicy = value;
  }
  public resetCertificatePolicy() {
    this._certificatePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePolicyInput() {
    return this._certificatePolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KeyVaultCertificateTimeouts | undefined; 
  private __timeoutsOutput = new KeyVaultCertificateTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: KeyVaultCertificateTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key_vault_id: cdktf.stringToTerraform(this._keyVaultId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      certificate: keyVaultCertificateCertificateToTerraform(this._certificate),
      certificate_policy: keyVaultCertificateCertificatePolicyToTerraform(this._certificatePolicy),
      timeouts: keyVaultCertificateTimeoutsToTerraform(this._timeouts),
    };
  }
}
