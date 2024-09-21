// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyVaultCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#id KeyVaultCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#key_vault_id KeyVaultCertificate#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#name KeyVaultCertificate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#tags KeyVaultCertificate#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#certificate KeyVaultCertificate#certificate}
  */
  readonly certificate?: KeyVaultCertificateCertificate;
  /**
  * certificate_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#certificate_policy KeyVaultCertificate#certificate_policy}
  */
  readonly certificatePolicy?: KeyVaultCertificateCertificatePolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#timeouts KeyVaultCertificate#timeouts}
  */
  readonly timeouts?: KeyVaultCertificateTimeouts;
}
export interface KeyVaultCertificateCertificateAttribute {
}

export function keyVaultCertificateCertificateAttributeToTerraform(struct?: KeyVaultCertificateCertificateAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function keyVaultCertificateCertificateAttributeToHclTerraform(struct?: KeyVaultCertificateCertificateAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KeyVaultCertificateCertificateAttributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KeyVaultCertificateCertificateAttribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultCertificateCertificateAttribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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

export class KeyVaultCertificateCertificateAttributeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KeyVaultCertificateCertificateAttributeOutputReference {
    return new KeyVaultCertificateCertificateAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KeyVaultCertificateCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#contents KeyVaultCertificate#contents}
  */
  readonly contents: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#password KeyVaultCertificate#password}
  */
  readonly password?: string;
}

export function keyVaultCertificateCertificateToTerraform(struct?: KeyVaultCertificateCertificateOutputReference | KeyVaultCertificateCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contents: cdktf.stringToTerraform(struct!.contents),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function keyVaultCertificateCertificateToHclTerraform(struct?: KeyVaultCertificateCertificateOutputReference | KeyVaultCertificateCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contents: {
      value: cdktf.stringToHclTerraform(struct!.contents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeyVaultCertificateCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KeyVaultCertificateCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contents !== undefined) {
      hasAnyValues = true;
      internalValueResult.contents = this._contents;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultCertificateCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contents = undefined;
      this._password = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contents = value.contents;
      this._password = value.password;
    }
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
    return this._contents;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}
export interface KeyVaultCertificateCertificatePolicyIssuerParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#name KeyVaultCertificate#name}
  */
  readonly name: string;
}

export function keyVaultCertificateCertificatePolicyIssuerParametersToTerraform(struct?: KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference | KeyVaultCertificateCertificatePolicyIssuerParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function keyVaultCertificateCertificatePolicyIssuerParametersToHclTerraform(struct?: KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference | KeyVaultCertificateCertificatePolicyIssuerParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KeyVaultCertificateCertificatePolicyIssuerParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultCertificateCertificatePolicyIssuerParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
    return this._name;
  }
}
export interface KeyVaultCertificateCertificatePolicyKeyProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#curve KeyVaultCertificate#curve}
  */
  readonly curve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#exportable KeyVaultCertificate#exportable}
  */
  readonly exportable: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#key_size KeyVaultCertificate#key_size}
  */
  readonly keySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#key_type KeyVaultCertificate#key_type}
  */
  readonly keyType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#reuse_key KeyVaultCertificate#reuse_key}
  */
  readonly reuseKey: boolean | cdktf.IResolvable;
}

export function keyVaultCertificateCertificatePolicyKeyPropertiesToTerraform(struct?: KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference | KeyVaultCertificateCertificatePolicyKeyProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function keyVaultCertificateCertificatePolicyKeyPropertiesToHclTerraform(struct?: KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference | KeyVaultCertificateCertificatePolicyKeyProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    curve: {
      value: cdktf.stringToHclTerraform(struct!.curve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exportable: {
      value: cdktf.booleanToHclTerraform(struct!.exportable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_size: {
      value: cdktf.numberToHclTerraform(struct!.keySize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reuse_key: {
      value: cdktf.booleanToHclTerraform(struct!.reuseKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KeyVaultCertificateCertificatePolicyKeyProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._curve !== undefined) {
      hasAnyValues = true;
      internalValueResult.curve = this._curve;
    }
    if (this._exportable !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportable = this._exportable;
    }
    if (this._keySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySize = this._keySize;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    if (this._reuseKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.reuseKey = this._reuseKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultCertificateCertificatePolicyKeyProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._curve = undefined;
      this._exportable = undefined;
      this._keySize = undefined;
      this._keyType = undefined;
      this._reuseKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._curve = value.curve;
      this._exportable = value.exportable;
      this._keySize = value.keySize;
      this._keyType = value.keyType;
      this._reuseKey = value.reuseKey;
    }
  }

  // curve - computed: true, optional: true, required: false
  private _curve?: string; 
  public get curve() {
    return this.getStringAttribute('curve');
  }
  public set curve(value: string) {
    this._curve = value;
  }
  public resetCurve() {
    this._curve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curveInput() {
    return this._curve;
  }

  // exportable - computed: false, optional: false, required: true
  private _exportable?: boolean | cdktf.IResolvable; 
  public get exportable() {
    return this.getBooleanAttribute('exportable');
  }
  public set exportable(value: boolean | cdktf.IResolvable) {
    this._exportable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportableInput() {
    return this._exportable;
  }

  // key_size - computed: true, optional: true, required: false
  private _keySize?: number; 
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }
  public set keySize(value: number) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
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
    return this._keyType;
  }

  // reuse_key - computed: false, optional: false, required: true
  private _reuseKey?: boolean | cdktf.IResolvable; 
  public get reuseKey() {
    return this.getBooleanAttribute('reuse_key');
  }
  public set reuseKey(value: boolean | cdktf.IResolvable) {
    this._reuseKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseKeyInput() {
    return this._reuseKey;
  }
}
export interface KeyVaultCertificateCertificatePolicyLifetimeActionAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#action_type KeyVaultCertificate#action_type}
  */
  readonly actionType: string;
}

export function keyVaultCertificateCertificatePolicyLifetimeActionActionToTerraform(struct?: KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference | KeyVaultCertificateCertificatePolicyLifetimeActionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
  }
}


export function keyVaultCertificateCertificatePolicyLifetimeActionActionToHclTerraform(struct?: KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference | KeyVaultCertificateCertificatePolicyLifetimeActionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KeyVaultCertificateCertificatePolicyLifetimeActionAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultCertificateCertificatePolicyLifetimeActionAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionType = value.actionType;
    }
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
    return this._actionType;
  }
}
export interface KeyVaultCertificateCertificatePolicyLifetimeActionTrigger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#days_before_expiry KeyVaultCertificate#days_before_expiry}
  */
  readonly daysBeforeExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#lifetime_percentage KeyVaultCertificate#lifetime_percentage}
  */
  readonly lifetimePercentage?: number;
}

export function keyVaultCertificateCertificatePolicyLifetimeActionTriggerToTerraform(struct?: KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference | KeyVaultCertificateCertificatePolicyLifetimeActionTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_before_expiry: cdktf.numberToTerraform(struct!.daysBeforeExpiry),
    lifetime_percentage: cdktf.numberToTerraform(struct!.lifetimePercentage),
  }
}


export function keyVaultCertificateCertificatePolicyLifetimeActionTriggerToHclTerraform(struct?: KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference | KeyVaultCertificateCertificatePolicyLifetimeActionTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_before_expiry: {
      value: cdktf.numberToHclTerraform(struct!.daysBeforeExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lifetime_percentage: {
      value: cdktf.numberToHclTerraform(struct!.lifetimePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KeyVaultCertificateCertificatePolicyLifetimeActionTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysBeforeExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysBeforeExpiry = this._daysBeforeExpiry;
    }
    if (this._lifetimePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetimePercentage = this._lifetimePercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultCertificateCertificatePolicyLifetimeActionTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysBeforeExpiry = undefined;
      this._lifetimePercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysBeforeExpiry = value.daysBeforeExpiry;
      this._lifetimePercentage = value.lifetimePercentage;
    }
  }

  // days_before_expiry - computed: false, optional: true, required: false
  private _daysBeforeExpiry?: number; 
  public get daysBeforeExpiry() {
    return this.getNumberAttribute('days_before_expiry');
  }
  public set daysBeforeExpiry(value: number) {
    this._daysBeforeExpiry = value;
  }
  public resetDaysBeforeExpiry() {
    this._daysBeforeExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysBeforeExpiryInput() {
    return this._daysBeforeExpiry;
  }

  // lifetime_percentage - computed: false, optional: true, required: false
  private _lifetimePercentage?: number; 
  public get lifetimePercentage() {
    return this.getNumberAttribute('lifetime_percentage');
  }
  public set lifetimePercentage(value: number) {
    this._lifetimePercentage = value;
  }
  public resetLifetimePercentage() {
    this._lifetimePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimePercentageInput() {
    return this._lifetimePercentage;
  }
}
export interface KeyVaultCertificateCertificatePolicyLifetimeAction {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#action KeyVaultCertificate#action}
  */
  readonly action: KeyVaultCertificateCertificatePolicyLifetimeActionAction;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#trigger KeyVaultCertificate#trigger}
  */
  readonly trigger: KeyVaultCertificateCertificatePolicyLifetimeActionTrigger;
}

export function keyVaultCertificateCertificatePolicyLifetimeActionToTerraform(struct?: KeyVaultCertificateCertificatePolicyLifetimeAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: keyVaultCertificateCertificatePolicyLifetimeActionActionToTerraform(struct!.action),
    trigger: keyVaultCertificateCertificatePolicyLifetimeActionTriggerToTerraform(struct!.trigger),
  }
}


export function keyVaultCertificateCertificatePolicyLifetimeActionToHclTerraform(struct?: KeyVaultCertificateCertificatePolicyLifetimeAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: keyVaultCertificateCertificatePolicyLifetimeActionActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "KeyVaultCertificateCertificatePolicyLifetimeActionActionList",
    },
    trigger: {
      value: keyVaultCertificateCertificatePolicyLifetimeActionTriggerToHclTerraform(struct!.trigger),
      isBlock: true,
      type: "list",
      storageClassType: "KeyVaultCertificateCertificatePolicyLifetimeActionTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KeyVaultCertificateCertificatePolicyLifetimeAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._trigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultCertificateCertificatePolicyLifetimeAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._trigger.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._trigger.internalValue = value.trigger;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new KeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: KeyVaultCertificateCertificatePolicyLifetimeActionAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger = new KeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: KeyVaultCertificateCertificatePolicyLifetimeActionTrigger) {
    this._trigger.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }
}

export class KeyVaultCertificateCertificatePolicyLifetimeActionList extends cdktf.ComplexList {
  public internalValue? : KeyVaultCertificateCertificatePolicyLifetimeAction[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference {
    return new KeyVaultCertificateCertificatePolicyLifetimeActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KeyVaultCertificateCertificatePolicySecretProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#content_type KeyVaultCertificate#content_type}
  */
  readonly contentType: string;
}

export function keyVaultCertificateCertificatePolicySecretPropertiesToTerraform(struct?: KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference | KeyVaultCertificateCertificatePolicySecretProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
  }
}


export function keyVaultCertificateCertificatePolicySecretPropertiesToHclTerraform(struct?: KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference | KeyVaultCertificateCertificatePolicySecretProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KeyVaultCertificateCertificatePolicySecretProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultCertificateCertificatePolicySecretProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentType = value.contentType;
    }
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
    return this._contentType;
  }
}
export interface KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#dns_names KeyVaultCertificate#dns_names}
  */
  readonly dnsNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#emails KeyVaultCertificate#emails}
  */
  readonly emails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#upns KeyVaultCertificate#upns}
  */
  readonly upns?: string[];
}

export function keyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesToTerraform(struct?: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference | KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsNames),
    emails: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emails),
    upns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.upns),
  }
}


export function keyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesToHclTerraform(struct?: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference | KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    emails: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emails),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    upns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.upns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNames = this._dnsNames;
    }
    if (this._emails !== undefined) {
      hasAnyValues = true;
      internalValueResult.emails = this._emails;
    }
    if (this._upns !== undefined) {
      hasAnyValues = true;
      internalValueResult.upns = this._upns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsNames = undefined;
      this._emails = undefined;
      this._upns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsNames = value.dnsNames;
      this._emails = value.emails;
      this._upns = value.upns;
    }
  }

  // dns_names - computed: false, optional: true, required: false
  private _dnsNames?: string[]; 
  public get dnsNames() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_names'));
  }
  public set dnsNames(value: string[]) {
    this._dnsNames = value;
  }
  public resetDnsNames() {
    this._dnsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNamesInput() {
    return this._dnsNames;
  }

  // emails - computed: false, optional: true, required: false
  private _emails?: string[]; 
  public get emails() {
    return cdktf.Fn.tolist(this.getListAttribute('emails'));
  }
  public set emails(value: string[]) {
    this._emails = value;
  }
  public resetEmails() {
    this._emails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailsInput() {
    return this._emails;
  }

  // upns - computed: false, optional: true, required: false
  private _upns?: string[]; 
  public get upns() {
    return cdktf.Fn.tolist(this.getListAttribute('upns'));
  }
  public set upns(value: string[]) {
    this._upns = value;
  }
  public resetUpns() {
    this._upns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upnsInput() {
    return this._upns;
  }
}
export interface KeyVaultCertificateCertificatePolicyX509CertificateProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#extended_key_usage KeyVaultCertificate#extended_key_usage}
  */
  readonly extendedKeyUsage?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#key_usage KeyVaultCertificate#key_usage}
  */
  readonly keyUsage: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#subject KeyVaultCertificate#subject}
  */
  readonly subject: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#validity_in_months KeyVaultCertificate#validity_in_months}
  */
  readonly validityInMonths: number;
  /**
  * subject_alternative_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#subject_alternative_names KeyVaultCertificate#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames;
}

export function keyVaultCertificateCertificatePolicyX509CertificatePropertiesToTerraform(struct?: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference | KeyVaultCertificateCertificatePolicyX509CertificateProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extended_key_usage: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extendedKeyUsage),
    key_usage: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyUsage),
    subject: cdktf.stringToTerraform(struct!.subject),
    validity_in_months: cdktf.numberToTerraform(struct!.validityInMonths),
    subject_alternative_names: keyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesToTerraform(struct!.subjectAlternativeNames),
  }
}


export function keyVaultCertificateCertificatePolicyX509CertificatePropertiesToHclTerraform(struct?: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference | KeyVaultCertificateCertificatePolicyX509CertificateProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extended_key_usage: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extendedKeyUsage),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_usage: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyUsage),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validity_in_months: {
      value: cdktf.numberToHclTerraform(struct!.validityInMonths),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subject_alternative_names: {
      value: keyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesToHclTerraform(struct!.subjectAlternativeNames),
      isBlock: true,
      type: "list",
      storageClassType: "KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KeyVaultCertificateCertificatePolicyX509CertificateProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extendedKeyUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedKeyUsage = this._extendedKeyUsage;
    }
    if (this._keyUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUsage = this._keyUsage;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._validityInMonths !== undefined) {
      hasAnyValues = true;
      internalValueResult.validityInMonths = this._validityInMonths;
    }
    if (this._subjectAlternativeNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAlternativeNames = this._subjectAlternativeNames?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultCertificateCertificatePolicyX509CertificateProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extendedKeyUsage = undefined;
      this._keyUsage = undefined;
      this._subject = undefined;
      this._validityInMonths = undefined;
      this._subjectAlternativeNames.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extendedKeyUsage = value.extendedKeyUsage;
      this._keyUsage = value.keyUsage;
      this._subject = value.subject;
      this._validityInMonths = value.validityInMonths;
      this._subjectAlternativeNames.internalValue = value.subjectAlternativeNames;
    }
  }

  // extended_key_usage - computed: true, optional: true, required: false
  private _extendedKeyUsage?: string[]; 
  public get extendedKeyUsage() {
    return this.getListAttribute('extended_key_usage');
  }
  public set extendedKeyUsage(value: string[]) {
    this._extendedKeyUsage = value;
  }
  public resetExtendedKeyUsage() {
    this._extendedKeyUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedKeyUsageInput() {
    return this._extendedKeyUsage;
  }

  // key_usage - computed: false, optional: false, required: true
  private _keyUsage?: string[]; 
  public get keyUsage() {
    return cdktf.Fn.tolist(this.getListAttribute('key_usage'));
  }
  public set keyUsage(value: string[]) {
    this._keyUsage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage;
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
    return this._subject;
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
    return this._validityInMonths;
  }

  // subject_alternative_names - computed: false, optional: true, required: false
  private _subjectAlternativeNames = new KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference(this, "subject_alternative_names");
  public get subjectAlternativeNames() {
    return this._subjectAlternativeNames;
  }
  public putSubjectAlternativeNames(value: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames) {
    this._subjectAlternativeNames.internalValue = value;
  }
  public resetSubjectAlternativeNames() {
    this._subjectAlternativeNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNamesInput() {
    return this._subjectAlternativeNames.internalValue;
  }
}
export interface KeyVaultCertificateCertificatePolicy {
  /**
  * issuer_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#issuer_parameters KeyVaultCertificate#issuer_parameters}
  */
  readonly issuerParameters: KeyVaultCertificateCertificatePolicyIssuerParameters;
  /**
  * key_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#key_properties KeyVaultCertificate#key_properties}
  */
  readonly keyProperties: KeyVaultCertificateCertificatePolicyKeyProperties;
  /**
  * lifetime_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#lifetime_action KeyVaultCertificate#lifetime_action}
  */
  readonly lifetimeAction?: KeyVaultCertificateCertificatePolicyLifetimeAction[] | cdktf.IResolvable;
  /**
  * secret_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#secret_properties KeyVaultCertificate#secret_properties}
  */
  readonly secretProperties: KeyVaultCertificateCertificatePolicySecretProperties;
  /**
  * x509_certificate_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#x509_certificate_properties KeyVaultCertificate#x509_certificate_properties}
  */
  readonly x509CertificateProperties?: KeyVaultCertificateCertificatePolicyX509CertificateProperties;
}

export function keyVaultCertificateCertificatePolicyToTerraform(struct?: KeyVaultCertificateCertificatePolicyOutputReference | KeyVaultCertificateCertificatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuer_parameters: keyVaultCertificateCertificatePolicyIssuerParametersToTerraform(struct!.issuerParameters),
    key_properties: keyVaultCertificateCertificatePolicyKeyPropertiesToTerraform(struct!.keyProperties),
    lifetime_action: cdktf.listMapper(keyVaultCertificateCertificatePolicyLifetimeActionToTerraform, true)(struct!.lifetimeAction),
    secret_properties: keyVaultCertificateCertificatePolicySecretPropertiesToTerraform(struct!.secretProperties),
    x509_certificate_properties: keyVaultCertificateCertificatePolicyX509CertificatePropertiesToTerraform(struct!.x509CertificateProperties),
  }
}


