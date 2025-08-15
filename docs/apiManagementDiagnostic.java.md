# `apiManagementDiagnostic` Submodule <a name="`apiManagementDiagnostic` Submodule" id="@cdktf/provider-azurerm.apiManagementDiagnostic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementDiagnostic <a name="ApiManagementDiagnostic" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic azurerm_api_management_diagnostic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnostic;

ApiManagementDiagnostic.Builder.create(Construct scope, java.lang.String id)
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
    .apiManagementLoggerId(java.lang.String)
    .apiManagementName(java.lang.String)
    .identifier(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .alwaysLogErrors(java.lang.Boolean)
//  .alwaysLogErrors(IResolvable)
//  .backendRequest(ApiManagementDiagnosticBackendRequest)
//  .backendResponse(ApiManagementDiagnosticBackendResponse)
//  .frontendRequest(ApiManagementDiagnosticFrontendRequest)
//  .frontendResponse(ApiManagementDiagnosticFrontendResponse)
//  .httpCorrelationProtocol(java.lang.String)
//  .id(java.lang.String)
//  .logClientIp(java.lang.Boolean)
//  .logClientIp(IResolvable)
//  .operationNameFormat(java.lang.String)
//  .samplingPercentage(java.lang.Number)
//  .timeouts(ApiManagementDiagnosticTimeouts)
//  .verbosity(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.apiManagementLoggerId">apiManagementLoggerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#api_management_logger_id ApiManagementDiagnostic#api_management_logger_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.apiManagementName">apiManagementName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#api_management_name ApiManagementDiagnostic#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.identifier">identifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#identifier ApiManagementDiagnostic#identifier}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#resource_group_name ApiManagementDiagnostic#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.alwaysLogErrors">alwaysLogErrors</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#always_log_errors ApiManagementDiagnostic#always_log_errors}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.backendRequest">backendRequest</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest">ApiManagementDiagnosticBackendRequest</a></code> | backend_request block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.backendResponse">backendResponse</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse">ApiManagementDiagnosticBackendResponse</a></code> | backend_response block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.frontendRequest">frontendRequest</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest">ApiManagementDiagnosticFrontendRequest</a></code> | frontend_request block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.frontendResponse">frontendResponse</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse">ApiManagementDiagnosticFrontendResponse</a></code> | frontend_response block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.httpCorrelationProtocol">httpCorrelationProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#http_correlation_protocol ApiManagementDiagnostic#http_correlation_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#id ApiManagementDiagnostic#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.logClientIp">logClientIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#log_client_ip ApiManagementDiagnostic#log_client_ip}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.operationNameFormat">operationNameFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#operation_name_format ApiManagementDiagnostic#operation_name_format}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.samplingPercentage">samplingPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#sampling_percentage ApiManagementDiagnostic#sampling_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts">ApiManagementDiagnosticTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.verbosity">verbosity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#verbosity ApiManagementDiagnostic#verbosity}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiManagementLoggerId`<sup>Required</sup> <a name="apiManagementLoggerId" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.apiManagementLoggerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#api_management_logger_id ApiManagementDiagnostic#api_management_logger_id}.

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.apiManagementName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#api_management_name ApiManagementDiagnostic#api_management_name}.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.identifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#identifier ApiManagementDiagnostic#identifier}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#resource_group_name ApiManagementDiagnostic#resource_group_name}.

---

##### `alwaysLogErrors`<sup>Optional</sup> <a name="alwaysLogErrors" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.alwaysLogErrors"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#always_log_errors ApiManagementDiagnostic#always_log_errors}.

---

##### `backendRequest`<sup>Optional</sup> <a name="backendRequest" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.backendRequest"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest">ApiManagementDiagnosticBackendRequest</a>

backend_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#backend_request ApiManagementDiagnostic#backend_request}

---

##### `backendResponse`<sup>Optional</sup> <a name="backendResponse" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.backendResponse"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse">ApiManagementDiagnosticBackendResponse</a>

backend_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#backend_response ApiManagementDiagnostic#backend_response}

---

##### `frontendRequest`<sup>Optional</sup> <a name="frontendRequest" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.frontendRequest"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest">ApiManagementDiagnosticFrontendRequest</a>

frontend_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#frontend_request ApiManagementDiagnostic#frontend_request}

---

##### `frontendResponse`<sup>Optional</sup> <a name="frontendResponse" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.frontendResponse"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse">ApiManagementDiagnosticFrontendResponse</a>

frontend_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#frontend_response ApiManagementDiagnostic#frontend_response}

---

##### `httpCorrelationProtocol`<sup>Optional</sup> <a name="httpCorrelationProtocol" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.httpCorrelationProtocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#http_correlation_protocol ApiManagementDiagnostic#http_correlation_protocol}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#id ApiManagementDiagnostic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logClientIp`<sup>Optional</sup> <a name="logClientIp" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.logClientIp"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#log_client_ip ApiManagementDiagnostic#log_client_ip}.

---

##### `operationNameFormat`<sup>Optional</sup> <a name="operationNameFormat" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.operationNameFormat"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#operation_name_format ApiManagementDiagnostic#operation_name_format}.

---

##### `samplingPercentage`<sup>Optional</sup> <a name="samplingPercentage" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.samplingPercentage"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#sampling_percentage ApiManagementDiagnostic#sampling_percentage}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts">ApiManagementDiagnosticTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#timeouts ApiManagementDiagnostic#timeouts}

---

##### `verbosity`<sup>Optional</sup> <a name="verbosity" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.verbosity"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#verbosity ApiManagementDiagnostic#verbosity}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putBackendRequest">putBackendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putBackendResponse">putBackendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putFrontendRequest">putFrontendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putFrontendResponse">putFrontendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetAlwaysLogErrors">resetAlwaysLogErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetBackendRequest">resetBackendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetBackendResponse">resetBackendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetFrontendRequest">resetFrontendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetFrontendResponse">resetFrontendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetHttpCorrelationProtocol">resetHttpCorrelationProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetLogClientIp">resetLogClientIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetOperationNameFormat">resetOperationNameFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetSamplingPercentage">resetSamplingPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetVerbosity">resetVerbosity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackendRequest` <a name="putBackendRequest" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putBackendRequest"></a>

```java
public void putBackendRequest(ApiManagementDiagnosticBackendRequest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putBackendRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest">ApiManagementDiagnosticBackendRequest</a>

---

##### `putBackendResponse` <a name="putBackendResponse" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putBackendResponse"></a>

```java
public void putBackendResponse(ApiManagementDiagnosticBackendResponse value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putBackendResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse">ApiManagementDiagnosticBackendResponse</a>

---

##### `putFrontendRequest` <a name="putFrontendRequest" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putFrontendRequest"></a>

```java
public void putFrontendRequest(ApiManagementDiagnosticFrontendRequest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putFrontendRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest">ApiManagementDiagnosticFrontendRequest</a>

---

##### `putFrontendResponse` <a name="putFrontendResponse" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putFrontendResponse"></a>

```java
public void putFrontendResponse(ApiManagementDiagnosticFrontendResponse value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putFrontendResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse">ApiManagementDiagnosticFrontendResponse</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putTimeouts"></a>

```java
public void putTimeouts(ApiManagementDiagnosticTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts">ApiManagementDiagnosticTimeouts</a>

---

##### `resetAlwaysLogErrors` <a name="resetAlwaysLogErrors" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetAlwaysLogErrors"></a>

```java
public void resetAlwaysLogErrors()
```

##### `resetBackendRequest` <a name="resetBackendRequest" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetBackendRequest"></a>

```java
public void resetBackendRequest()
```

##### `resetBackendResponse` <a name="resetBackendResponse" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetBackendResponse"></a>

```java
public void resetBackendResponse()
```

##### `resetFrontendRequest` <a name="resetFrontendRequest" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetFrontendRequest"></a>

```java
public void resetFrontendRequest()
```

##### `resetFrontendResponse` <a name="resetFrontendResponse" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetFrontendResponse"></a>

```java
public void resetFrontendResponse()
```

##### `resetHttpCorrelationProtocol` <a name="resetHttpCorrelationProtocol" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetHttpCorrelationProtocol"></a>

```java
public void resetHttpCorrelationProtocol()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetId"></a>

```java
public void resetId()
```

##### `resetLogClientIp` <a name="resetLogClientIp" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetLogClientIp"></a>

```java
public void resetLogClientIp()
```

##### `resetOperationNameFormat` <a name="resetOperationNameFormat" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetOperationNameFormat"></a>

```java
public void resetOperationNameFormat()
```

##### `resetSamplingPercentage` <a name="resetSamplingPercentage" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetSamplingPercentage"></a>

```java
public void resetSamplingPercentage()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVerbosity` <a name="resetVerbosity" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetVerbosity"></a>

```java
public void resetVerbosity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementDiagnostic resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnostic;

ApiManagementDiagnostic.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnostic;

ApiManagementDiagnostic.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnostic;

ApiManagementDiagnostic.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnostic;

ApiManagementDiagnostic.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApiManagementDiagnostic.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApiManagementDiagnostic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApiManagementDiagnostic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApiManagementDiagnostic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementDiagnostic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.backendRequest">backendRequest</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference">ApiManagementDiagnosticBackendRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.backendResponse">backendResponse</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference">ApiManagementDiagnosticBackendResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.frontendRequest">frontendRequest</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference">ApiManagementDiagnosticFrontendRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.frontendResponse">frontendResponse</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference">ApiManagementDiagnosticFrontendResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference">ApiManagementDiagnosticTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.alwaysLogErrorsInput">alwaysLogErrorsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.apiManagementLoggerIdInput">apiManagementLoggerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.apiManagementNameInput">apiManagementNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.backendRequestInput">backendRequestInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest">ApiManagementDiagnosticBackendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.backendResponseInput">backendResponseInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse">ApiManagementDiagnosticBackendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.frontendRequestInput">frontendRequestInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest">ApiManagementDiagnosticFrontendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.frontendResponseInput">frontendResponseInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse">ApiManagementDiagnosticFrontendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.httpCorrelationProtocolInput">httpCorrelationProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.identifierInput">identifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.logClientIpInput">logClientIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.operationNameFormatInput">operationNameFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.samplingPercentageInput">samplingPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts">ApiManagementDiagnosticTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.verbosityInput">verbosityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.alwaysLogErrors">alwaysLogErrors</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.apiManagementLoggerId">apiManagementLoggerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.apiManagementName">apiManagementName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.httpCorrelationProtocol">httpCorrelationProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.logClientIp">logClientIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.operationNameFormat">operationNameFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.samplingPercentage">samplingPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.verbosity">verbosity</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backendRequest`<sup>Required</sup> <a name="backendRequest" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.backendRequest"></a>

```java
public ApiManagementDiagnosticBackendRequestOutputReference getBackendRequest();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference">ApiManagementDiagnosticBackendRequestOutputReference</a>

---

##### `backendResponse`<sup>Required</sup> <a name="backendResponse" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.backendResponse"></a>

```java
public ApiManagementDiagnosticBackendResponseOutputReference getBackendResponse();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference">ApiManagementDiagnosticBackendResponseOutputReference</a>

---

##### `frontendRequest`<sup>Required</sup> <a name="frontendRequest" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.frontendRequest"></a>

```java
public ApiManagementDiagnosticFrontendRequestOutputReference getFrontendRequest();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference">ApiManagementDiagnosticFrontendRequestOutputReference</a>

---

##### `frontendResponse`<sup>Required</sup> <a name="frontendResponse" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.frontendResponse"></a>

```java
public ApiManagementDiagnosticFrontendResponseOutputReference getFrontendResponse();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference">ApiManagementDiagnosticFrontendResponseOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.timeouts"></a>

```java
public ApiManagementDiagnosticTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference">ApiManagementDiagnosticTimeoutsOutputReference</a>

---

##### `alwaysLogErrorsInput`<sup>Optional</sup> <a name="alwaysLogErrorsInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.alwaysLogErrorsInput"></a>

```java
public java.lang.Object getAlwaysLogErrorsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `apiManagementLoggerIdInput`<sup>Optional</sup> <a name="apiManagementLoggerIdInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.apiManagementLoggerIdInput"></a>

```java
public java.lang.String getApiManagementLoggerIdInput();
```

- *Type:* java.lang.String

---

##### `apiManagementNameInput`<sup>Optional</sup> <a name="apiManagementNameInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.apiManagementNameInput"></a>

```java
public java.lang.String getApiManagementNameInput();
```

- *Type:* java.lang.String

---

##### `backendRequestInput`<sup>Optional</sup> <a name="backendRequestInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.backendRequestInput"></a>

```java
public ApiManagementDiagnosticBackendRequest getBackendRequestInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest">ApiManagementDiagnosticBackendRequest</a>

---

##### `backendResponseInput`<sup>Optional</sup> <a name="backendResponseInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.backendResponseInput"></a>

```java
public ApiManagementDiagnosticBackendResponse getBackendResponseInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse">ApiManagementDiagnosticBackendResponse</a>

---

##### `frontendRequestInput`<sup>Optional</sup> <a name="frontendRequestInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.frontendRequestInput"></a>

```java
public ApiManagementDiagnosticFrontendRequest getFrontendRequestInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest">ApiManagementDiagnosticFrontendRequest</a>

---

##### `frontendResponseInput`<sup>Optional</sup> <a name="frontendResponseInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.frontendResponseInput"></a>

```java
public ApiManagementDiagnosticFrontendResponse getFrontendResponseInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse">ApiManagementDiagnosticFrontendResponse</a>

---

##### `httpCorrelationProtocolInput`<sup>Optional</sup> <a name="httpCorrelationProtocolInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.httpCorrelationProtocolInput"></a>

```java
public java.lang.String getHttpCorrelationProtocolInput();
```

- *Type:* java.lang.String

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.identifierInput"></a>

```java
public java.lang.String getIdentifierInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logClientIpInput`<sup>Optional</sup> <a name="logClientIpInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.logClientIpInput"></a>

```java
public java.lang.Object getLogClientIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationNameFormatInput`<sup>Optional</sup> <a name="operationNameFormatInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.operationNameFormatInput"></a>

```java
public java.lang.String getOperationNameFormatInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `samplingPercentageInput`<sup>Optional</sup> <a name="samplingPercentageInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.samplingPercentageInput"></a>

```java
public java.lang.Number getSamplingPercentageInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts">ApiManagementDiagnosticTimeouts</a>

---

##### `verbosityInput`<sup>Optional</sup> <a name="verbosityInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.verbosityInput"></a>

```java
public java.lang.String getVerbosityInput();
```

- *Type:* java.lang.String

---

##### `alwaysLogErrors`<sup>Required</sup> <a name="alwaysLogErrors" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.alwaysLogErrors"></a>

```java
public java.lang.Object getAlwaysLogErrors();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `apiManagementLoggerId`<sup>Required</sup> <a name="apiManagementLoggerId" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.apiManagementLoggerId"></a>

```java
public java.lang.String getApiManagementLoggerId();
```

- *Type:* java.lang.String

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.apiManagementName"></a>

```java
public java.lang.String getApiManagementName();
```

- *Type:* java.lang.String

---

##### `httpCorrelationProtocol`<sup>Required</sup> <a name="httpCorrelationProtocol" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.httpCorrelationProtocol"></a>

```java
public java.lang.String getHttpCorrelationProtocol();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `logClientIp`<sup>Required</sup> <a name="logClientIp" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.logClientIp"></a>

```java
public java.lang.Object getLogClientIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operationNameFormat`<sup>Required</sup> <a name="operationNameFormat" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.operationNameFormat"></a>

```java
public java.lang.String getOperationNameFormat();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `samplingPercentage`<sup>Required</sup> <a name="samplingPercentage" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.samplingPercentage"></a>

```java
public java.lang.Number getSamplingPercentage();
```

- *Type:* java.lang.Number

---

##### `verbosity`<sup>Required</sup> <a name="verbosity" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.verbosity"></a>

```java
public java.lang.String getVerbosity();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementDiagnosticBackendRequest <a name="ApiManagementDiagnosticBackendRequest" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticBackendRequest;

ApiManagementDiagnosticBackendRequest.builder()
//  .bodyBytes(java.lang.Number)
//  .dataMasking(ApiManagementDiagnosticBackendRequestDataMasking)
//  .headersToLog(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest.property.bodyBytes">bodyBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest.property.dataMasking">dataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking">ApiManagementDiagnosticBackendRequestDataMasking</a></code> | data_masking block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest.property.headersToLog">headersToLog</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}. |

---

##### `bodyBytes`<sup>Optional</sup> <a name="bodyBytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest.property.bodyBytes"></a>

```java
public java.lang.Number getBodyBytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}.

---

##### `dataMasking`<sup>Optional</sup> <a name="dataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest.property.dataMasking"></a>

```java
public ApiManagementDiagnosticBackendRequestDataMasking getDataMasking();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking">ApiManagementDiagnosticBackendRequestDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#data_masking ApiManagementDiagnostic#data_masking}

---

##### `headersToLog`<sup>Optional</sup> <a name="headersToLog" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest.property.headersToLog"></a>

```java
public java.util.List<java.lang.String> getHeadersToLog();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}.

---

### ApiManagementDiagnosticBackendRequestDataMasking <a name="ApiManagementDiagnosticBackendRequestDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticBackendRequestDataMasking;

ApiManagementDiagnosticBackendRequestDataMasking.builder()
//  .headers(IResolvable)
//  .headers(java.util.List<ApiManagementDiagnosticBackendRequestDataMaskingHeaders>)
//  .queryParams(IResolvable)
//  .queryParams(java.util.List<ApiManagementDiagnosticBackendRequestDataMaskingQueryParams>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking.property.headers">headers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders">ApiManagementDiagnosticBackendRequestDataMaskingHeaders</a>></code> | headers block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking.property.queryParams">queryParams</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementDiagnosticBackendRequestDataMaskingQueryParams</a>></code> | query_params block. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking.property.headers"></a>

```java
public java.lang.Object getHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders">ApiManagementDiagnosticBackendRequestDataMaskingHeaders</a>>

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#headers ApiManagementDiagnostic#headers}

---

##### `queryParams`<sup>Optional</sup> <a name="queryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking.property.queryParams"></a>

```java
public java.lang.Object getQueryParams();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementDiagnosticBackendRequestDataMaskingQueryParams</a>>

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#query_params ApiManagementDiagnostic#query_params}

---

### ApiManagementDiagnosticBackendRequestDataMaskingHeaders <a name="ApiManagementDiagnosticBackendRequestDataMaskingHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders;

ApiManagementDiagnosticBackendRequestDataMaskingHeaders.builder()
    .mode(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}.

---

### ApiManagementDiagnosticBackendRequestDataMaskingQueryParams <a name="ApiManagementDiagnosticBackendRequestDataMaskingQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams;

ApiManagementDiagnosticBackendRequestDataMaskingQueryParams.builder()
    .mode(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}.

---

### ApiManagementDiagnosticBackendResponse <a name="ApiManagementDiagnosticBackendResponse" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticBackendResponse;

ApiManagementDiagnosticBackendResponse.builder()
//  .bodyBytes(java.lang.Number)
//  .dataMasking(ApiManagementDiagnosticBackendResponseDataMasking)
//  .headersToLog(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse.property.bodyBytes">bodyBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse.property.dataMasking">dataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking">ApiManagementDiagnosticBackendResponseDataMasking</a></code> | data_masking block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse.property.headersToLog">headersToLog</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}. |

---

##### `bodyBytes`<sup>Optional</sup> <a name="bodyBytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse.property.bodyBytes"></a>

```java
public java.lang.Number getBodyBytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}.

---

##### `dataMasking`<sup>Optional</sup> <a name="dataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse.property.dataMasking"></a>

```java
public ApiManagementDiagnosticBackendResponseDataMasking getDataMasking();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking">ApiManagementDiagnosticBackendResponseDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#data_masking ApiManagementDiagnostic#data_masking}

---

##### `headersToLog`<sup>Optional</sup> <a name="headersToLog" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse.property.headersToLog"></a>

```java
public java.util.List<java.lang.String> getHeadersToLog();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}.

---

### ApiManagementDiagnosticBackendResponseDataMasking <a name="ApiManagementDiagnosticBackendResponseDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticBackendResponseDataMasking;

ApiManagementDiagnosticBackendResponseDataMasking.builder()
//  .headers(IResolvable)
//  .headers(java.util.List<ApiManagementDiagnosticBackendResponseDataMaskingHeaders>)
//  .queryParams(IResolvable)
//  .queryParams(java.util.List<ApiManagementDiagnosticBackendResponseDataMaskingQueryParams>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking.property.headers">headers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders">ApiManagementDiagnosticBackendResponseDataMaskingHeaders</a>></code> | headers block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking.property.queryParams">queryParams</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementDiagnosticBackendResponseDataMaskingQueryParams</a>></code> | query_params block. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking.property.headers"></a>

```java
public java.lang.Object getHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders">ApiManagementDiagnosticBackendResponseDataMaskingHeaders</a>>

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#headers ApiManagementDiagnostic#headers}

---

##### `queryParams`<sup>Optional</sup> <a name="queryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking.property.queryParams"></a>

```java
public java.lang.Object getQueryParams();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementDiagnosticBackendResponseDataMaskingQueryParams</a>>

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#query_params ApiManagementDiagnostic#query_params}

---

### ApiManagementDiagnosticBackendResponseDataMaskingHeaders <a name="ApiManagementDiagnosticBackendResponseDataMaskingHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders;

ApiManagementDiagnosticBackendResponseDataMaskingHeaders.builder()
    .mode(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}.

---

### ApiManagementDiagnosticBackendResponseDataMaskingQueryParams <a name="ApiManagementDiagnosticBackendResponseDataMaskingQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams;

ApiManagementDiagnosticBackendResponseDataMaskingQueryParams.builder()
    .mode(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}.

---

### ApiManagementDiagnosticConfig <a name="ApiManagementDiagnosticConfig" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticConfig;

ApiManagementDiagnosticConfig.builder()
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
    .apiManagementLoggerId(java.lang.String)
    .apiManagementName(java.lang.String)
    .identifier(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .alwaysLogErrors(java.lang.Boolean)
//  .alwaysLogErrors(IResolvable)
//  .backendRequest(ApiManagementDiagnosticBackendRequest)
//  .backendResponse(ApiManagementDiagnosticBackendResponse)
//  .frontendRequest(ApiManagementDiagnosticFrontendRequest)
//  .frontendResponse(ApiManagementDiagnosticFrontendResponse)
//  .httpCorrelationProtocol(java.lang.String)
//  .id(java.lang.String)
//  .logClientIp(java.lang.Boolean)
//  .logClientIp(IResolvable)
//  .operationNameFormat(java.lang.String)
//  .samplingPercentage(java.lang.Number)
//  .timeouts(ApiManagementDiagnosticTimeouts)
//  .verbosity(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.apiManagementLoggerId">apiManagementLoggerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#api_management_logger_id ApiManagementDiagnostic#api_management_logger_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.apiManagementName">apiManagementName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#api_management_name ApiManagementDiagnostic#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.identifier">identifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#identifier ApiManagementDiagnostic#identifier}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#resource_group_name ApiManagementDiagnostic#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.alwaysLogErrors">alwaysLogErrors</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#always_log_errors ApiManagementDiagnostic#always_log_errors}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.backendRequest">backendRequest</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest">ApiManagementDiagnosticBackendRequest</a></code> | backend_request block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.backendResponse">backendResponse</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse">ApiManagementDiagnosticBackendResponse</a></code> | backend_response block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.frontendRequest">frontendRequest</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest">ApiManagementDiagnosticFrontendRequest</a></code> | frontend_request block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.frontendResponse">frontendResponse</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse">ApiManagementDiagnosticFrontendResponse</a></code> | frontend_response block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.httpCorrelationProtocol">httpCorrelationProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#http_correlation_protocol ApiManagementDiagnostic#http_correlation_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#id ApiManagementDiagnostic#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.logClientIp">logClientIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#log_client_ip ApiManagementDiagnostic#log_client_ip}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.operationNameFormat">operationNameFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#operation_name_format ApiManagementDiagnostic#operation_name_format}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.samplingPercentage">samplingPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#sampling_percentage ApiManagementDiagnostic#sampling_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts">ApiManagementDiagnosticTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.verbosity">verbosity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#verbosity ApiManagementDiagnostic#verbosity}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiManagementLoggerId`<sup>Required</sup> <a name="apiManagementLoggerId" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.apiManagementLoggerId"></a>

```java
public java.lang.String getApiManagementLoggerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#api_management_logger_id ApiManagementDiagnostic#api_management_logger_id}.

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.apiManagementName"></a>

```java
public java.lang.String getApiManagementName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#api_management_name ApiManagementDiagnostic#api_management_name}.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#identifier ApiManagementDiagnostic#identifier}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#resource_group_name ApiManagementDiagnostic#resource_group_name}.

---

##### `alwaysLogErrors`<sup>Optional</sup> <a name="alwaysLogErrors" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.alwaysLogErrors"></a>

```java
public java.lang.Object getAlwaysLogErrors();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#always_log_errors ApiManagementDiagnostic#always_log_errors}.

---

##### `backendRequest`<sup>Optional</sup> <a name="backendRequest" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.backendRequest"></a>

```java
public ApiManagementDiagnosticBackendRequest getBackendRequest();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest">ApiManagementDiagnosticBackendRequest</a>

backend_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#backend_request ApiManagementDiagnostic#backend_request}

---

##### `backendResponse`<sup>Optional</sup> <a name="backendResponse" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.backendResponse"></a>

```java
public ApiManagementDiagnosticBackendResponse getBackendResponse();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse">ApiManagementDiagnosticBackendResponse</a>

backend_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#backend_response ApiManagementDiagnostic#backend_response}

---

##### `frontendRequest`<sup>Optional</sup> <a name="frontendRequest" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.frontendRequest"></a>

```java
public ApiManagementDiagnosticFrontendRequest getFrontendRequest();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest">ApiManagementDiagnosticFrontendRequest</a>

frontend_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#frontend_request ApiManagementDiagnostic#frontend_request}

---

##### `frontendResponse`<sup>Optional</sup> <a name="frontendResponse" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.frontendResponse"></a>

```java
public ApiManagementDiagnosticFrontendResponse getFrontendResponse();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse">ApiManagementDiagnosticFrontendResponse</a>

frontend_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#frontend_response ApiManagementDiagnostic#frontend_response}

---

##### `httpCorrelationProtocol`<sup>Optional</sup> <a name="httpCorrelationProtocol" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.httpCorrelationProtocol"></a>

```java
public java.lang.String getHttpCorrelationProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#http_correlation_protocol ApiManagementDiagnostic#http_correlation_protocol}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#id ApiManagementDiagnostic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logClientIp`<sup>Optional</sup> <a name="logClientIp" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.logClientIp"></a>

```java
public java.lang.Object getLogClientIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#log_client_ip ApiManagementDiagnostic#log_client_ip}.

---

##### `operationNameFormat`<sup>Optional</sup> <a name="operationNameFormat" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.operationNameFormat"></a>

```java
public java.lang.String getOperationNameFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#operation_name_format ApiManagementDiagnostic#operation_name_format}.

---

##### `samplingPercentage`<sup>Optional</sup> <a name="samplingPercentage" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.samplingPercentage"></a>

```java
public java.lang.Number getSamplingPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#sampling_percentage ApiManagementDiagnostic#sampling_percentage}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.timeouts"></a>

```java
public ApiManagementDiagnosticTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts">ApiManagementDiagnosticTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#timeouts ApiManagementDiagnostic#timeouts}

---

##### `verbosity`<sup>Optional</sup> <a name="verbosity" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.verbosity"></a>

```java
public java.lang.String getVerbosity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#verbosity ApiManagementDiagnostic#verbosity}.

---

### ApiManagementDiagnosticFrontendRequest <a name="ApiManagementDiagnosticFrontendRequest" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticFrontendRequest;

ApiManagementDiagnosticFrontendRequest.builder()
//  .bodyBytes(java.lang.Number)
//  .dataMasking(ApiManagementDiagnosticFrontendRequestDataMasking)
//  .headersToLog(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest.property.bodyBytes">bodyBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest.property.dataMasking">dataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking">ApiManagementDiagnosticFrontendRequestDataMasking</a></code> | data_masking block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest.property.headersToLog">headersToLog</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}. |

---

##### `bodyBytes`<sup>Optional</sup> <a name="bodyBytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest.property.bodyBytes"></a>

```java
public java.lang.Number getBodyBytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}.

---

##### `dataMasking`<sup>Optional</sup> <a name="dataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest.property.dataMasking"></a>

```java
public ApiManagementDiagnosticFrontendRequestDataMasking getDataMasking();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking">ApiManagementDiagnosticFrontendRequestDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#data_masking ApiManagementDiagnostic#data_masking}

---

##### `headersToLog`<sup>Optional</sup> <a name="headersToLog" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest.property.headersToLog"></a>

```java
public java.util.List<java.lang.String> getHeadersToLog();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}.

