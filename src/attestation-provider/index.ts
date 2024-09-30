// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/attestation_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AttestationProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/attestation_provider#id AttestationProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/attestation_provider#location AttestationProvider#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/attestation_provider#name AttestationProvider#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/attestation_provider#open_enclave_policy_base64 AttestationProvider#open_enclave_policy_base64}
  */
  readonly openEnclavePolicyBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/attestation_provider#policy_signing_certificate_data AttestationProvider#policy_signing_certificate_data}
  */
  readonly policySigningCertificateData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/attestation_provider#resource_group_name AttestationProvider#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/attestation_provider#sev_snp_policy_base64 AttestationProvider#sev_snp_policy_base64}
  */
  readonly sevSnpPolicyBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/attestation_provider#sgx_enclave_policy_base64 AttestationProvider#sgx_enclave_policy_base64}
  */
  readonly sgxEnclavePolicyBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/attestation_provider#tags AttestationProvider#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/attestation_provider#tpm_policy_base64 AttestationProvider#tpm_policy_base64}
  */
  readonly tpmPolicyBase64?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/attestation_provider#timeouts AttestationProvider#timeouts}
  */
  readonly timeouts?: AttestationProviderTimeouts;
}
export interface AttestationProviderTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/attestation_provider#create AttestationProvider#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/attestation_provider#delete AttestationProvider#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/attestation_provider#read AttestationProvider#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/attestation_provider#update AttestationProvider#update}
  */
  readonly update?: string;
}

export function attestationProviderTimeoutsToTerraform(struct?: AttestationProviderTimeouts | cdktf.IResolvable): any {
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


export function attestationProviderTimeoutsToHclTerraform(struct?: AttestationProviderTimeouts | cdktf.IResolvable): any {
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

export class AttestationProviderTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AttestationProviderTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AttestationProviderTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/attestation_provider azurerm_attestation_provider}
*/
export class AttestationProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_attestation_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AttestationProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AttestationProvider to import
  * @param importFromId The id of the existing AttestationProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/attestation_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AttestationProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_attestation_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/attestation_provider azurerm_attestation_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AttestationProviderConfig
  */
  public constructor(scope: Construct, id: string, config: AttestationProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_attestation_provider',
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
    this._location = config.location;
    this._name = config.name;
    this._openEnclavePolicyBase64 = config.openEnclavePolicyBase64;
    this._policySigningCertificateData = config.policySigningCertificateData;
    this._resourceGroupName = config.resourceGroupName;
    this._sevSnpPolicyBase64 = config.sevSnpPolicyBase64;
    this._sgxEnclavePolicyBase64 = config.sgxEnclavePolicyBase64;
    this._tags = config.tags;
    this._tpmPolicyBase64 = config.tpmPolicyBase64;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attestation_uri - computed: true, optional: false, required: false
  public get attestationUri() {
    return this.getStringAttribute('attestation_uri');
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // open_enclave_policy_base64 - computed: false, optional: true, required: false
  private _openEnclavePolicyBase64?: string; 
  public get openEnclavePolicyBase64() {
    return this.getStringAttribute('open_enclave_policy_base64');
  }
  public set openEnclavePolicyBase64(value: string) {
    this._openEnclavePolicyBase64 = value;
  }
  public resetOpenEnclavePolicyBase64() {
    this._openEnclavePolicyBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openEnclavePolicyBase64Input() {
    return this._openEnclavePolicyBase64;
  }

  // policy_signing_certificate_data - computed: false, optional: true, required: false
  private _policySigningCertificateData?: string; 
  public get policySigningCertificateData() {
    return this.getStringAttribute('policy_signing_certificate_data');
  }
  public set policySigningCertificateData(value: string) {
    this._policySigningCertificateData = value;
  }
  public resetPolicySigningCertificateData() {
    this._policySigningCertificateData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policySigningCertificateDataInput() {
    return this._policySigningCertificateData;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // sev_snp_policy_base64 - computed: false, optional: true, required: false
  private _sevSnpPolicyBase64?: string; 
  public get sevSnpPolicyBase64() {
    return this.getStringAttribute('sev_snp_policy_base64');
  }
  public set sevSnpPolicyBase64(value: string) {
    this._sevSnpPolicyBase64 = value;
  }
  public resetSevSnpPolicyBase64() {
    this._sevSnpPolicyBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sevSnpPolicyBase64Input() {
    return this._sevSnpPolicyBase64;
  }

  // sgx_enclave_policy_base64 - computed: false, optional: true, required: false
  private _sgxEnclavePolicyBase64?: string; 
  public get sgxEnclavePolicyBase64() {
    return this.getStringAttribute('sgx_enclave_policy_base64');
  }
  public set sgxEnclavePolicyBase64(value: string) {
    this._sgxEnclavePolicyBase64 = value;
  }
  public resetSgxEnclavePolicyBase64() {
    this._sgxEnclavePolicyBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgxEnclavePolicyBase64Input() {
    return this._sgxEnclavePolicyBase64;
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

  // tpm_policy_base64 - computed: false, optional: true, required: false
  private _tpmPolicyBase64?: string; 
  public get tpmPolicyBase64() {
    return this.getStringAttribute('tpm_policy_base64');
  }
  public set tpmPolicyBase64(value: string) {
    this._tpmPolicyBase64 = value;
  }
  public resetTpmPolicyBase64() {
    this._tpmPolicyBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpmPolicyBase64Input() {
    return this._tpmPolicyBase64;
  }

  // trust_model - computed: true, optional: false, required: false
  public get trustModel() {
    return this.getStringAttribute('trust_model');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AttestationProviderTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AttestationProviderTimeouts) {
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      open_enclave_policy_base64: cdktf.stringToTerraform(this._openEnclavePolicyBase64),
      policy_signing_certificate_data: cdktf.stringToTerraform(this._policySigningCertificateData),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sev_snp_policy_base64: cdktf.stringToTerraform(this._sevSnpPolicyBase64),
      sgx_enclave_policy_base64: cdktf.stringToTerraform(this._sgxEnclavePolicyBase64),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tpm_policy_base64: cdktf.stringToTerraform(this._tpmPolicyBase64),
      timeouts: attestationProviderTimeoutsToTerraform(this._timeouts.internalValue),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      open_enclave_policy_base64: {
        value: cdktf.stringToHclTerraform(this._openEnclavePolicyBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_signing_certificate_data: {
        value: cdktf.stringToHclTerraform(this._policySigningCertificateData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sev_snp_policy_base64: {
        value: cdktf.stringToHclTerraform(this._sevSnpPolicyBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sgx_enclave_policy_base64: {
        value: cdktf.stringToHclTerraform(this._sgxEnclavePolicyBase64),
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
      tpm_policy_base64: {
        value: cdktf.stringToHclTerraform(this._tpmPolicyBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: attestationProviderTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AttestationProviderTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
