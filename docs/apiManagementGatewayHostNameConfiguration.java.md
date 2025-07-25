# `apiManagementGatewayHostNameConfiguration` Submodule <a name="`apiManagementGatewayHostNameConfiguration` Submodule" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementGatewayHostNameConfiguration <a name="ApiManagementGatewayHostNameConfiguration" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration azurerm_api_management_gateway_host_name_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_gateway_host_name_configuration.ApiManagementGatewayHostNameConfiguration;

ApiManagementGatewayHostNameConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .apiManagementId(java.lang.String)
    .certificateId(java.lang.String)
    .gatewayName(java.lang.String)
    .hostName(java.lang.String)
    .name(java.lang.String)
//  .http2Enabled(java.lang.Boolean)
//  .http2Enabled(IResolvable)
//  .id(java.lang.String)
//  .requestClientCertificateEnabled(java.lang.Boolean)
//  .requestClientCertificateEnabled(IResolvable)
//  .timeouts(ApiManagementGatewayHostNameConfigurationTimeouts)
//  .tls10Enabled(java.lang.Boolean)
//  .tls10Enabled(IResolvable)
//  .tls11Enabled(java.lang.Boolean)
//  .tls11Enabled(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.apiManagementId">apiManagementId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#api_management_id ApiManagementGatewayHostNameConfiguration#api_management_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.certificateId">certificateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#certificate_id ApiManagementGatewayHostNameConfiguration#certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.gatewayName">gatewayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#gateway_name ApiManagementGatewayHostNameConfiguration#gateway_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.hostName">hostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#host_name ApiManagementGatewayHostNameConfiguration#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#name ApiManagementGatewayHostNameConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.http2Enabled">http2Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#http2_enabled ApiManagementGatewayHostNameConfiguration#http2_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#id ApiManagementGatewayHostNameConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.requestClientCertificateEnabled">requestClientCertificateEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#request_client_certificate_enabled ApiManagementGatewayHostNameConfiguration#request_client_certificate_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts">ApiManagementGatewayHostNameConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.tls10Enabled">tls10Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#tls10_enabled ApiManagementGatewayHostNameConfiguration#tls10_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.tls11Enabled">tls11Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#tls11_enabled ApiManagementGatewayHostNameConfiguration#tls11_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiManagementId`<sup>Required</sup> <a name="apiManagementId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.apiManagementId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#api_management_id ApiManagementGatewayHostNameConfiguration#api_management_id}.

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.certificateId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#certificate_id ApiManagementGatewayHostNameConfiguration#certificate_id}.

---

##### `gatewayName`<sup>Required</sup> <a name="gatewayName" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.gatewayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#gateway_name ApiManagementGatewayHostNameConfiguration#gateway_name}.

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.hostName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#host_name ApiManagementGatewayHostNameConfiguration#host_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#name ApiManagementGatewayHostNameConfiguration#name}.

---

##### `http2Enabled`<sup>Optional</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.http2Enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#http2_enabled ApiManagementGatewayHostNameConfiguration#http2_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#id ApiManagementGatewayHostNameConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `requestClientCertificateEnabled`<sup>Optional</sup> <a name="requestClientCertificateEnabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.requestClientCertificateEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#request_client_certificate_enabled ApiManagementGatewayHostNameConfiguration#request_client_certificate_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts">ApiManagementGatewayHostNameConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#timeouts ApiManagementGatewayHostNameConfiguration#timeouts}

---

##### `tls10Enabled`<sup>Optional</sup> <a name="tls10Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.tls10Enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#tls10_enabled ApiManagementGatewayHostNameConfiguration#tls10_enabled}.

---

##### `tls11Enabled`<sup>Optional</sup> <a name="tls11Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.tls11Enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#tls11_enabled ApiManagementGatewayHostNameConfiguration#tls11_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetHttp2Enabled">resetHttp2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetRequestClientCertificateEnabled">resetRequestClientCertificateEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetTls10Enabled">resetTls10Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetTls11Enabled">resetTls11Enabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.putTimeouts"></a>

```java
public void putTimeouts(ApiManagementGatewayHostNameConfigurationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts">ApiManagementGatewayHostNameConfigurationTimeouts</a>

---

##### `resetHttp2Enabled` <a name="resetHttp2Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetHttp2Enabled"></a>

```java
public void resetHttp2Enabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetRequestClientCertificateEnabled` <a name="resetRequestClientCertificateEnabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetRequestClientCertificateEnabled"></a>

```java
public void resetRequestClientCertificateEnabled()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTls10Enabled` <a name="resetTls10Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetTls10Enabled"></a>

```java
public void resetTls10Enabled()
```

##### `resetTls11Enabled` <a name="resetTls11Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetTls11Enabled"></a>

```java
public void resetTls11Enabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementGatewayHostNameConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_gateway_host_name_configuration.ApiManagementGatewayHostNameConfiguration;