---

### ApiManagementDiagnosticFrontendRequestDataMasking <a name="ApiManagementDiagnosticFrontendRequestDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticFrontendRequestDataMasking;

ApiManagementDiagnosticFrontendRequestDataMasking.builder()
//  .headers(IResolvable)
//  .headers(java.util.List<ApiManagementDiagnosticFrontendRequestDataMaskingHeaders>)
//  .queryParams(IResolvable)
//  .queryParams(java.util.List<ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking.property.headers">headers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementDiagnosticFrontendRequestDataMaskingHeaders</a>></code> | headers block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking.property.queryParams">queryParams</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams</a>></code> | query_params block. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking.property.headers"></a>

```java
public java.lang.Object getHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementDiagnosticFrontendRequestDataMaskingHeaders</a>>

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#headers ApiManagementDiagnostic#headers}

---

##### `queryParams`<sup>Optional</sup> <a name="queryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking.property.queryParams"></a>

```java
public java.lang.Object getQueryParams();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams</a>>

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#query_params ApiManagementDiagnostic#query_params}

---

### ApiManagementDiagnosticFrontendRequestDataMaskingHeaders <a name="ApiManagementDiagnosticFrontendRequestDataMaskingHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders;

ApiManagementDiagnosticFrontendRequestDataMaskingHeaders.builder()
    .mode(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}.

