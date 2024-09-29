// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint_custom_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnEndpointCustomDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint_custom_domain#cdn_endpoint_id CdnEndpointCustomDomain#cdn_endpoint_id}
  */
  readonly cdnEndpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint_custom_domain#host_name CdnEndpointCustomDomain#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint_custom_domain#id CdnEndpointCustomDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint_custom_domain#name CdnEndpointCustomDomain#name}
  */
  readonly name: string;
  /**
  * cdn_managed_https block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint_custom_domain#cdn_managed_https CdnEndpointCustomDomain#cdn_managed_https}
  */
  readonly cdnManagedHttps?: CdnEndpointCustomDomainCdnManagedHttps;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint_custom_domain#timeouts CdnEndpointCustomDomain#timeouts}
  */
  readonly timeouts?: CdnEndpointCustomDomainTimeouts;
  /**
  * user_managed_https block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint_custom_domain#user_managed_https CdnEndpointCustomDomain#user_managed_https}
  */
  readonly userManagedHttps?: CdnEndpointCustomDomainUserManagedHttps;
}
export interface CdnEndpointCustomDomainCdnManagedHttps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint_custom_domain#certificate_type CdnEndpointCustomDomain#certificate_type}
  */
  readonly certificateType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint_custom_domain#protocol_type CdnEndpointCustomDomain#protocol_type}
  */
  readonly protocolType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint_custom_domain#tls_version CdnEndpointCustomDomain#tls_version}
  */
  readonly tlsVersion?: string;
}

export function cdnEndpointCustomDomainCdnManagedHttpsToTerraform(struct?: CdnEndpointCustomDomainCdnManagedHttpsOutputReference | CdnEndpointCustomDomainCdnManagedHttps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_type: cdktf.stringToTerraform(struct!.certificateType),
    protocol_type: cdktf.stringToTerraform(struct!.protocolType),
    tls_version: cdktf.stringToTerraform(struct!.tlsVersion),
  }
}