export function keyVaultCertificateCertificatePolicyToHclTerraform(struct?: KeyVaultCertificateCertificatePolicyOutputReference | KeyVaultCertificateCertificatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issuer_parameters: {
      value: keyVaultCertificateCertificatePolicyIssuerParametersToHclTerraform(struct!.issuerParameters),
      isBlock: true,
      type: "list",
      storageClassType: "KeyVaultCertificateCertificatePolicyIssuerParametersList",
    },
    key_properties: {
      value: keyVaultCertificateCertificatePolicyKeyPropertiesToHclTerraform(struct!.keyProperties),
      isBlock: true,
      type: "list",
      storageClassType: "KeyVaultCertificateCertificatePolicyKeyPropertiesList",
    },
    lifetime_action: {
      value: cdktf.listMapperHcl(keyVaultCertificateCertificatePolicyLifetimeActionToHclTerraform, true)(struct!.lifetimeAction),
      isBlock: true,
      type: "list",
      storageClassType: "KeyVaultCertificateCertificatePolicyLifetimeActionList",
    },
    secret_properties: {
      value: keyVaultCertificateCertificatePolicySecretPropertiesToHclTerraform(struct!.secretProperties),
      isBlock: true,
      type: "list",
      storageClassType: "KeyVaultCertificateCertificatePolicySecretPropertiesList",
    },
    x509_certificate_properties: {
      value: keyVaultCertificateCertificatePolicyX509CertificatePropertiesToHclTerraform(struct!.x509CertificateProperties),
      isBlock: true,
      type: "list",
      storageClassType: "KeyVaultCertificateCertificatePolicyX509CertificatePropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeyVaultCertificateCertificatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KeyVaultCertificateCertificatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuerParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerParameters = this._issuerParameters?.internalValue;
    }
    if (this._keyProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyProperties = this._keyProperties?.internalValue;
    }
    if (this._lifetimeAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetimeAction = this._lifetimeAction?.internalValue;
    }
    if (this._secretProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretProperties = this._secretProperties?.internalValue;
    }
    if (this._x509CertificateProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.x509CertificateProperties = this._x509CertificateProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultCertificateCertificatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._issuerParameters.internalValue = undefined;
      this._keyProperties.internalValue = undefined;
      this._lifetimeAction.internalValue = undefined;
      this._secretProperties.internalValue = undefined;
      this._x509CertificateProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._issuerParameters.internalValue = value.issuerParameters;
      this._keyProperties.internalValue = value.keyProperties;
      this._lifetimeAction.internalValue = value.lifetimeAction;
      this._secretProperties.internalValue = value.secretProperties;
      this._x509CertificateProperties.internalValue = value.x509CertificateProperties;
    }
  }

  // issuer_parameters - computed: false, optional: false, required: true
  private _issuerParameters = new KeyVaultCertificateCertificatePolicyIssuerParametersOutputReference(this, "issuer_parameters");
  public get issuerParameters() {
    return this._issuerParameters;
  }
  public putIssuerParameters(value: KeyVaultCertificateCertificatePolicyIssuerParameters) {
    this._issuerParameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerParametersInput() {
    return this._issuerParameters.internalValue;
  }

  // key_properties - computed: false, optional: false, required: true
  private _keyProperties = new KeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference(this, "key_properties");
  public get keyProperties() {
    return this._keyProperties;
  }
  public putKeyProperties(value: KeyVaultCertificateCertificatePolicyKeyProperties) {
    this._keyProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPropertiesInput() {
    return this._keyProperties.internalValue;
  }

  // lifetime_action - computed: false, optional: true, required: false
  private _lifetimeAction = new KeyVaultCertificateCertificatePolicyLifetimeActionList(this, "lifetime_action", false);
  public get lifetimeAction() {
    return this._lifetimeAction;
  }
  public putLifetimeAction(value: KeyVaultCertificateCertificatePolicyLifetimeAction[] | cdktf.IResolvable) {
    this._lifetimeAction.internalValue = value;
  }
  public resetLifetimeAction() {
    this._lifetimeAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeActionInput() {
    return this._lifetimeAction.internalValue;
  }

  // secret_properties - computed: false, optional: false, required: true
  private _secretProperties = new KeyVaultCertificateCertificatePolicySecretPropertiesOutputReference(this, "secret_properties");
  public get secretProperties() {
    return this._secretProperties;
  }
  public putSecretProperties(value: KeyVaultCertificateCertificatePolicySecretProperties) {
    this._secretProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretPropertiesInput() {
    return this._secretProperties.internalValue;
  }

  // x509_certificate_properties - computed: false, optional: true, required: false
  private _x509CertificateProperties = new KeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference(this, "x509_certificate_properties");
  public get x509CertificateProperties() {
    return this._x509CertificateProperties;
  }
  public putX509CertificateProperties(value: KeyVaultCertificateCertificatePolicyX509CertificateProperties) {
    this._x509CertificateProperties.internalValue = value;
  }
  public resetX509CertificateProperties() {
    this._x509CertificateProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x509CertificatePropertiesInput() {
    return this._x509CertificateProperties.internalValue;
  }
}
export interface KeyVaultCertificateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#create KeyVaultCertificate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#delete KeyVaultCertificate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#read KeyVaultCertificate#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#update KeyVaultCertificate#update}
  */
  readonly update?: string;
}

export function keyVaultCertificateTimeoutsToTerraform(struct?: KeyVaultCertificateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function keyVaultCertificateTimeoutsToHclTerraform(struct?: KeyVaultCertificateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeyVaultCertificateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeyVaultCertificateTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultCertificateTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate azurerm_key_vault_certificate}
*/
export class KeyVaultCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_key_vault_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeyVaultCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeyVaultCertificate to import
  * @param importFromId The id of the existing KeyVaultCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeyVaultCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_key_vault_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate azurerm_key_vault_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyVaultCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: KeyVaultCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault_certificate',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._keyVaultId = config.keyVaultId;
    this._name = config.name;
    this._tags = config.tags;
    this._certificate.internalValue = config.certificate;
    this._certificatePolicy.internalValue = config.certificatePolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_attribute - computed: true, optional: false, required: false
  private _certificateAttribute = new KeyVaultCertificateCertificateAttributeList(this, "certificate_attribute", false);
  public get certificateAttribute() {
    return this._certificateAttribute;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._keyVaultId;
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
    return this._name;
  }

  // resource_manager_id - computed: true, optional: false, required: false
  public get resourceManagerId() {
    return this.getStringAttribute('resource_manager_id');
  }

  // resource_manager_versionless_id - computed: true, optional: false, required: false
  public get resourceManagerVersionlessId() {
    return this.getStringAttribute('resource_manager_versionless_id');
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // versionless_id - computed: true, optional: false, required: false
  public get versionlessId() {
    return this.getStringAttribute('versionless_id');
  }

  // versionless_secret_id - computed: true, optional: false, required: false
  public get versionlessSecretId() {
    return this.getStringAttribute('versionless_secret_id');
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new KeyVaultCertificateCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: KeyVaultCertificateCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // certificate_policy - computed: false, optional: true, required: false
  private _certificatePolicy = new KeyVaultCertificateCertificatePolicyOutputReference(this, "certificate_policy");
  public get certificatePolicy() {
    return this._certificatePolicy;
  }
  public putCertificatePolicy(value: KeyVaultCertificateCertificatePolicy) {
    this._certificatePolicy.internalValue = value;
  }
  public resetCertificatePolicy() {
    this._certificatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePolicyInput() {
    return this._certificatePolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KeyVaultCertificateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KeyVaultCertificateTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      key_vault_id: cdktf.stringToTerraform(this._keyVaultId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      certificate: keyVaultCertificateCertificateToTerraform(this._certificate.internalValue),
      certificate_policy: keyVaultCertificateCertificatePolicyToTerraform(this._certificatePolicy.internalValue),
      timeouts: keyVaultCertificateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_vault_id: {
        value: cdktf.stringToHclTerraform(this._keyVaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      certificate: {
        value: keyVaultCertificateCertificateToHclTerraform(this._certificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KeyVaultCertificateCertificateList",
      },
      certificate_policy: {
        value: keyVaultCertificateCertificatePolicyToHclTerraform(this._certificatePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KeyVaultCertificateCertificatePolicyList",
      },
      timeouts: {
        value: keyVaultCertificateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeyVaultCertificateTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