---

### ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams <a name="ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams;

ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams.builder()
    .mode(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}.

---

### ApiManagementDiagnosticFrontendResponse <a name="ApiManagementDiagnosticFrontendResponse" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticFrontendResponse;

ApiManagementDiagnosticFrontendResponse.builder()
//  .bodyBytes(java.lang.Number)
//  .dataMasking(ApiManagementDiagnosticFrontendResponseDataMasking)
//  .headersToLog(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse.property.bodyBytes">bodyBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse.property.dataMasking">dataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking">ApiManagementDiagnosticFrontendResponseDataMasking</a></code> | data_masking block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse.property.headersToLog">headersToLog</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}. |

---

##### `bodyBytes`<sup>Optional</sup> <a name="bodyBytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse.property.bodyBytes"></a>

```java
public java.lang.Number getBodyBytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}.

---

##### `dataMasking`<sup>Optional</sup> <a name="dataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse.property.dataMasking"></a>

```java
public ApiManagementDiagnosticFrontendResponseDataMasking getDataMasking();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking">ApiManagementDiagnosticFrontendResponseDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#data_masking ApiManagementDiagnostic#data_masking}

---

##### `headersToLog`<sup>Optional</sup> <a name="headersToLog" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse.property.headersToLog"></a>

```java
public java.util.List<java.lang.String> getHeadersToLog();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}.

---

### ApiManagementDiagnosticFrontendResponseDataMasking <a name="ApiManagementDiagnosticFrontendResponseDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticFrontendResponseDataMasking;

ApiManagementDiagnosticFrontendResponseDataMasking.builder()
//  .headers(IResolvable)
//  .headers(java.util.List<ApiManagementDiagnosticFrontendResponseDataMaskingHeaders>)
//  .queryParams(IResolvable)
//  .queryParams(java.util.List<ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking.property.headers">headers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementDiagnosticFrontendResponseDataMaskingHeaders</a>></code> | headers block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking.property.queryParams">queryParams</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams</a>></code> | query_params block. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking.property.headers"></a>

```java
public java.lang.Object getHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementDiagnosticFrontendResponseDataMaskingHeaders</a>>

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#headers ApiManagementDiagnostic#headers}

