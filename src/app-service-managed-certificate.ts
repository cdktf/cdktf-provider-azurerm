// https://www.terraform.io/docs/providers/azurerm/r/app_service_managed_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppServiceManagedCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_managed_certificate.html#custom_hostname_binding_id AppServiceManagedCertificate#custom_hostname_binding_id}
  */
  readonly customHostnameBindingId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_managed_certificate.html#tags AppServiceManagedCertificate#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_managed_certificate.html#timeouts AppServiceManagedCertificate#timeouts}
  */
  readonly timeouts?: AppServiceManagedCertificateTimeouts;
}
export interface AppServiceManagedCertificateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_managed_certificate.html#create AppServiceManagedCertificate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_managed_certificate.html#delete AppServiceManagedCertificate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_managed_certificate.html#read AppServiceManagedCertificate#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_managed_certificate.html#update AppServiceManagedCertificate#update}
  */
  readonly update?: string;
}

function appServiceManagedCertificateTimeoutsToTerraform(struct?: AppServiceManagedCertificateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_managed_certificate.html azurerm_app_service_managed_certificate}
*/
export class AppServiceManagedCertificate extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_managed_certificate.html azurerm_app_service_managed_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppServiceManagedCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: AppServiceManagedCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_service_managed_certificate',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customHostnameBindingId = config.customHostnameBindingId;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // canonical_name - computed: true, optional: false, required: false
  public get canonicalName() {
    return this.getStringAttribute('canonical_name');
  }

  // custom_hostname_binding_id - computed: false, optional: false, required: true
  private _customHostnameBindingId: string;
  public get customHostnameBindingId() {
    return this.getStringAttribute('custom_hostname_binding_id');
  }
  public set customHostnameBindingId(value: string) {
    this._customHostnameBindingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customHostnameBindingIdInput() {
    return this._customHostnameBindingId
  }

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }

  // friendly_name - computed: true, optional: false, required: false
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }

  // host_names - computed: true, optional: false, required: false
  public get hostNames() {
    return this.getListAttribute('host_names');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issue_date - computed: true, optional: false, required: false
  public get issueDate() {
    return this.getStringAttribute('issue_date');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // subject_name - computed: true, optional: false, required: false
  public get subjectName() {
    return this.getStringAttribute('subject_name');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppServiceManagedCertificateTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AppServiceManagedCertificateTimeouts ) {
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
      custom_hostname_binding_id: cdktf.stringToTerraform(this._customHostnameBindingId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: appServiceManagedCertificateTimeoutsToTerraform(this._timeouts),
    };
  }
}