ApiManagementGatewayHostNameConfiguration.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_gateway_host_name_configuration.ApiManagementGatewayHostNameConfiguration;

ApiManagementGatewayHostNameConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_gateway_host_name_configuration.ApiManagementGatewayHostNameConfiguration;

ApiManagementGatewayHostNameConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_gateway_host_name_configuration.ApiManagementGatewayHostNameConfiguration;

ApiManagementGatewayHostNameConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApiManagementGatewayHostNameConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApiManagementGatewayHostNameConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApiManagementGatewayHostNameConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApiManagementGatewayHostNameConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementGatewayHostNameConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference">ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.apiManagementIdInput">apiManagementIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.certificateIdInput">certificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.gatewayNameInput">gatewayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.hostNameInput">hostNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.http2EnabledInput">http2EnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.requestClientCertificateEnabledInput">requestClientCertificateEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts">ApiManagementGatewayHostNameConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls10EnabledInput">tls10EnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls11EnabledInput">tls11EnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.apiManagementId">apiManagementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.gatewayName">gatewayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.http2Enabled">http2Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.requestClientCertificateEnabled">requestClientCertificateEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls10Enabled">tls10Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls11Enabled">tls11Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.timeouts"></a>

```java
public ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference">ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference</a>

---

##### `apiManagementIdInput`<sup>Optional</sup> <a name="apiManagementIdInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.apiManagementIdInput"></a>

```java
public java.lang.String getApiManagementIdInput();
```

- *Type:* java.lang.String

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.certificateIdInput"></a>

```java
public java.lang.String getCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `gatewayNameInput`<sup>Optional</sup> <a name="gatewayNameInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.gatewayNameInput"></a>

```java
public java.lang.String getGatewayNameInput();
```

- *Type:* java.lang.String

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.hostNameInput"></a>

```java
public java.lang.String getHostNameInput();
```

- *Type:* java.lang.String

---

##### `http2EnabledInput`<sup>Optional</sup> <a name="http2EnabledInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.http2EnabledInput"></a>

```java
public java.lang.Object getHttp2EnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `requestClientCertificateEnabledInput`<sup>Optional</sup> <a name="requestClientCertificateEnabledInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.requestClientCertificateEnabledInput"></a>

```java
public java.lang.Object getRequestClientCertificateEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts">ApiManagementGatewayHostNameConfigurationTimeouts</a>

---

##### `tls10EnabledInput`<sup>Optional</sup> <a name="tls10EnabledInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls10EnabledInput"></a>

```java
public java.lang.Object getTls10EnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tls11EnabledInput`<sup>Optional</sup> <a name="tls11EnabledInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls11EnabledInput"></a>

```java
public java.lang.Object getTls11EnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `apiManagementId`<sup>Required</sup> <a name="apiManagementId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.apiManagementId"></a>

```java
public java.lang.String getApiManagementId();
```

- *Type:* java.lang.String

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `gatewayName`<sup>Required</sup> <a name="gatewayName" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.gatewayName"></a>

```java
public java.lang.String getGatewayName();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `http2Enabled`<sup>Required</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.http2Enabled"></a>

```java
public java.lang.Object getHttp2Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `requestClientCertificateEnabled`<sup>Required</sup> <a name="requestClientCertificateEnabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.requestClientCertificateEnabled"></a>

```java
public java.lang.Object getRequestClientCertificateEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tls10Enabled`<sup>Required</sup> <a name="tls10Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls10Enabled"></a>

```java
public java.lang.Object getTls10Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tls11Enabled`<sup>Required</sup> <a name="tls11Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls11Enabled"></a>

```java
public java.lang.Object getTls11Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementGatewayHostNameConfigurationConfig <a name="ApiManagementGatewayHostNameConfigurationConfig" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_gateway_host_name_configuration.ApiManagementGatewayHostNameConfigurationConfig;

ApiManagementGatewayHostNameConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .apiManagementId(java.lang.String)
    .certificateId(java.lang.String)
    .gatewayName(java.lang.String)
    .hostName(java.lang.String)
    .name(java.lang.String)