---

##### `queryParams`<sup>Optional</sup> <a name="queryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking.property.queryParams"></a>

```java
public java.lang.Object getQueryParams();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams</a>>

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#query_params ApiManagementDiagnostic#query_params}

---

### ApiManagementDiagnosticFrontendResponseDataMaskingHeaders <a name="ApiManagementDiagnosticFrontendResponseDataMaskingHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders;

ApiManagementDiagnosticFrontendResponseDataMaskingHeaders.builder()
    .mode(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}.

---

### ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams <a name="ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams;

ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams.builder()
    .mode(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}.

---

### ApiManagementDiagnosticTimeouts <a name="ApiManagementDiagnosticTimeouts" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticTimeouts;

ApiManagementDiagnosticTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#create ApiManagementDiagnostic#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#delete ApiManagementDiagnostic#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#read ApiManagementDiagnostic#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#update ApiManagementDiagnostic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#create ApiManagementDiagnostic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#delete ApiManagementDiagnostic#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#read ApiManagementDiagnostic#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/api_management_diagnostic#update ApiManagementDiagnostic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementDiagnosticBackendRequestDataMaskingHeadersList <a name="ApiManagementDiagnosticBackendRequestDataMaskingHeadersList" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList;

new ApiManagementDiagnosticBackendRequestDataMaskingHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.get"></a>

```java
public ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders">ApiManagementDiagnosticBackendRequestDataMaskingHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders">ApiManagementDiagnosticBackendRequestDataMaskingHeaders</a>>

