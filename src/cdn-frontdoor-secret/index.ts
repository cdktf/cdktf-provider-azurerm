// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnFrontdoorSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_secret#cdn_frontdoor_profile_id CdnFrontdoorSecret#cdn_frontdoor_profile_id}
  */
  readonly cdnFrontdoorProfileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_secret#id CdnFrontdoorSecret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_secret#name CdnFrontdoorSecret#name}
  */
  readonly name: string;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_secret#secret CdnFrontdoorSecret#secret}
  */
  readonly secret: CdnFrontdoorSecretSecret;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_secret#timeouts CdnFrontdoorSecret#timeouts}
  */
  readonly timeouts?: CdnFrontdoorSecretTimeouts;
}
export interface CdnFrontdoorSecretSecretCustomerCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_secret#key_vault_certificate_id CdnFrontdoorSecret#key_vault_certificate_id}
  */
  readonly keyVaultCertificateId: string;
}

export function cdnFrontdoorSecretSecretCustomerCertificateToTerraform(struct?: CdnFrontdoorSecretSecretCustomerCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_vault_certificate_id: cdktf.stringToTerraform(struct!.keyVaultCertificateId),
  }
}


export function cdnFrontdoorSecretSecretCustomerCertificateToHclTerraform(struct?: CdnFrontdoorSecretSecretCustomerCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_vault_certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultCertificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorSecretSecretCustomerCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnFrontdoorSecretSecretCustomerCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyVaultCertificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultCertificateId = this._keyVaultCertificateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorSecretSecretCustomerCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyVaultCertificateId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyVaultCertificateId = value.keyVaultCertificateId;
    }
  }

  // key_vault_certificate_id - computed: false, optional: false, required: true
  private _keyVaultCertificateId?: string; 
  public get keyVaultCertificateId() {
    return this.getStringAttribute('key_vault_certificate_id');
  }
  public set keyVaultCertificateId(value: string) {
    this._keyVaultCertificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultCertificateIdInput() {
    return this._keyVaultCertificateId;
  }

  // subject_alternative_names - computed: true, optional: false, required: false
  public get subjectAlternativeNames() {
    return this.getListAttribute('subject_alternative_names');
  }
}

export class CdnFrontdoorSecretSecretCustomerCertificateList extends cdktf.ComplexList {
  public internalValue? : CdnFrontdoorSecretSecretCustomerCertificate[] | cdktf.IResolvable

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
  public get(index: number): CdnFrontdoorSecretSecretCustomerCertificateOutputReference {
    return new CdnFrontdoorSecretSecretCustomerCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorSecretSecret {
  /**
  * customer_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_secret#customer_certificate CdnFrontdoorSecret#customer_certificate}
  */
  readonly customerCertificate: CdnFrontdoorSecretSecretCustomerCertificate[] | cdktf.IResolvable;
}

export function cdnFrontdoorSecretSecretToTerraform(struct?: CdnFrontdoorSecretSecretOutputReference | CdnFrontdoorSecretSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_certificate: cdktf.listMapper(cdnFrontdoorSecretSecretCustomerCertificateToTerraform, true)(struct!.customerCertificate),
  }
}


export function cdnFrontdoorSecretSecretToHclTerraform(struct?: CdnFrontdoorSecretSecretOutputReference | CdnFrontdoorSecretSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_certificate: {
      value: cdktf.listMapperHcl(cdnFrontdoorSecretSecretCustomerCertificateToHclTerraform, true)(struct!.customerCertificate),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorSecretSecretCustomerCertificateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorSecretSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorSecretSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerCertificate = this._customerCertificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorSecretSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customerCertificate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customerCertificate.internalValue = value.customerCertificate;
    }
  }

  // customer_certificate - computed: false, optional: false, required: true
  private _customerCertificate = new CdnFrontdoorSecretSecretCustomerCertificateList(this, "customer_certificate", false);
  public get customerCertificate() {
    return this._customerCertificate;
  }
  public putCustomerCertificate(value: CdnFrontdoorSecretSecretCustomerCertificate[] | cdktf.IResolvable) {
    this._customerCertificate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerCertificateInput() {
    return this._customerCertificate.internalValue;
  }
}
export interface CdnFrontdoorSecretTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_secret#create CdnFrontdoorSecret#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_secret#delete CdnFrontdoorSecret#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_secret#read CdnFrontdoorSecret#read}
  */
  readonly read?: string;
}

export function cdnFrontdoorSecretTimeoutsToTerraform(struct?: CdnFrontdoorSecretTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function cdnFrontdoorSecretTimeoutsToHclTerraform(struct?: CdnFrontdoorSecretTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorSecretTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnFrontdoorSecretTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorSecretTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_secret azurerm_cdn_frontdoor_secret}
*/
export class CdnFrontdoorSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_cdn_frontdoor_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnFrontdoorSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnFrontdoorSecret to import
  * @param importFromId The id of the existing CdnFrontdoorSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnFrontdoorSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_cdn_frontdoor_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_secret azurerm_cdn_frontdoor_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnFrontdoorSecretConfig
  */
  public constructor(scope: Construct, id: string, config: CdnFrontdoorSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cdn_frontdoor_secret',
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
    this._cdnFrontdoorProfileId = config.cdnFrontdoorProfileId;
    this._id = config.id;
    this._name = config.name;
    this._secret.internalValue = config.secret;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdn_frontdoor_profile_id - computed: false, optional: false, required: true
  private _cdnFrontdoorProfileId?: string; 
  public get cdnFrontdoorProfileId() {
    return this.getStringAttribute('cdn_frontdoor_profile_id');
  }
  public set cdnFrontdoorProfileId(value: string) {
    this._cdnFrontdoorProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnFrontdoorProfileIdInput() {
    return this._cdnFrontdoorProfileId;
  }

  // cdn_frontdoor_profile_name - computed: true, optional: false, required: false
  public get cdnFrontdoorProfileName() {
    return this.getStringAttribute('cdn_frontdoor_profile_name');
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

  // secret - computed: false, optional: false, required: true
  private _secret = new CdnFrontdoorSecretSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: CdnFrontdoorSecretSecret) {
    this._secret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CdnFrontdoorSecretTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CdnFrontdoorSecretTimeouts) {
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
      cdn_frontdoor_profile_id: cdktf.stringToTerraform(this._cdnFrontdoorProfileId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      secret: cdnFrontdoorSecretSecretToTerraform(this._secret.internalValue),
      timeouts: cdnFrontdoorSecretTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cdn_frontdoor_profile_id: {
        value: cdktf.stringToHclTerraform(this._cdnFrontdoorProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      secret: {
        value: cdnFrontdoorSecretSecretToHclTerraform(this._secret.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnFrontdoorSecretSecretList",
      },
      timeouts: {
        value: cdnFrontdoorSecretTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CdnFrontdoorSecretTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