//  .http2Enabled(java.lang.Boolean)
//  .http2Enabled(IResolvable)
//  .id(java.lang.String)
//  .requestClientCertificateEnabled(java.lang.Boolean)
//  .requestClientCertificateEnabled(IResolvable)
//  .timeouts(ApiManagementGatewayHostNameConfigurationTimeouts)
//  .tls10Enabled(java.lang.Boolean)
//  .tls10Enabled(IResolvable)
//  .tls11Enabled(java.lang.Boolean)
//  .tls11Enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.apiManagementId">apiManagementId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#api_management_id ApiManagementGatewayHostNameConfiguration#api_management_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#certificate_id ApiManagementGatewayHostNameConfiguration#certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.gatewayName">gatewayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#gateway_name ApiManagementGatewayHostNameConfiguration#gateway_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.hostName">hostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#host_name ApiManagementGatewayHostNameConfiguration#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#name ApiManagementGatewayHostNameConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.http2Enabled">http2Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#http2_enabled ApiManagementGatewayHostNameConfiguration#http2_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#id ApiManagementGatewayHostNameConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.requestClientCertificateEnabled">requestClientCertificateEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#request_client_certificate_enabled ApiManagementGatewayHostNameConfiguration#request_client_certificate_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts">ApiManagementGatewayHostNameConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.tls10Enabled">tls10Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#tls10_enabled ApiManagementGatewayHostNameConfiguration#tls10_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.tls11Enabled">tls11Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#tls11_enabled ApiManagementGatewayHostNameConfiguration#tls11_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiManagementId`<sup>Required</sup> <a name="apiManagementId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.apiManagementId"></a>

```java
public java.lang.String getApiManagementId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#api_management_id ApiManagementGatewayHostNameConfiguration#api_management_id}.

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#certificate_id ApiManagementGatewayHostNameConfiguration#certificate_id}.

---

##### `gatewayName`<sup>Required</sup> <a name="gatewayName" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.gatewayName"></a>

```java
public java.lang.String getGatewayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#gateway_name ApiManagementGatewayHostNameConfiguration#gateway_name}.

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#host_name ApiManagementGatewayHostNameConfiguration#host_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#name ApiManagementGatewayHostNameConfiguration#name}.

---

##### `http2Enabled`<sup>Optional</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.http2Enabled"></a>

```java
public java.lang.Object getHttp2Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#http2_enabled ApiManagementGatewayHostNameConfiguration#http2_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#id ApiManagementGatewayHostNameConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `requestClientCertificateEnabled`<sup>Optional</sup> <a name="requestClientCertificateEnabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.requestClientCertificateEnabled"></a>

```java
public java.lang.Object getRequestClientCertificateEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#request_client_certificate_enabled ApiManagementGatewayHostNameConfiguration#request_client_certificate_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.timeouts"></a>

```java
public ApiManagementGatewayHostNameConfigurationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts">ApiManagementGatewayHostNameConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#timeouts ApiManagementGatewayHostNameConfiguration#timeouts}

---

##### `tls10Enabled`<sup>Optional</sup> <a name="tls10Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.tls10Enabled"></a>

```java
public java.lang.Object getTls10Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#tls10_enabled ApiManagementGatewayHostNameConfiguration#tls10_enabled}.

---

##### `tls11Enabled`<sup>Optional</sup> <a name="tls11Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.tls11Enabled"></a>

```java
public java.lang.Object getTls11Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#tls11_enabled ApiManagementGatewayHostNameConfiguration#tls11_enabled}.

---

### ApiManagementGatewayHostNameConfigurationTimeouts <a name="ApiManagementGatewayHostNameConfigurationTimeouts" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_gateway_host_name_configuration.ApiManagementGatewayHostNameConfigurationTimeouts;

ApiManagementGatewayHostNameConfigurationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#create ApiManagementGatewayHostNameConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#delete ApiManagementGatewayHostNameConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#read ApiManagementGatewayHostNameConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#update ApiManagementGatewayHostNameConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#create ApiManagementGatewayHostNameConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#delete ApiManagementGatewayHostNameConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#read ApiManagementGatewayHostNameConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/api_management_gateway_host_name_configuration#update ApiManagementGatewayHostNameConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference <a name="ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_gateway_host_name_configuration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference;

new ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts">ApiManagementGatewayHostNameConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts">ApiManagementGatewayHostNameConfigurationTimeouts</a>

---