export function cdnEndpointCustomDomainCdnManagedHttpsToHclTerraform(struct?: CdnEndpointCustomDomainCdnManagedHttpsOutputReference | CdnEndpointCustomDomainCdnManagedHttps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_type: {
      value: cdktf.stringToHclTerraform(struct!.certificateType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_type: {
      value: cdktf.stringToHclTerraform(struct!.protocolType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_version: {
      value: cdktf.stringToHclTerraform(struct!.tlsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnEndpointCustomDomainCdnManagedHttpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnEndpointCustomDomainCdnManagedHttps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateType = this._certificateType;
    }
    if (this._protocolType !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolType = this._protocolType;
    }
    if (this._tlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVersion = this._tlsVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnEndpointCustomDomainCdnManagedHttps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateType = undefined;
      this._protocolType = undefined;
      this._tlsVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateType = value.certificateType;
      this._protocolType = value.protocolType;
      this._tlsVersion = value.tlsVersion;
    }
  }

  // certificate_type - computed: false, optional: false, required: true
  private _certificateType?: string; 
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }
  public set certificateType(value: string) {
    this._certificateType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateTypeInput() {
    return this._certificateType;
  }

  // protocol_type - computed: false, optional: false, required: true
  private _protocolType?: string; 
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }
  public set protocolType(value: string) {
    this._protocolType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypeInput() {
    return this._protocolType;
  }

  // tls_version - computed: false, optional: true, required: false
  private _tlsVersion?: string; 
  public get tlsVersion() {
    return this.getStringAttribute('tls_version');
  }
  public set tlsVersion(value: string) {
    this._tlsVersion = value;
  }
  public resetTlsVersion() {
    this._tlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVersionInput() {
    return this._tlsVersion;
  }
}
export interface CdnEndpointCustomDomainTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint_custom_domain#create CdnEndpointCustomDomain#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint_custom_domain#delete CdnEndpointCustomDomain#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint_custom_domain#read CdnEndpointCustomDomain#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint_custom_domain#update CdnEndpointCustomDomain#update}
  */
  readonly update?: string;
}

export function cdnEndpointCustomDomainTimeoutsToTerraform(struct?: CdnEndpointCustomDomainTimeouts | cdktf.IResolvable): any {
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


export function cdnEndpointCustomDomainTimeoutsToHclTerraform(struct?: CdnEndpointCustomDomainTimeouts | cdktf.IResolvable): any {
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

export class CdnEndpointCustomDomainTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnEndpointCustomDomainTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnEndpointCustomDomainTimeouts | cdktf.IResolvable | undefined) {
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
export interface CdnEndpointCustomDomainUserManagedHttps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint_custom_domain#key_vault_secret_id CdnEndpointCustomDomain#key_vault_secret_id}
  */
  readonly keyVaultSecretId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint_custom_domain#tls_version CdnEndpointCustomDomain#tls_version}
  */
  readonly tlsVersion?: string;
}

export function cdnEndpointCustomDomainUserManagedHttpsToTerraform(struct?: CdnEndpointCustomDomainUserManagedHttpsOutputReference | CdnEndpointCustomDomainUserManagedHttps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_vault_secret_id: cdktf.stringToTerraform(struct!.keyVaultSecretId),
    tls_version: cdktf.stringToTerraform(struct!.tlsVersion),
  }
}


export function cdnEndpointCustomDomainUserManagedHttpsToHclTerraform(struct?: CdnEndpointCustomDomainUserManagedHttpsOutputReference | CdnEndpointCustomDomainUserManagedHttps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_vault_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_version: {
      value: cdktf.stringToHclTerraform(struct!.tlsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnEndpointCustomDomainUserManagedHttpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnEndpointCustomDomainUserManagedHttps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyVaultSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultSecretId = this._keyVaultSecretId;
    }
    if (this._tlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVersion = this._tlsVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnEndpointCustomDomainUserManagedHttps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyVaultSecretId = undefined;
      this._tlsVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyVaultSecretId = value.keyVaultSecretId;
      this._tlsVersion = value.tlsVersion;
    }
  }

  // key_vault_secret_id - computed: false, optional: false, required: true
  private _keyVaultSecretId?: string; 
  public get keyVaultSecretId() {
    return this.getStringAttribute('key_vault_secret_id');
  }
  public set keyVaultSecretId(value: string) {
    this._keyVaultSecretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultSecretIdInput() {
    return this._keyVaultSecretId;
  }

  // tls_version - computed: false, optional: true, required: false
  private _tlsVersion?: string; 
  public get tlsVersion() {
    return this.getStringAttribute('tls_version');
  }
  public set tlsVersion(value: string) {
    this._tlsVersion = value;
  }
  public resetTlsVersion() {
    this._tlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVersionInput() {
    return this._tlsVersion;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint_custom_domain azurerm_cdn_endpoint_custom_domain}
*/
export class CdnEndpointCustomDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_cdn_endpoint_custom_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnEndpointCustomDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnEndpointCustomDomain to import
  * @param importFromId The id of the existing CdnEndpointCustomDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint_custom_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnEndpointCustomDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_cdn_endpoint_custom_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint_custom_domain azurerm_cdn_endpoint_custom_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnEndpointCustomDomainConfig
  */
  public constructor(scope: Construct, id: string, config: CdnEndpointCustomDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cdn_endpoint_custom_domain',
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
    this._cdnEndpointId = config.cdnEndpointId;
    this._hostName = config.hostName;
    this._id = config.id;
    this._name = config.name;
    this._cdnManagedHttps.internalValue = config.cdnManagedHttps;
    this._timeouts.internalValue = config.timeouts;
    this._userManagedHttps.internalValue = config.userManagedHttps;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdn_endpoint_id - computed: false, optional: false, required: true
  private _cdnEndpointId?: string; 
  public get cdnEndpointId() {
    return this.getStringAttribute('cdn_endpoint_id');
  }
  public set cdnEndpointId(value: string) {
    this._cdnEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnEndpointIdInput() {
    return this._cdnEndpointId;
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
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

  // cdn_managed_https - computed: false, optional: true, required: false
  private _cdnManagedHttps = new CdnEndpointCustomDomainCdnManagedHttpsOutputReference(this, "cdn_managed_https");
  public get cdnManagedHttps() {
    return this._cdnManagedHttps;
  }
  public putCdnManagedHttps(value: CdnEndpointCustomDomainCdnManagedHttps) {
    this._cdnManagedHttps.internalValue = value;
  }
  public resetCdnManagedHttps() {
    this._cdnManagedHttps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnManagedHttpsInput() {
    return this._cdnManagedHttps.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CdnEndpointCustomDomainTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CdnEndpointCustomDomainTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user_managed_https - computed: false, optional: true, required: false
  private _userManagedHttps = new CdnEndpointCustomDomainUserManagedHttpsOutputReference(this, "user_managed_https");
  public get userManagedHttps() {
    return this._userManagedHttps;
  }
  public putUserManagedHttps(value: CdnEndpointCustomDomainUserManagedHttps) {
    this._userManagedHttps.internalValue = value;
  }
  public resetUserManagedHttps() {
    this._userManagedHttps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userManagedHttpsInput() {
    return this._userManagedHttps.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cdn_endpoint_id: cdktf.stringToTerraform(this._cdnEndpointId),
      host_name: cdktf.stringToTerraform(this._hostName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      cdn_managed_https: cdnEndpointCustomDomainCdnManagedHttpsToTerraform(this._cdnManagedHttps.internalValue),
      timeouts: cdnEndpointCustomDomainTimeoutsToTerraform(this._timeouts.internalValue),
      user_managed_https: cdnEndpointCustomDomainUserManagedHttpsToTerraform(this._userManagedHttps.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cdn_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._cdnEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
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
      cdn_managed_https: {
        value: cdnEndpointCustomDomainCdnManagedHttpsToHclTerraform(this._cdnManagedHttps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnEndpointCustomDomainCdnManagedHttpsList",
      },
      timeouts: {
        value: cdnEndpointCustomDomainTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CdnEndpointCustomDomainTimeouts",
      },
      user_managed_https: {
        value: cdnEndpointCustomDomainUserManagedHttpsToHclTerraform(this._userManagedHttps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnEndpointCustomDomainUserManagedHttpsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