---


### ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference <a name="ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference;

new ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders">ApiManagementDiagnosticBackendRequestDataMaskingHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders">ApiManagementDiagnosticBackendRequestDataMaskingHeaders</a>

---


### ApiManagementDiagnosticBackendRequestDataMaskingOutputReference <a name="ApiManagementDiagnosticBackendRequestDataMaskingOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference;

new ApiManagementDiagnosticBackendRequestDataMaskingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.putQueryParams">putQueryParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.resetQueryParams">resetQueryParams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.putHeaders"></a>

```java
public void putHeaders(IResolvable OR java.util.List<ApiManagementDiagnosticBackendRequestDataMaskingHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.putHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders">ApiManagementDiagnosticBackendRequestDataMaskingHeaders</a>>

---

##### `putQueryParams` <a name="putQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.putQueryParams"></a>

```java
public void putQueryParams(IResolvable OR java.util.List<ApiManagementDiagnosticBackendRequestDataMaskingQueryParams> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.putQueryParams.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementDiagnosticBackendRequestDataMaskingQueryParams</a>>

---

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetQueryParams` <a name="resetQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.resetQueryParams"></a>

```java
public void resetQueryParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList">ApiManagementDiagnosticBackendRequestDataMaskingHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.queryParams">queryParams</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList">ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.headersInput">headersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders">ApiManagementDiagnosticBackendRequestDataMaskingHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.queryParamsInput">queryParamsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementDiagnosticBackendRequestDataMaskingQueryParams</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking">ApiManagementDiagnosticBackendRequestDataMasking</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.headers"></a>

```java
public ApiManagementDiagnosticBackendRequestDataMaskingHeadersList getHeaders();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList">ApiManagementDiagnosticBackendRequestDataMaskingHeadersList</a>

---

##### `queryParams`<sup>Required</sup> <a name="queryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.queryParams"></a>

```java
public ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList getQueryParams();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList">ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList</a>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.headersInput"></a>

```java
public java.lang.Object getHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders">ApiManagementDiagnosticBackendRequestDataMaskingHeaders</a>>

---

##### `queryParamsInput`<sup>Optional</sup> <a name="queryParamsInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.queryParamsInput"></a>

```java
public java.lang.Object getQueryParamsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementDiagnosticBackendRequestDataMaskingQueryParams</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.internalValue"></a>

```java
public ApiManagementDiagnosticBackendRequestDataMasking getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking">ApiManagementDiagnosticBackendRequestDataMasking</a>

---


### ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList <a name="ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList;

new ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.get"></a>

```java
public ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementDiagnosticBackendRequestDataMaskingQueryParams</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementDiagnosticBackendRequestDataMaskingQueryParams</a>>

---


### ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference <a name="ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference;

new ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementDiagnosticBackendRequestDataMaskingQueryParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementDiagnosticBackendRequestDataMaskingQueryParams</a>

---


### ApiManagementDiagnosticBackendRequestOutputReference <a name="ApiManagementDiagnosticBackendRequestOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticBackendRequestOutputReference;

new ApiManagementDiagnosticBackendRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.putDataMasking">putDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resetBodyBytes">resetBodyBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resetDataMasking">resetDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resetHeadersToLog">resetHeadersToLog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataMasking` <a name="putDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.putDataMasking"></a>

```java
public void putDataMasking(ApiManagementDiagnosticBackendRequestDataMasking value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.putDataMasking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking">ApiManagementDiagnosticBackendRequestDataMasking</a>

---

##### `resetBodyBytes` <a name="resetBodyBytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resetBodyBytes"></a>

```java
public void resetBodyBytes()
```

##### `resetDataMasking` <a name="resetDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resetDataMasking"></a>

```java
public void resetDataMasking()
```

##### `resetHeadersToLog` <a name="resetHeadersToLog" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resetHeadersToLog"></a>

```java
public void resetHeadersToLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.dataMasking">dataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference">ApiManagementDiagnosticBackendRequestDataMaskingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.bodyBytesInput">bodyBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.dataMaskingInput">dataMaskingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking">ApiManagementDiagnosticBackendRequestDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.headersToLogInput">headersToLogInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.bodyBytes">bodyBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.headersToLog">headersToLog</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest">ApiManagementDiagnosticBackendRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataMasking`<sup>Required</sup> <a name="dataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.dataMasking"></a>

```java
public ApiManagementDiagnosticBackendRequestDataMaskingOutputReference getDataMasking();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference">ApiManagementDiagnosticBackendRequestDataMaskingOutputReference</a>

---

##### `bodyBytesInput`<sup>Optional</sup> <a name="bodyBytesInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.bodyBytesInput"></a>

```java
public java.lang.Number getBodyBytesInput();
```

- *Type:* java.lang.Number

---

##### `dataMaskingInput`<sup>Optional</sup> <a name="dataMaskingInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.dataMaskingInput"></a>

```java
public ApiManagementDiagnosticBackendRequestDataMasking getDataMaskingInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking">ApiManagementDiagnosticBackendRequestDataMasking</a>

---

##### `headersToLogInput`<sup>Optional</sup> <a name="headersToLogInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.headersToLogInput"></a>

```java
public java.util.List<java.lang.String> getHeadersToLogInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bodyBytes`<sup>Required</sup> <a name="bodyBytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.bodyBytes"></a>

```java
public java.lang.Number getBodyBytes();
```

- *Type:* java.lang.Number

---

##### `headersToLog`<sup>Required</sup> <a name="headersToLog" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.headersToLog"></a>

```java
public java.util.List<java.lang.String> getHeadersToLog();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.internalValue"></a>

```java
public ApiManagementDiagnosticBackendRequest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest">ApiManagementDiagnosticBackendRequest</a>

---


### ApiManagementDiagnosticBackendResponseDataMaskingHeadersList <a name="ApiManagementDiagnosticBackendResponseDataMaskingHeadersList" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList;

new ApiManagementDiagnosticBackendResponseDataMaskingHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.get"></a>

```java
public ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders">ApiManagementDiagnosticBackendResponseDataMaskingHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders">ApiManagementDiagnosticBackendResponseDataMaskingHeaders</a>>

---


### ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference <a name="ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference;

new ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders">ApiManagementDiagnosticBackendResponseDataMaskingHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders">ApiManagementDiagnosticBackendResponseDataMaskingHeaders</a>

---


### ApiManagementDiagnosticBackendResponseDataMaskingOutputReference <a name="ApiManagementDiagnosticBackendResponseDataMaskingOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference;

new ApiManagementDiagnosticBackendResponseDataMaskingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.putQueryParams">putQueryParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.resetQueryParams">resetQueryParams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.putHeaders"></a>

```java
public void putHeaders(IResolvable OR java.util.List<ApiManagementDiagnosticBackendResponseDataMaskingHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.putHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders">ApiManagementDiagnosticBackendResponseDataMaskingHeaders</a>>

---

##### `putQueryParams` <a name="putQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.putQueryParams"></a>

```java
public void putQueryParams(IResolvable OR java.util.List<ApiManagementDiagnosticBackendResponseDataMaskingQueryParams> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.putQueryParams.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementDiagnosticBackendResponseDataMaskingQueryParams</a>>

---

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetQueryParams` <a name="resetQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.resetQueryParams"></a>

```java
public void resetQueryParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList">ApiManagementDiagnosticBackendResponseDataMaskingHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.queryParams">queryParams</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList">ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.headersInput">headersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders">ApiManagementDiagnosticBackendResponseDataMaskingHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.queryParamsInput">queryParamsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementDiagnosticBackendResponseDataMaskingQueryParams</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking">ApiManagementDiagnosticBackendResponseDataMasking</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.headers"></a>

```java
public ApiManagementDiagnosticBackendResponseDataMaskingHeadersList getHeaders();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList">ApiManagementDiagnosticBackendResponseDataMaskingHeadersList</a>

---

##### `queryParams`<sup>Required</sup> <a name="queryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.queryParams"></a>

```java
public ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList getQueryParams();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList">ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList</a>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.headersInput"></a>

```java
public java.lang.Object getHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders">ApiManagementDiagnosticBackendResponseDataMaskingHeaders</a>>

---

##### `queryParamsInput`<sup>Optional</sup> <a name="queryParamsInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.queryParamsInput"></a>

```java
public java.lang.Object getQueryParamsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementDiagnosticBackendResponseDataMaskingQueryParams</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.internalValue"></a>

```java
public ApiManagementDiagnosticBackendResponseDataMasking getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking">ApiManagementDiagnosticBackendResponseDataMasking</a>

---


### ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList <a name="ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList;

new ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.get"></a>

```java
public ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementDiagnosticBackendResponseDataMaskingQueryParams</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementDiagnosticBackendResponseDataMaskingQueryParams</a>>

---


### ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference <a name="ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference;

new ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementDiagnosticBackendResponseDataMaskingQueryParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementDiagnosticBackendResponseDataMaskingQueryParams</a>

---


### ApiManagementDiagnosticBackendResponseOutputReference <a name="ApiManagementDiagnosticBackendResponseOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticBackendResponseOutputReference;

new ApiManagementDiagnosticBackendResponseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.putDataMasking">putDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resetBodyBytes">resetBodyBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resetDataMasking">resetDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resetHeadersToLog">resetHeadersToLog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataMasking` <a name="putDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.putDataMasking"></a>

```java
public void putDataMasking(ApiManagementDiagnosticBackendResponseDataMasking value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.putDataMasking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking">ApiManagementDiagnosticBackendResponseDataMasking</a>

---

##### `resetBodyBytes` <a name="resetBodyBytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resetBodyBytes"></a>

```java
public void resetBodyBytes()
```

##### `resetDataMasking` <a name="resetDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resetDataMasking"></a>

```java
public void resetDataMasking()
```

##### `resetHeadersToLog` <a name="resetHeadersToLog" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resetHeadersToLog"></a>

```java
public void resetHeadersToLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.dataMasking">dataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference">ApiManagementDiagnosticBackendResponseDataMaskingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.bodyBytesInput">bodyBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.dataMaskingInput">dataMaskingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking">ApiManagementDiagnosticBackendResponseDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.headersToLogInput">headersToLogInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.bodyBytes">bodyBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.headersToLog">headersToLog</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse">ApiManagementDiagnosticBackendResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataMasking`<sup>Required</sup> <a name="dataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.dataMasking"></a>

```java
public ApiManagementDiagnosticBackendResponseDataMaskingOutputReference getDataMasking();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference">ApiManagementDiagnosticBackendResponseDataMaskingOutputReference</a>

---

##### `bodyBytesInput`<sup>Optional</sup> <a name="bodyBytesInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.bodyBytesInput"></a>

```java
public java.lang.Number getBodyBytesInput();
```

- *Type:* java.lang.Number

---

##### `dataMaskingInput`<sup>Optional</sup> <a name="dataMaskingInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.dataMaskingInput"></a>

```java
public ApiManagementDiagnosticBackendResponseDataMasking getDataMaskingInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking">ApiManagementDiagnosticBackendResponseDataMasking</a>

---

##### `headersToLogInput`<sup>Optional</sup> <a name="headersToLogInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.headersToLogInput"></a>

```java
public java.util.List<java.lang.String> getHeadersToLogInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bodyBytes`<sup>Required</sup> <a name="bodyBytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.bodyBytes"></a>

```java
public java.lang.Number getBodyBytes();
```

- *Type:* java.lang.Number

---

##### `headersToLog`<sup>Required</sup> <a name="headersToLog" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.headersToLog"></a>

```java
public java.util.List<java.lang.String> getHeadersToLog();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.internalValue"></a>

```java
public ApiManagementDiagnosticBackendResponse getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse">ApiManagementDiagnosticBackendResponse</a>

---


### ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList <a name="ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList;

new ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.get"></a>

```java
public ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementDiagnosticFrontendRequestDataMaskingHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementDiagnosticFrontendRequestDataMaskingHeaders</a>>

---


### ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference <a name="ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference;

new ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementDiagnosticFrontendRequestDataMaskingHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementDiagnosticFrontendRequestDataMaskingHeaders</a>

---


### ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference <a name="ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference;

new ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.putQueryParams">putQueryParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.resetQueryParams">resetQueryParams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.putHeaders"></a>

```java
public void putHeaders(IResolvable OR java.util.List<ApiManagementDiagnosticFrontendRequestDataMaskingHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.putHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementDiagnosticFrontendRequestDataMaskingHeaders</a>>

---

##### `putQueryParams` <a name="putQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.putQueryParams"></a>

```java
public void putQueryParams(IResolvable OR java.util.List<ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.putQueryParams.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams</a>>

---

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetQueryParams` <a name="resetQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.resetQueryParams"></a>

```java
public void resetQueryParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList">ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.queryParams">queryParams</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList">ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.headersInput">headersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementDiagnosticFrontendRequestDataMaskingHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.queryParamsInput">queryParamsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking">ApiManagementDiagnosticFrontendRequestDataMasking</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.headers"></a>

```java
public ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList getHeaders();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList">ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList</a>

---

##### `queryParams`<sup>Required</sup> <a name="queryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.queryParams"></a>

```java
public ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList getQueryParams();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList">ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList</a>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.headersInput"></a>

```java
public java.lang.Object getHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementDiagnosticFrontendRequestDataMaskingHeaders</a>>

---

##### `queryParamsInput`<sup>Optional</sup> <a name="queryParamsInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.queryParamsInput"></a>

```java
public java.lang.Object getQueryParamsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.internalValue"></a>

```java
public ApiManagementDiagnosticFrontendRequestDataMasking getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking">ApiManagementDiagnosticFrontendRequestDataMasking</a>

---


### ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList <a name="ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList;

new ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.get"></a>

```java
public ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams</a>>

---


### ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference <a name="ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference;

new ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams</a>

---


### ApiManagementDiagnosticFrontendRequestOutputReference <a name="ApiManagementDiagnosticFrontendRequestOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticFrontendRequestOutputReference;

new ApiManagementDiagnosticFrontendRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.putDataMasking">putDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resetBodyBytes">resetBodyBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resetDataMasking">resetDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resetHeadersToLog">resetHeadersToLog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataMasking` <a name="putDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.putDataMasking"></a>

```java
public void putDataMasking(ApiManagementDiagnosticFrontendRequestDataMasking value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.putDataMasking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking">ApiManagementDiagnosticFrontendRequestDataMasking</a>

---

##### `resetBodyBytes` <a name="resetBodyBytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resetBodyBytes"></a>

```java
public void resetBodyBytes()
```

##### `resetDataMasking` <a name="resetDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resetDataMasking"></a>

```java
public void resetDataMasking()
```

##### `resetHeadersToLog` <a name="resetHeadersToLog" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resetHeadersToLog"></a>

```java
public void resetHeadersToLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.dataMasking">dataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference">ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.bodyBytesInput">bodyBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.dataMaskingInput">dataMaskingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking">ApiManagementDiagnosticFrontendRequestDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.headersToLogInput">headersToLogInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.bodyBytes">bodyBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.headersToLog">headersToLog</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest">ApiManagementDiagnosticFrontendRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataMasking`<sup>Required</sup> <a name="dataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.dataMasking"></a>

```java
public ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference getDataMasking();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference">ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference</a>

---

##### `bodyBytesInput`<sup>Optional</sup> <a name="bodyBytesInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.bodyBytesInput"></a>

```java
public java.lang.Number getBodyBytesInput();
```

- *Type:* java.lang.Number

---

##### `dataMaskingInput`<sup>Optional</sup> <a name="dataMaskingInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.dataMaskingInput"></a>

```java
public ApiManagementDiagnosticFrontendRequestDataMasking getDataMaskingInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking">ApiManagementDiagnosticFrontendRequestDataMasking</a>

---

##### `headersToLogInput`<sup>Optional</sup> <a name="headersToLogInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.headersToLogInput"></a>

```java
public java.util.List<java.lang.String> getHeadersToLogInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bodyBytes`<sup>Required</sup> <a name="bodyBytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.bodyBytes"></a>

```java
public java.lang.Number getBodyBytes();
```

- *Type:* java.lang.Number

---

##### `headersToLog`<sup>Required</sup> <a name="headersToLog" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.headersToLog"></a>

```java
public java.util.List<java.lang.String> getHeadersToLog();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.internalValue"></a>

```java
public ApiManagementDiagnosticFrontendRequest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest">ApiManagementDiagnosticFrontendRequest</a>

---


### ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList <a name="ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList;

new ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.get"></a>

```java
public ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementDiagnosticFrontendResponseDataMaskingHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementDiagnosticFrontendResponseDataMaskingHeaders</a>>

---


### ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference <a name="ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference;

new ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementDiagnosticFrontendResponseDataMaskingHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementDiagnosticFrontendResponseDataMaskingHeaders</a>

---


### ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference <a name="ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference;

new ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.putQueryParams">putQueryParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.resetQueryParams">resetQueryParams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.putHeaders"></a>

```java
public void putHeaders(IResolvable OR java.util.List<ApiManagementDiagnosticFrontendResponseDataMaskingHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.putHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementDiagnosticFrontendResponseDataMaskingHeaders</a>>

---

##### `putQueryParams` <a name="putQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.putQueryParams"></a>

```java
public void putQueryParams(IResolvable OR java.util.List<ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.putQueryParams.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams</a>>

---

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetQueryParams` <a name="resetQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.resetQueryParams"></a>

```java
public void resetQueryParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList">ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.queryParams">queryParams</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList">ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.headersInput">headersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementDiagnosticFrontendResponseDataMaskingHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.queryParamsInput">queryParamsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking">ApiManagementDiagnosticFrontendResponseDataMasking</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.headers"></a>

```java
public ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList getHeaders();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList">ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList</a>

---

##### `queryParams`<sup>Required</sup> <a name="queryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.queryParams"></a>

```java
public ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList getQueryParams();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList">ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList</a>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.headersInput"></a>

```java
public java.lang.Object getHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementDiagnosticFrontendResponseDataMaskingHeaders</a>>

---

##### `queryParamsInput`<sup>Optional</sup> <a name="queryParamsInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.queryParamsInput"></a>

```java
public java.lang.Object getQueryParamsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.internalValue"></a>

```java
public ApiManagementDiagnosticFrontendResponseDataMasking getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking">ApiManagementDiagnosticFrontendResponseDataMasking</a>

---


### ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList <a name="ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList;

new ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.get"></a>

```java
public ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams</a>>

---


### ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference <a name="ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference;

new ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams</a>

---


### ApiManagementDiagnosticFrontendResponseOutputReference <a name="ApiManagementDiagnosticFrontendResponseOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticFrontendResponseOutputReference;

new ApiManagementDiagnosticFrontendResponseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.putDataMasking">putDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resetBodyBytes">resetBodyBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resetDataMasking">resetDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resetHeadersToLog">resetHeadersToLog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataMasking` <a name="putDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.putDataMasking"></a>

```java
public void putDataMasking(ApiManagementDiagnosticFrontendResponseDataMasking value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.putDataMasking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking">ApiManagementDiagnosticFrontendResponseDataMasking</a>

---

##### `resetBodyBytes` <a name="resetBodyBytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resetBodyBytes"></a>

```java
public void resetBodyBytes()
```

##### `resetDataMasking` <a name="resetDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resetDataMasking"></a>

```java
public void resetDataMasking()
```

##### `resetHeadersToLog` <a name="resetHeadersToLog" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resetHeadersToLog"></a>

```java
public void resetHeadersToLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.dataMasking">dataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference">ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.bodyBytesInput">bodyBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.dataMaskingInput">dataMaskingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking">ApiManagementDiagnosticFrontendResponseDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.headersToLogInput">headersToLogInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.bodyBytes">bodyBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.headersToLog">headersToLog</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse">ApiManagementDiagnosticFrontendResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataMasking`<sup>Required</sup> <a name="dataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.dataMasking"></a>

```java
public ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference getDataMasking();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference">ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference</a>

---

##### `bodyBytesInput`<sup>Optional</sup> <a name="bodyBytesInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.bodyBytesInput"></a>

```java
public java.lang.Number getBodyBytesInput();
```

- *Type:* java.lang.Number

---

##### `dataMaskingInput`<sup>Optional</sup> <a name="dataMaskingInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.dataMaskingInput"></a>

```java
public ApiManagementDiagnosticFrontendResponseDataMasking getDataMaskingInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking">ApiManagementDiagnosticFrontendResponseDataMasking</a>

---

##### `headersToLogInput`<sup>Optional</sup> <a name="headersToLogInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.headersToLogInput"></a>

```java
public java.util.List<java.lang.String> getHeadersToLogInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bodyBytes`<sup>Required</sup> <a name="bodyBytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.bodyBytes"></a>

```java
public java.lang.Number getBodyBytes();
```

- *Type:* java.lang.Number

---

##### `headersToLog`<sup>Required</sup> <a name="headersToLog" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.headersToLog"></a>

```java
public java.util.List<java.lang.String> getHeadersToLog();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.internalValue"></a>

```java
public ApiManagementDiagnosticFrontendResponse getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse">ApiManagementDiagnosticFrontendResponse</a>

---


### ApiManagementDiagnosticTimeoutsOutputReference <a name="ApiManagementDiagnosticTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_diagnostic.ApiManagementDiagnosticTimeoutsOutputReference;

new ApiManagementDiagnosticTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts">ApiManagementDiagnosticTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts">ApiManagementDiagnosticTimeouts</a>

---



