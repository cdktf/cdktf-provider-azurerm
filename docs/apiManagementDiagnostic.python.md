# `apiManagementDiagnostic` Submodule <a name="`apiManagementDiagnostic` Submodule" id="@cdktf/provider-azurerm.apiManagementDiagnostic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementDiagnostic <a name="ApiManagementDiagnostic" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic azurerm_api_management_diagnostic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnostic(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_management_logger_id: str,
  api_management_name: str,
  identifier: str,
  resource_group_name: str,
  always_log_errors: typing.Union[bool, IResolvable] = None,
  backend_request: ApiManagementDiagnosticBackendRequest = None,
  backend_response: ApiManagementDiagnosticBackendResponse = None,
  frontend_request: ApiManagementDiagnosticFrontendRequest = None,
  frontend_response: ApiManagementDiagnosticFrontendResponse = None,
  http_correlation_protocol: str = None,
  id: str = None,
  log_client_ip: typing.Union[bool, IResolvable] = None,
  operation_name_format: str = None,
  sampling_percentage: typing.Union[int, float] = None,
  timeouts: ApiManagementDiagnosticTimeouts = None,
  verbosity: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.apiManagementLoggerId">api_management_logger_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#api_management_logger_id ApiManagementDiagnostic#api_management_logger_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.apiManagementName">api_management_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#api_management_name ApiManagementDiagnostic#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#identifier ApiManagementDiagnostic#identifier}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#resource_group_name ApiManagementDiagnostic#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.alwaysLogErrors">always_log_errors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#always_log_errors ApiManagementDiagnostic#always_log_errors}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.backendRequest">backend_request</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest">ApiManagementDiagnosticBackendRequest</a></code> | backend_request block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.backendResponse">backend_response</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse">ApiManagementDiagnosticBackendResponse</a></code> | backend_response block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.frontendRequest">frontend_request</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest">ApiManagementDiagnosticFrontendRequest</a></code> | frontend_request block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.frontendResponse">frontend_response</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse">ApiManagementDiagnosticFrontendResponse</a></code> | frontend_response block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.httpCorrelationProtocol">http_correlation_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#http_correlation_protocol ApiManagementDiagnostic#http_correlation_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#id ApiManagementDiagnostic#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.logClientIp">log_client_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#log_client_ip ApiManagementDiagnostic#log_client_ip}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.operationNameFormat">operation_name_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#operation_name_format ApiManagementDiagnostic#operation_name_format}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.samplingPercentage">sampling_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#sampling_percentage ApiManagementDiagnostic#sampling_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts">ApiManagementDiagnosticTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.verbosity">verbosity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#verbosity ApiManagementDiagnostic#verbosity}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_management_logger_id`<sup>Required</sup> <a name="api_management_logger_id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.apiManagementLoggerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#api_management_logger_id ApiManagementDiagnostic#api_management_logger_id}.

---

##### `api_management_name`<sup>Required</sup> <a name="api_management_name" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.apiManagementName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#api_management_name ApiManagementDiagnostic#api_management_name}.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.identifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#identifier ApiManagementDiagnostic#identifier}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#resource_group_name ApiManagementDiagnostic#resource_group_name}.

---

##### `always_log_errors`<sup>Optional</sup> <a name="always_log_errors" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.alwaysLogErrors"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#always_log_errors ApiManagementDiagnostic#always_log_errors}.

---

##### `backend_request`<sup>Optional</sup> <a name="backend_request" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.backendRequest"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest">ApiManagementDiagnosticBackendRequest</a>

backend_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#backend_request ApiManagementDiagnostic#backend_request}

---

##### `backend_response`<sup>Optional</sup> <a name="backend_response" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.backendResponse"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse">ApiManagementDiagnosticBackendResponse</a>

backend_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#backend_response ApiManagementDiagnostic#backend_response}

---

##### `frontend_request`<sup>Optional</sup> <a name="frontend_request" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.frontendRequest"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest">ApiManagementDiagnosticFrontendRequest</a>

frontend_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#frontend_request ApiManagementDiagnostic#frontend_request}

---

##### `frontend_response`<sup>Optional</sup> <a name="frontend_response" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.frontendResponse"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse">ApiManagementDiagnosticFrontendResponse</a>

frontend_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#frontend_response ApiManagementDiagnostic#frontend_response}

---

##### `http_correlation_protocol`<sup>Optional</sup> <a name="http_correlation_protocol" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.httpCorrelationProtocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#http_correlation_protocol ApiManagementDiagnostic#http_correlation_protocol}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#id ApiManagementDiagnostic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_client_ip`<sup>Optional</sup> <a name="log_client_ip" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.logClientIp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#log_client_ip ApiManagementDiagnostic#log_client_ip}.

---

##### `operation_name_format`<sup>Optional</sup> <a name="operation_name_format" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.operationNameFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#operation_name_format ApiManagementDiagnostic#operation_name_format}.

---

##### `sampling_percentage`<sup>Optional</sup> <a name="sampling_percentage" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.samplingPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#sampling_percentage ApiManagementDiagnostic#sampling_percentage}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts">ApiManagementDiagnosticTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#timeouts ApiManagementDiagnostic#timeouts}

---

##### `verbosity`<sup>Optional</sup> <a name="verbosity" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.Initializer.parameter.verbosity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#verbosity ApiManagementDiagnostic#verbosity}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putBackendRequest">put_backend_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putBackendResponse">put_backend_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putFrontendRequest">put_frontend_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putFrontendResponse">put_frontend_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetAlwaysLogErrors">reset_always_log_errors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetBackendRequest">reset_backend_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetBackendResponse">reset_backend_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetFrontendRequest">reset_frontend_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetFrontendResponse">reset_frontend_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetHttpCorrelationProtocol">reset_http_correlation_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetLogClientIp">reset_log_client_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetOperationNameFormat">reset_operation_name_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetSamplingPercentage">reset_sampling_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetVerbosity">reset_verbosity</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backend_request` <a name="put_backend_request" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putBackendRequest"></a>

```python
def put_backend_request(
  body_bytes: typing.Union[int, float] = None,
  data_masking: ApiManagementDiagnosticBackendRequestDataMasking = None,
  headers_to_log: typing.List[str] = None
) -> None
```

###### `body_bytes`<sup>Optional</sup> <a name="body_bytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putBackendRequest.parameter.bodyBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}.

---

###### `data_masking`<sup>Optional</sup> <a name="data_masking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putBackendRequest.parameter.dataMasking"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking">ApiManagementDiagnosticBackendRequestDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#data_masking ApiManagementDiagnostic#data_masking}

---

###### `headers_to_log`<sup>Optional</sup> <a name="headers_to_log" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putBackendRequest.parameter.headersToLog"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}.

---

##### `put_backend_response` <a name="put_backend_response" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putBackendResponse"></a>

```python
def put_backend_response(
  body_bytes: typing.Union[int, float] = None,
  data_masking: ApiManagementDiagnosticBackendResponseDataMasking = None,
  headers_to_log: typing.List[str] = None
) -> None
```

###### `body_bytes`<sup>Optional</sup> <a name="body_bytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putBackendResponse.parameter.bodyBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}.

---

###### `data_masking`<sup>Optional</sup> <a name="data_masking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putBackendResponse.parameter.dataMasking"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking">ApiManagementDiagnosticBackendResponseDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#data_masking ApiManagementDiagnostic#data_masking}

---

###### `headers_to_log`<sup>Optional</sup> <a name="headers_to_log" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putBackendResponse.parameter.headersToLog"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}.

---

##### `put_frontend_request` <a name="put_frontend_request" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putFrontendRequest"></a>

```python
def put_frontend_request(
  body_bytes: typing.Union[int, float] = None,
  data_masking: ApiManagementDiagnosticFrontendRequestDataMasking = None,
  headers_to_log: typing.List[str] = None
) -> None
```

###### `body_bytes`<sup>Optional</sup> <a name="body_bytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putFrontendRequest.parameter.bodyBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}.

---

###### `data_masking`<sup>Optional</sup> <a name="data_masking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putFrontendRequest.parameter.dataMasking"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking">ApiManagementDiagnosticFrontendRequestDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#data_masking ApiManagementDiagnostic#data_masking}

---

###### `headers_to_log`<sup>Optional</sup> <a name="headers_to_log" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putFrontendRequest.parameter.headersToLog"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}.

---

##### `put_frontend_response` <a name="put_frontend_response" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putFrontendResponse"></a>

```python
def put_frontend_response(
  body_bytes: typing.Union[int, float] = None,
  data_masking: ApiManagementDiagnosticFrontendResponseDataMasking = None,
  headers_to_log: typing.List[str] = None
) -> None
```

###### `body_bytes`<sup>Optional</sup> <a name="body_bytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putFrontendResponse.parameter.bodyBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}.

---

###### `data_masking`<sup>Optional</sup> <a name="data_masking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putFrontendResponse.parameter.dataMasking"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking">ApiManagementDiagnosticFrontendResponseDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#data_masking ApiManagementDiagnostic#data_masking}

---

###### `headers_to_log`<sup>Optional</sup> <a name="headers_to_log" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putFrontendResponse.parameter.headersToLog"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#create ApiManagementDiagnostic#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#delete ApiManagementDiagnostic#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#read ApiManagementDiagnostic#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#update ApiManagementDiagnostic#update}.

---

##### `reset_always_log_errors` <a name="reset_always_log_errors" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetAlwaysLogErrors"></a>

```python
def reset_always_log_errors() -> None
```

##### `reset_backend_request` <a name="reset_backend_request" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetBackendRequest"></a>

```python
def reset_backend_request() -> None
```

##### `reset_backend_response` <a name="reset_backend_response" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetBackendResponse"></a>

```python
def reset_backend_response() -> None
```

##### `reset_frontend_request` <a name="reset_frontend_request" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetFrontendRequest"></a>

```python
def reset_frontend_request() -> None
```

##### `reset_frontend_response` <a name="reset_frontend_response" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetFrontendResponse"></a>

```python
def reset_frontend_response() -> None
```

##### `reset_http_correlation_protocol` <a name="reset_http_correlation_protocol" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetHttpCorrelationProtocol"></a>

```python
def reset_http_correlation_protocol() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_log_client_ip` <a name="reset_log_client_ip" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetLogClientIp"></a>

```python
def reset_log_client_ip() -> None
```

##### `reset_operation_name_format` <a name="reset_operation_name_format" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetOperationNameFormat"></a>

```python
def reset_operation_name_format() -> None
```

##### `reset_sampling_percentage` <a name="reset_sampling_percentage" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetSamplingPercentage"></a>

```python
def reset_sampling_percentage() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_verbosity` <a name="reset_verbosity" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.resetVerbosity"></a>

```python
def reset_verbosity() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApiManagementDiagnostic resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnostic.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnostic.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnostic.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnostic.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApiManagementDiagnostic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiManagementDiagnostic to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiManagementDiagnostic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementDiagnostic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.backendRequest">backend_request</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference">ApiManagementDiagnosticBackendRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.backendResponse">backend_response</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference">ApiManagementDiagnosticBackendResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.frontendRequest">frontend_request</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference">ApiManagementDiagnosticFrontendRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.frontendResponse">frontend_response</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference">ApiManagementDiagnosticFrontendResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference">ApiManagementDiagnosticTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.alwaysLogErrorsInput">always_log_errors_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.apiManagementLoggerIdInput">api_management_logger_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.apiManagementNameInput">api_management_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.backendRequestInput">backend_request_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest">ApiManagementDiagnosticBackendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.backendResponseInput">backend_response_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse">ApiManagementDiagnosticBackendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.frontendRequestInput">frontend_request_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest">ApiManagementDiagnosticFrontendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.frontendResponseInput">frontend_response_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse">ApiManagementDiagnosticFrontendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.httpCorrelationProtocolInput">http_correlation_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.logClientIpInput">log_client_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.operationNameFormatInput">operation_name_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.samplingPercentageInput">sampling_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts">ApiManagementDiagnosticTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.verbosityInput">verbosity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.alwaysLogErrors">always_log_errors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.apiManagementLoggerId">api_management_logger_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.apiManagementName">api_management_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.httpCorrelationProtocol">http_correlation_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.logClientIp">log_client_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.operationNameFormat">operation_name_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.samplingPercentage">sampling_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.verbosity">verbosity</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_request`<sup>Required</sup> <a name="backend_request" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.backendRequest"></a>

```python
backend_request: ApiManagementDiagnosticBackendRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference">ApiManagementDiagnosticBackendRequestOutputReference</a>

---

##### `backend_response`<sup>Required</sup> <a name="backend_response" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.backendResponse"></a>

```python
backend_response: ApiManagementDiagnosticBackendResponseOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference">ApiManagementDiagnosticBackendResponseOutputReference</a>

---

##### `frontend_request`<sup>Required</sup> <a name="frontend_request" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.frontendRequest"></a>

```python
frontend_request: ApiManagementDiagnosticFrontendRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference">ApiManagementDiagnosticFrontendRequestOutputReference</a>

---

##### `frontend_response`<sup>Required</sup> <a name="frontend_response" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.frontendResponse"></a>

```python
frontend_response: ApiManagementDiagnosticFrontendResponseOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference">ApiManagementDiagnosticFrontendResponseOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.timeouts"></a>

```python
timeouts: ApiManagementDiagnosticTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference">ApiManagementDiagnosticTimeoutsOutputReference</a>

---

##### `always_log_errors_input`<sup>Optional</sup> <a name="always_log_errors_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.alwaysLogErrorsInput"></a>

```python
always_log_errors_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `api_management_logger_id_input`<sup>Optional</sup> <a name="api_management_logger_id_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.apiManagementLoggerIdInput"></a>

```python
api_management_logger_id_input: str
```

- *Type:* str

---

##### `api_management_name_input`<sup>Optional</sup> <a name="api_management_name_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.apiManagementNameInput"></a>

```python
api_management_name_input: str
```

- *Type:* str

---

##### `backend_request_input`<sup>Optional</sup> <a name="backend_request_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.backendRequestInput"></a>

```python
backend_request_input: ApiManagementDiagnosticBackendRequest
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest">ApiManagementDiagnosticBackendRequest</a>

---

##### `backend_response_input`<sup>Optional</sup> <a name="backend_response_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.backendResponseInput"></a>

```python
backend_response_input: ApiManagementDiagnosticBackendResponse
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse">ApiManagementDiagnosticBackendResponse</a>

---

##### `frontend_request_input`<sup>Optional</sup> <a name="frontend_request_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.frontendRequestInput"></a>

```python
frontend_request_input: ApiManagementDiagnosticFrontendRequest
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest">ApiManagementDiagnosticFrontendRequest</a>

---

##### `frontend_response_input`<sup>Optional</sup> <a name="frontend_response_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.frontendResponseInput"></a>

```python
frontend_response_input: ApiManagementDiagnosticFrontendResponse
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse">ApiManagementDiagnosticFrontendResponse</a>

---

##### `http_correlation_protocol_input`<sup>Optional</sup> <a name="http_correlation_protocol_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.httpCorrelationProtocolInput"></a>

```python
http_correlation_protocol_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_client_ip_input`<sup>Optional</sup> <a name="log_client_ip_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.logClientIpInput"></a>

```python
log_client_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `operation_name_format_input`<sup>Optional</sup> <a name="operation_name_format_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.operationNameFormatInput"></a>

```python
operation_name_format_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sampling_percentage_input`<sup>Optional</sup> <a name="sampling_percentage_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.samplingPercentageInput"></a>

```python
sampling_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApiManagementDiagnosticTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts">ApiManagementDiagnosticTimeouts</a>]

---

##### `verbosity_input`<sup>Optional</sup> <a name="verbosity_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.verbosityInput"></a>

```python
verbosity_input: str
```

- *Type:* str

---

##### `always_log_errors`<sup>Required</sup> <a name="always_log_errors" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.alwaysLogErrors"></a>

```python
always_log_errors: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `api_management_logger_id`<sup>Required</sup> <a name="api_management_logger_id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.apiManagementLoggerId"></a>

```python
api_management_logger_id: str
```

- *Type:* str

---

##### `api_management_name`<sup>Required</sup> <a name="api_management_name" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.apiManagementName"></a>

```python
api_management_name: str
```

- *Type:* str

---

##### `http_correlation_protocol`<sup>Required</sup> <a name="http_correlation_protocol" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.httpCorrelationProtocol"></a>

```python
http_correlation_protocol: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `log_client_ip`<sup>Required</sup> <a name="log_client_ip" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.logClientIp"></a>

```python
log_client_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `operation_name_format`<sup>Required</sup> <a name="operation_name_format" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.operationNameFormat"></a>

```python
operation_name_format: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sampling_percentage`<sup>Required</sup> <a name="sampling_percentage" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.samplingPercentage"></a>

```python
sampling_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `verbosity`<sup>Required</sup> <a name="verbosity" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.verbosity"></a>

```python
verbosity: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnostic.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementDiagnosticBackendRequest <a name="ApiManagementDiagnosticBackendRequest" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest(
  body_bytes: typing.Union[int, float] = None,
  data_masking: ApiManagementDiagnosticBackendRequestDataMasking = None,
  headers_to_log: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest.property.bodyBytes">body_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest.property.dataMasking">data_masking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking">ApiManagementDiagnosticBackendRequestDataMasking</a></code> | data_masking block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest.property.headersToLog">headers_to_log</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}. |

---

##### `body_bytes`<sup>Optional</sup> <a name="body_bytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest.property.bodyBytes"></a>

```python
body_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}.

---

##### `data_masking`<sup>Optional</sup> <a name="data_masking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest.property.dataMasking"></a>

```python
data_masking: ApiManagementDiagnosticBackendRequestDataMasking
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking">ApiManagementDiagnosticBackendRequestDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#data_masking ApiManagementDiagnostic#data_masking}

---

##### `headers_to_log`<sup>Optional</sup> <a name="headers_to_log" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest.property.headersToLog"></a>

```python
headers_to_log: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}.

---

### ApiManagementDiagnosticBackendRequestDataMasking <a name="ApiManagementDiagnosticBackendRequestDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking(
  headers: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticBackendRequestDataMaskingHeaders]] = None,
  query_params: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticBackendRequestDataMaskingQueryParams]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders">ApiManagementDiagnosticBackendRequestDataMaskingHeaders</a>]]</code> | headers block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking.property.queryParams">query_params</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementDiagnosticBackendRequestDataMaskingQueryParams</a>]]</code> | query_params block. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticBackendRequestDataMaskingHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders">ApiManagementDiagnosticBackendRequestDataMaskingHeaders</a>]]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#headers ApiManagementDiagnostic#headers}

---

##### `query_params`<sup>Optional</sup> <a name="query_params" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking.property.queryParams"></a>

```python
query_params: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticBackendRequestDataMaskingQueryParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementDiagnosticBackendRequestDataMaskingQueryParams</a>]]

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#query_params ApiManagementDiagnostic#query_params}

---

### ApiManagementDiagnosticBackendRequestDataMaskingHeaders <a name="ApiManagementDiagnosticBackendRequestDataMaskingHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders(
  mode: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}.

---

### ApiManagementDiagnosticBackendRequestDataMaskingQueryParams <a name="ApiManagementDiagnosticBackendRequestDataMaskingQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams(
  mode: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}.

---

### ApiManagementDiagnosticBackendResponse <a name="ApiManagementDiagnosticBackendResponse" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse(
  body_bytes: typing.Union[int, float] = None,
  data_masking: ApiManagementDiagnosticBackendResponseDataMasking = None,
  headers_to_log: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse.property.bodyBytes">body_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse.property.dataMasking">data_masking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking">ApiManagementDiagnosticBackendResponseDataMasking</a></code> | data_masking block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse.property.headersToLog">headers_to_log</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}. |

---

##### `body_bytes`<sup>Optional</sup> <a name="body_bytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse.property.bodyBytes"></a>

```python
body_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}.

---

##### `data_masking`<sup>Optional</sup> <a name="data_masking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse.property.dataMasking"></a>

```python
data_masking: ApiManagementDiagnosticBackendResponseDataMasking
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking">ApiManagementDiagnosticBackendResponseDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#data_masking ApiManagementDiagnostic#data_masking}

---

##### `headers_to_log`<sup>Optional</sup> <a name="headers_to_log" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse.property.headersToLog"></a>

```python
headers_to_log: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}.

---

### ApiManagementDiagnosticBackendResponseDataMasking <a name="ApiManagementDiagnosticBackendResponseDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking(
  headers: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticBackendResponseDataMaskingHeaders]] = None,
  query_params: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticBackendResponseDataMaskingQueryParams]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders">ApiManagementDiagnosticBackendResponseDataMaskingHeaders</a>]]</code> | headers block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking.property.queryParams">query_params</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementDiagnosticBackendResponseDataMaskingQueryParams</a>]]</code> | query_params block. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticBackendResponseDataMaskingHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders">ApiManagementDiagnosticBackendResponseDataMaskingHeaders</a>]]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#headers ApiManagementDiagnostic#headers}

---

##### `query_params`<sup>Optional</sup> <a name="query_params" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking.property.queryParams"></a>

```python
query_params: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticBackendResponseDataMaskingQueryParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementDiagnosticBackendResponseDataMaskingQueryParams</a>]]

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#query_params ApiManagementDiagnostic#query_params}

---

### ApiManagementDiagnosticBackendResponseDataMaskingHeaders <a name="ApiManagementDiagnosticBackendResponseDataMaskingHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders(
  mode: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}.

---

### ApiManagementDiagnosticBackendResponseDataMaskingQueryParams <a name="ApiManagementDiagnosticBackendResponseDataMaskingQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams(
  mode: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}.

---

### ApiManagementDiagnosticConfig <a name="ApiManagementDiagnosticConfig" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_management_logger_id: str,
  api_management_name: str,
  identifier: str,
  resource_group_name: str,
  always_log_errors: typing.Union[bool, IResolvable] = None,
  backend_request: ApiManagementDiagnosticBackendRequest = None,
  backend_response: ApiManagementDiagnosticBackendResponse = None,
  frontend_request: ApiManagementDiagnosticFrontendRequest = None,
  frontend_response: ApiManagementDiagnosticFrontendResponse = None,
  http_correlation_protocol: str = None,
  id: str = None,
  log_client_ip: typing.Union[bool, IResolvable] = None,
  operation_name_format: str = None,
  sampling_percentage: typing.Union[int, float] = None,
  timeouts: ApiManagementDiagnosticTimeouts = None,
  verbosity: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.apiManagementLoggerId">api_management_logger_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#api_management_logger_id ApiManagementDiagnostic#api_management_logger_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.apiManagementName">api_management_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#api_management_name ApiManagementDiagnostic#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#identifier ApiManagementDiagnostic#identifier}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#resource_group_name ApiManagementDiagnostic#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.alwaysLogErrors">always_log_errors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#always_log_errors ApiManagementDiagnostic#always_log_errors}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.backendRequest">backend_request</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest">ApiManagementDiagnosticBackendRequest</a></code> | backend_request block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.backendResponse">backend_response</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse">ApiManagementDiagnosticBackendResponse</a></code> | backend_response block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.frontendRequest">frontend_request</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest">ApiManagementDiagnosticFrontendRequest</a></code> | frontend_request block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.frontendResponse">frontend_response</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse">ApiManagementDiagnosticFrontendResponse</a></code> | frontend_response block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.httpCorrelationProtocol">http_correlation_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#http_correlation_protocol ApiManagementDiagnostic#http_correlation_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#id ApiManagementDiagnostic#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.logClientIp">log_client_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#log_client_ip ApiManagementDiagnostic#log_client_ip}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.operationNameFormat">operation_name_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#operation_name_format ApiManagementDiagnostic#operation_name_format}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.samplingPercentage">sampling_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#sampling_percentage ApiManagementDiagnostic#sampling_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts">ApiManagementDiagnosticTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.verbosity">verbosity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#verbosity ApiManagementDiagnostic#verbosity}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_management_logger_id`<sup>Required</sup> <a name="api_management_logger_id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.apiManagementLoggerId"></a>

```python
api_management_logger_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#api_management_logger_id ApiManagementDiagnostic#api_management_logger_id}.

---

##### `api_management_name`<sup>Required</sup> <a name="api_management_name" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.apiManagementName"></a>

```python
api_management_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#api_management_name ApiManagementDiagnostic#api_management_name}.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#identifier ApiManagementDiagnostic#identifier}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#resource_group_name ApiManagementDiagnostic#resource_group_name}.

---

##### `always_log_errors`<sup>Optional</sup> <a name="always_log_errors" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.alwaysLogErrors"></a>

```python
always_log_errors: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#always_log_errors ApiManagementDiagnostic#always_log_errors}.

---

##### `backend_request`<sup>Optional</sup> <a name="backend_request" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.backendRequest"></a>

```python
backend_request: ApiManagementDiagnosticBackendRequest
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest">ApiManagementDiagnosticBackendRequest</a>

backend_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#backend_request ApiManagementDiagnostic#backend_request}

---

##### `backend_response`<sup>Optional</sup> <a name="backend_response" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.backendResponse"></a>

```python
backend_response: ApiManagementDiagnosticBackendResponse
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse">ApiManagementDiagnosticBackendResponse</a>

backend_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#backend_response ApiManagementDiagnostic#backend_response}

---

##### `frontend_request`<sup>Optional</sup> <a name="frontend_request" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.frontendRequest"></a>

```python
frontend_request: ApiManagementDiagnosticFrontendRequest
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest">ApiManagementDiagnosticFrontendRequest</a>

frontend_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#frontend_request ApiManagementDiagnostic#frontend_request}

---

##### `frontend_response`<sup>Optional</sup> <a name="frontend_response" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.frontendResponse"></a>

```python
frontend_response: ApiManagementDiagnosticFrontendResponse
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse">ApiManagementDiagnosticFrontendResponse</a>

frontend_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#frontend_response ApiManagementDiagnostic#frontend_response}

---

##### `http_correlation_protocol`<sup>Optional</sup> <a name="http_correlation_protocol" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.httpCorrelationProtocol"></a>

```python
http_correlation_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#http_correlation_protocol ApiManagementDiagnostic#http_correlation_protocol}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#id ApiManagementDiagnostic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_client_ip`<sup>Optional</sup> <a name="log_client_ip" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.logClientIp"></a>

```python
log_client_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#log_client_ip ApiManagementDiagnostic#log_client_ip}.

---

##### `operation_name_format`<sup>Optional</sup> <a name="operation_name_format" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.operationNameFormat"></a>

```python
operation_name_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#operation_name_format ApiManagementDiagnostic#operation_name_format}.

---

##### `sampling_percentage`<sup>Optional</sup> <a name="sampling_percentage" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.samplingPercentage"></a>

```python
sampling_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#sampling_percentage ApiManagementDiagnostic#sampling_percentage}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.timeouts"></a>

```python
timeouts: ApiManagementDiagnosticTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts">ApiManagementDiagnosticTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#timeouts ApiManagementDiagnostic#timeouts}

---

##### `verbosity`<sup>Optional</sup> <a name="verbosity" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticConfig.property.verbosity"></a>

```python
verbosity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#verbosity ApiManagementDiagnostic#verbosity}.

---

### ApiManagementDiagnosticFrontendRequest <a name="ApiManagementDiagnosticFrontendRequest" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest(
  body_bytes: typing.Union[int, float] = None,
  data_masking: ApiManagementDiagnosticFrontendRequestDataMasking = None,
  headers_to_log: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest.property.bodyBytes">body_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest.property.dataMasking">data_masking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking">ApiManagementDiagnosticFrontendRequestDataMasking</a></code> | data_masking block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest.property.headersToLog">headers_to_log</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}. |

---

##### `body_bytes`<sup>Optional</sup> <a name="body_bytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest.property.bodyBytes"></a>

```python
body_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}.

---

##### `data_masking`<sup>Optional</sup> <a name="data_masking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest.property.dataMasking"></a>

```python
data_masking: ApiManagementDiagnosticFrontendRequestDataMasking
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking">ApiManagementDiagnosticFrontendRequestDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#data_masking ApiManagementDiagnostic#data_masking}

---

##### `headers_to_log`<sup>Optional</sup> <a name="headers_to_log" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest.property.headersToLog"></a>

```python
headers_to_log: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}.

---

### ApiManagementDiagnosticFrontendRequestDataMasking <a name="ApiManagementDiagnosticFrontendRequestDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking(
  headers: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticFrontendRequestDataMaskingHeaders]] = None,
  query_params: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementDiagnosticFrontendRequestDataMaskingHeaders</a>]]</code> | headers block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking.property.queryParams">query_params</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams</a>]]</code> | query_params block. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticFrontendRequestDataMaskingHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementDiagnosticFrontendRequestDataMaskingHeaders</a>]]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#headers ApiManagementDiagnostic#headers}

---

##### `query_params`<sup>Optional</sup> <a name="query_params" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking.property.queryParams"></a>

```python
query_params: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams</a>]]

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#query_params ApiManagementDiagnostic#query_params}

---

### ApiManagementDiagnosticFrontendRequestDataMaskingHeaders <a name="ApiManagementDiagnosticFrontendRequestDataMaskingHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders(
  mode: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}.

---

### ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams <a name="ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams(
  mode: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}.

---

### ApiManagementDiagnosticFrontendResponse <a name="ApiManagementDiagnosticFrontendResponse" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse(
  body_bytes: typing.Union[int, float] = None,
  data_masking: ApiManagementDiagnosticFrontendResponseDataMasking = None,
  headers_to_log: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse.property.bodyBytes">body_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse.property.dataMasking">data_masking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking">ApiManagementDiagnosticFrontendResponseDataMasking</a></code> | data_masking block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse.property.headersToLog">headers_to_log</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}. |

---

##### `body_bytes`<sup>Optional</sup> <a name="body_bytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse.property.bodyBytes"></a>

```python
body_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#body_bytes ApiManagementDiagnostic#body_bytes}.

---

##### `data_masking`<sup>Optional</sup> <a name="data_masking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse.property.dataMasking"></a>

```python
data_masking: ApiManagementDiagnosticFrontendResponseDataMasking
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking">ApiManagementDiagnosticFrontendResponseDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#data_masking ApiManagementDiagnostic#data_masking}

---

##### `headers_to_log`<sup>Optional</sup> <a name="headers_to_log" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse.property.headersToLog"></a>

```python
headers_to_log: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#headers_to_log ApiManagementDiagnostic#headers_to_log}.

---

### ApiManagementDiagnosticFrontendResponseDataMasking <a name="ApiManagementDiagnosticFrontendResponseDataMasking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking(
  headers: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticFrontendResponseDataMaskingHeaders]] = None,
  query_params: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementDiagnosticFrontendResponseDataMaskingHeaders</a>]]</code> | headers block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking.property.queryParams">query_params</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams</a>]]</code> | query_params block. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticFrontendResponseDataMaskingHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementDiagnosticFrontendResponseDataMaskingHeaders</a>]]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#headers ApiManagementDiagnostic#headers}

---

##### `query_params`<sup>Optional</sup> <a name="query_params" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking.property.queryParams"></a>

```python
query_params: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams</a>]]

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#query_params ApiManagementDiagnostic#query_params}

---

### ApiManagementDiagnosticFrontendResponseDataMaskingHeaders <a name="ApiManagementDiagnosticFrontendResponseDataMaskingHeaders" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders(
  mode: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}.

---

### ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams <a name="ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams(
  mode: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#mode ApiManagementDiagnostic#mode}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#value ApiManagementDiagnostic#value}.

---

### ApiManagementDiagnosticTimeouts <a name="ApiManagementDiagnosticTimeouts" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#create ApiManagementDiagnostic#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#delete ApiManagementDiagnostic#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#read ApiManagementDiagnostic#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#update ApiManagementDiagnostic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#create ApiManagementDiagnostic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#delete ApiManagementDiagnostic#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#read ApiManagementDiagnostic#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#update ApiManagementDiagnostic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementDiagnosticBackendRequestDataMaskingHeadersList <a name="ApiManagementDiagnosticBackendRequestDataMaskingHeadersList" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders">ApiManagementDiagnosticBackendRequestDataMaskingHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticBackendRequestDataMaskingHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders">ApiManagementDiagnosticBackendRequestDataMaskingHeaders</a>]]

---


### ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference <a name="ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders">ApiManagementDiagnosticBackendRequestDataMaskingHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementDiagnosticBackendRequestDataMaskingHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders">ApiManagementDiagnosticBackendRequestDataMaskingHeaders</a>]

---


### ApiManagementDiagnosticBackendRequestDataMaskingOutputReference <a name="ApiManagementDiagnosticBackendRequestDataMaskingOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.putHeaders">put_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.putQueryParams">put_query_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.resetQueryParams">reset_query_params</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_headers` <a name="put_headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.putHeaders"></a>

```python
def put_headers(
  value: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticBackendRequestDataMaskingHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.putHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders">ApiManagementDiagnosticBackendRequestDataMaskingHeaders</a>]]

---

##### `put_query_params` <a name="put_query_params" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.putQueryParams"></a>

```python
def put_query_params(
  value: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticBackendRequestDataMaskingQueryParams]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.putQueryParams.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementDiagnosticBackendRequestDataMaskingQueryParams</a>]]

---

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_query_params` <a name="reset_query_params" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.resetQueryParams"></a>

```python
def reset_query_params() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList">ApiManagementDiagnosticBackendRequestDataMaskingHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.queryParams">query_params</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList">ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.headersInput">headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders">ApiManagementDiagnosticBackendRequestDataMaskingHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.queryParamsInput">query_params_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementDiagnosticBackendRequestDataMaskingQueryParams</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking">ApiManagementDiagnosticBackendRequestDataMasking</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.headers"></a>

```python
headers: ApiManagementDiagnosticBackendRequestDataMaskingHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeadersList">ApiManagementDiagnosticBackendRequestDataMaskingHeadersList</a>

---

##### `query_params`<sup>Required</sup> <a name="query_params" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.queryParams"></a>

```python
query_params: ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList">ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList</a>

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.headersInput"></a>

```python
headers_input: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticBackendRequestDataMaskingHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders">ApiManagementDiagnosticBackendRequestDataMaskingHeaders</a>]]

---

##### `query_params_input`<sup>Optional</sup> <a name="query_params_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.queryParamsInput"></a>

```python
query_params_input: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticBackendRequestDataMaskingQueryParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementDiagnosticBackendRequestDataMaskingQueryParams</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementDiagnosticBackendRequestDataMasking
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking">ApiManagementDiagnosticBackendRequestDataMasking</a>

---


### ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList <a name="ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementDiagnosticBackendRequestDataMaskingQueryParams</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticBackendRequestDataMaskingQueryParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementDiagnosticBackendRequestDataMaskingQueryParams</a>]]

---


### ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference <a name="ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementDiagnosticBackendRequestDataMaskingQueryParams</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementDiagnosticBackendRequestDataMaskingQueryParams]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementDiagnosticBackendRequestDataMaskingQueryParams</a>]

---


### ApiManagementDiagnosticBackendRequestOutputReference <a name="ApiManagementDiagnosticBackendRequestOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.putDataMasking">put_data_masking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resetBodyBytes">reset_body_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resetDataMasking">reset_data_masking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resetHeadersToLog">reset_headers_to_log</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_masking` <a name="put_data_masking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.putDataMasking"></a>

```python
def put_data_masking(
  headers: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticBackendRequestDataMaskingHeaders]] = None,
  query_params: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticBackendRequestDataMaskingQueryParams]] = None
) -> None
```

###### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.putDataMasking.parameter.headers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingHeaders">ApiManagementDiagnosticBackendRequestDataMaskingHeaders</a>]]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#headers ApiManagementDiagnostic#headers}

---

###### `query_params`<sup>Optional</sup> <a name="query_params" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.putDataMasking.parameter.queryParams"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingQueryParams">ApiManagementDiagnosticBackendRequestDataMaskingQueryParams</a>]]

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#query_params ApiManagementDiagnostic#query_params}

---

##### `reset_body_bytes` <a name="reset_body_bytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resetBodyBytes"></a>

```python
def reset_body_bytes() -> None
```

##### `reset_data_masking` <a name="reset_data_masking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resetDataMasking"></a>

```python
def reset_data_masking() -> None
```

##### `reset_headers_to_log` <a name="reset_headers_to_log" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.resetHeadersToLog"></a>

```python
def reset_headers_to_log() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.dataMasking">data_masking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference">ApiManagementDiagnosticBackendRequestDataMaskingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.bodyBytesInput">body_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.dataMaskingInput">data_masking_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking">ApiManagementDiagnosticBackendRequestDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.headersToLogInput">headers_to_log_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.bodyBytes">body_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.headersToLog">headers_to_log</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest">ApiManagementDiagnosticBackendRequest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_masking`<sup>Required</sup> <a name="data_masking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.dataMasking"></a>

```python
data_masking: ApiManagementDiagnosticBackendRequestDataMaskingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMaskingOutputReference">ApiManagementDiagnosticBackendRequestDataMaskingOutputReference</a>

---

##### `body_bytes_input`<sup>Optional</sup> <a name="body_bytes_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.bodyBytesInput"></a>

```python
body_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_masking_input`<sup>Optional</sup> <a name="data_masking_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.dataMaskingInput"></a>

```python
data_masking_input: ApiManagementDiagnosticBackendRequestDataMasking
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestDataMasking">ApiManagementDiagnosticBackendRequestDataMasking</a>

---

##### `headers_to_log_input`<sup>Optional</sup> <a name="headers_to_log_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.headersToLogInput"></a>

```python
headers_to_log_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `body_bytes`<sup>Required</sup> <a name="body_bytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.bodyBytes"></a>

```python
body_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `headers_to_log`<sup>Required</sup> <a name="headers_to_log" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.headersToLog"></a>

```python
headers_to_log: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequestOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementDiagnosticBackendRequest
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendRequest">ApiManagementDiagnosticBackendRequest</a>

---


### ApiManagementDiagnosticBackendResponseDataMaskingHeadersList <a name="ApiManagementDiagnosticBackendResponseDataMaskingHeadersList" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders">ApiManagementDiagnosticBackendResponseDataMaskingHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticBackendResponseDataMaskingHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders">ApiManagementDiagnosticBackendResponseDataMaskingHeaders</a>]]

---


### ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference <a name="ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders">ApiManagementDiagnosticBackendResponseDataMaskingHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementDiagnosticBackendResponseDataMaskingHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders">ApiManagementDiagnosticBackendResponseDataMaskingHeaders</a>]

---


### ApiManagementDiagnosticBackendResponseDataMaskingOutputReference <a name="ApiManagementDiagnosticBackendResponseDataMaskingOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.putHeaders">put_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.putQueryParams">put_query_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.resetQueryParams">reset_query_params</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_headers` <a name="put_headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.putHeaders"></a>

```python
def put_headers(
  value: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticBackendResponseDataMaskingHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.putHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders">ApiManagementDiagnosticBackendResponseDataMaskingHeaders</a>]]

---

##### `put_query_params` <a name="put_query_params" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.putQueryParams"></a>

```python
def put_query_params(
  value: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticBackendResponseDataMaskingQueryParams]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.putQueryParams.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementDiagnosticBackendResponseDataMaskingQueryParams</a>]]

---

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_query_params` <a name="reset_query_params" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.resetQueryParams"></a>

```python
def reset_query_params() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList">ApiManagementDiagnosticBackendResponseDataMaskingHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.queryParams">query_params</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList">ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.headersInput">headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders">ApiManagementDiagnosticBackendResponseDataMaskingHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.queryParamsInput">query_params_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementDiagnosticBackendResponseDataMaskingQueryParams</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking">ApiManagementDiagnosticBackendResponseDataMasking</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.headers"></a>

```python
headers: ApiManagementDiagnosticBackendResponseDataMaskingHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeadersList">ApiManagementDiagnosticBackendResponseDataMaskingHeadersList</a>

---

##### `query_params`<sup>Required</sup> <a name="query_params" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.queryParams"></a>

```python
query_params: ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList">ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList</a>

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.headersInput"></a>

```python
headers_input: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticBackendResponseDataMaskingHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders">ApiManagementDiagnosticBackendResponseDataMaskingHeaders</a>]]

---

##### `query_params_input`<sup>Optional</sup> <a name="query_params_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.queryParamsInput"></a>

```python
query_params_input: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticBackendResponseDataMaskingQueryParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementDiagnosticBackendResponseDataMaskingQueryParams</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementDiagnosticBackendResponseDataMasking
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking">ApiManagementDiagnosticBackendResponseDataMasking</a>

---


### ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList <a name="ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementDiagnosticBackendResponseDataMaskingQueryParams</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticBackendResponseDataMaskingQueryParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementDiagnosticBackendResponseDataMaskingQueryParams</a>]]

---


### ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference <a name="ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementDiagnosticBackendResponseDataMaskingQueryParams</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementDiagnosticBackendResponseDataMaskingQueryParams]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementDiagnosticBackendResponseDataMaskingQueryParams</a>]

---


### ApiManagementDiagnosticBackendResponseOutputReference <a name="ApiManagementDiagnosticBackendResponseOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.putDataMasking">put_data_masking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resetBodyBytes">reset_body_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resetDataMasking">reset_data_masking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resetHeadersToLog">reset_headers_to_log</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_masking` <a name="put_data_masking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.putDataMasking"></a>

```python
def put_data_masking(
  headers: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticBackendResponseDataMaskingHeaders]] = None,
  query_params: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticBackendResponseDataMaskingQueryParams]] = None
) -> None
```

###### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.putDataMasking.parameter.headers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingHeaders">ApiManagementDiagnosticBackendResponseDataMaskingHeaders</a>]]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#headers ApiManagementDiagnostic#headers}

---

###### `query_params`<sup>Optional</sup> <a name="query_params" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.putDataMasking.parameter.queryParams"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingQueryParams">ApiManagementDiagnosticBackendResponseDataMaskingQueryParams</a>]]

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#query_params ApiManagementDiagnostic#query_params}

---

##### `reset_body_bytes` <a name="reset_body_bytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resetBodyBytes"></a>

```python
def reset_body_bytes() -> None
```

##### `reset_data_masking` <a name="reset_data_masking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resetDataMasking"></a>

```python
def reset_data_masking() -> None
```

##### `reset_headers_to_log` <a name="reset_headers_to_log" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.resetHeadersToLog"></a>

```python
def reset_headers_to_log() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.dataMasking">data_masking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference">ApiManagementDiagnosticBackendResponseDataMaskingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.bodyBytesInput">body_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.dataMaskingInput">data_masking_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking">ApiManagementDiagnosticBackendResponseDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.headersToLogInput">headers_to_log_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.bodyBytes">body_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.headersToLog">headers_to_log</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse">ApiManagementDiagnosticBackendResponse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_masking`<sup>Required</sup> <a name="data_masking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.dataMasking"></a>

```python
data_masking: ApiManagementDiagnosticBackendResponseDataMaskingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMaskingOutputReference">ApiManagementDiagnosticBackendResponseDataMaskingOutputReference</a>

---

##### `body_bytes_input`<sup>Optional</sup> <a name="body_bytes_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.bodyBytesInput"></a>

```python
body_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_masking_input`<sup>Optional</sup> <a name="data_masking_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.dataMaskingInput"></a>

```python
data_masking_input: ApiManagementDiagnosticBackendResponseDataMasking
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseDataMasking">ApiManagementDiagnosticBackendResponseDataMasking</a>

---

##### `headers_to_log_input`<sup>Optional</sup> <a name="headers_to_log_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.headersToLogInput"></a>

```python
headers_to_log_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `body_bytes`<sup>Required</sup> <a name="body_bytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.bodyBytes"></a>

```python
body_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `headers_to_log`<sup>Required</sup> <a name="headers_to_log" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.headersToLog"></a>

```python
headers_to_log: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponseOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementDiagnosticBackendResponse
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticBackendResponse">ApiManagementDiagnosticBackendResponse</a>

---


### ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList <a name="ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementDiagnosticFrontendRequestDataMaskingHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticFrontendRequestDataMaskingHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementDiagnosticFrontendRequestDataMaskingHeaders</a>]]

---


### ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference <a name="ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementDiagnosticFrontendRequestDataMaskingHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementDiagnosticFrontendRequestDataMaskingHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementDiagnosticFrontendRequestDataMaskingHeaders</a>]

---


### ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference <a name="ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.putHeaders">put_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.putQueryParams">put_query_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.resetQueryParams">reset_query_params</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_headers` <a name="put_headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.putHeaders"></a>

```python
def put_headers(
  value: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticFrontendRequestDataMaskingHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.putHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementDiagnosticFrontendRequestDataMaskingHeaders</a>]]

---

##### `put_query_params` <a name="put_query_params" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.putQueryParams"></a>

```python
def put_query_params(
  value: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.putQueryParams.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams</a>]]

---

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_query_params` <a name="reset_query_params" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.resetQueryParams"></a>

```python
def reset_query_params() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList">ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.queryParams">query_params</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList">ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.headersInput">headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementDiagnosticFrontendRequestDataMaskingHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.queryParamsInput">query_params_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking">ApiManagementDiagnosticFrontendRequestDataMasking</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.headers"></a>

```python
headers: ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList">ApiManagementDiagnosticFrontendRequestDataMaskingHeadersList</a>

---

##### `query_params`<sup>Required</sup> <a name="query_params" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.queryParams"></a>

```python
query_params: ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList">ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList</a>

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.headersInput"></a>

```python
headers_input: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticFrontendRequestDataMaskingHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementDiagnosticFrontendRequestDataMaskingHeaders</a>]]

---

##### `query_params_input`<sup>Optional</sup> <a name="query_params_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.queryParamsInput"></a>

```python
query_params_input: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementDiagnosticFrontendRequestDataMasking
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking">ApiManagementDiagnosticFrontendRequestDataMasking</a>

---


### ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList <a name="ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams</a>]]

---


### ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference <a name="ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams</a>]

---


### ApiManagementDiagnosticFrontendRequestOutputReference <a name="ApiManagementDiagnosticFrontendRequestOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.putDataMasking">put_data_masking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resetBodyBytes">reset_body_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resetDataMasking">reset_data_masking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resetHeadersToLog">reset_headers_to_log</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_masking` <a name="put_data_masking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.putDataMasking"></a>

```python
def put_data_masking(
  headers: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticFrontendRequestDataMaskingHeaders]] = None,
  query_params: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams]] = None
) -> None
```

###### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.putDataMasking.parameter.headers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingHeaders">ApiManagementDiagnosticFrontendRequestDataMaskingHeaders</a>]]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#headers ApiManagementDiagnostic#headers}

---

###### `query_params`<sup>Optional</sup> <a name="query_params" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.putDataMasking.parameter.queryParams"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams">ApiManagementDiagnosticFrontendRequestDataMaskingQueryParams</a>]]

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#query_params ApiManagementDiagnostic#query_params}

---

##### `reset_body_bytes` <a name="reset_body_bytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resetBodyBytes"></a>

```python
def reset_body_bytes() -> None
```

##### `reset_data_masking` <a name="reset_data_masking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resetDataMasking"></a>

```python
def reset_data_masking() -> None
```

##### `reset_headers_to_log` <a name="reset_headers_to_log" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.resetHeadersToLog"></a>

```python
def reset_headers_to_log() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.dataMasking">data_masking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference">ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.bodyBytesInput">body_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.dataMaskingInput">data_masking_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking">ApiManagementDiagnosticFrontendRequestDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.headersToLogInput">headers_to_log_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.bodyBytes">body_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.headersToLog">headers_to_log</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest">ApiManagementDiagnosticFrontendRequest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_masking`<sup>Required</sup> <a name="data_masking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.dataMasking"></a>

```python
data_masking: ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference">ApiManagementDiagnosticFrontendRequestDataMaskingOutputReference</a>

---

##### `body_bytes_input`<sup>Optional</sup> <a name="body_bytes_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.bodyBytesInput"></a>

```python
body_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_masking_input`<sup>Optional</sup> <a name="data_masking_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.dataMaskingInput"></a>

```python
data_masking_input: ApiManagementDiagnosticFrontendRequestDataMasking
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestDataMasking">ApiManagementDiagnosticFrontendRequestDataMasking</a>

---

##### `headers_to_log_input`<sup>Optional</sup> <a name="headers_to_log_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.headersToLogInput"></a>

```python
headers_to_log_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `body_bytes`<sup>Required</sup> <a name="body_bytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.bodyBytes"></a>

```python
body_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `headers_to_log`<sup>Required</sup> <a name="headers_to_log" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.headersToLog"></a>

```python
headers_to_log: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequestOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementDiagnosticFrontendRequest
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendRequest">ApiManagementDiagnosticFrontendRequest</a>

---


### ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList <a name="ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementDiagnosticFrontendResponseDataMaskingHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticFrontendResponseDataMaskingHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementDiagnosticFrontendResponseDataMaskingHeaders</a>]]

---


### ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference <a name="ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementDiagnosticFrontendResponseDataMaskingHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementDiagnosticFrontendResponseDataMaskingHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementDiagnosticFrontendResponseDataMaskingHeaders</a>]

---


### ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference <a name="ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.putHeaders">put_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.putQueryParams">put_query_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.resetQueryParams">reset_query_params</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_headers` <a name="put_headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.putHeaders"></a>

```python
def put_headers(
  value: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticFrontendResponseDataMaskingHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.putHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementDiagnosticFrontendResponseDataMaskingHeaders</a>]]

---

##### `put_query_params` <a name="put_query_params" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.putQueryParams"></a>

```python
def put_query_params(
  value: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.putQueryParams.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams</a>]]

---

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_query_params` <a name="reset_query_params" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.resetQueryParams"></a>

```python
def reset_query_params() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList">ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.queryParams">query_params</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList">ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.headersInput">headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementDiagnosticFrontendResponseDataMaskingHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.queryParamsInput">query_params_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking">ApiManagementDiagnosticFrontendResponseDataMasking</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.headers"></a>

```python
headers: ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList">ApiManagementDiagnosticFrontendResponseDataMaskingHeadersList</a>

---

##### `query_params`<sup>Required</sup> <a name="query_params" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.queryParams"></a>

```python
query_params: ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList">ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList</a>

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.headersInput"></a>

```python
headers_input: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticFrontendResponseDataMaskingHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementDiagnosticFrontendResponseDataMaskingHeaders</a>]]

---

##### `query_params_input`<sup>Optional</sup> <a name="query_params_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.queryParamsInput"></a>

```python
query_params_input: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementDiagnosticFrontendResponseDataMasking
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking">ApiManagementDiagnosticFrontendResponseDataMasking</a>

---


### ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList <a name="ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams</a>]]

---


### ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference <a name="ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams</a>]

---


### ApiManagementDiagnosticFrontendResponseOutputReference <a name="ApiManagementDiagnosticFrontendResponseOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.putDataMasking">put_data_masking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resetBodyBytes">reset_body_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resetDataMasking">reset_data_masking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resetHeadersToLog">reset_headers_to_log</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_masking` <a name="put_data_masking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.putDataMasking"></a>

```python
def put_data_masking(
  headers: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticFrontendResponseDataMaskingHeaders]] = None,
  query_params: typing.Union[IResolvable, typing.List[ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams]] = None
) -> None
```

###### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.putDataMasking.parameter.headers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingHeaders">ApiManagementDiagnosticFrontendResponseDataMaskingHeaders</a>]]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#headers ApiManagementDiagnostic#headers}

---

###### `query_params`<sup>Optional</sup> <a name="query_params" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.putDataMasking.parameter.queryParams"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams">ApiManagementDiagnosticFrontendResponseDataMaskingQueryParams</a>]]

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/api_management_diagnostic#query_params ApiManagementDiagnostic#query_params}

---

##### `reset_body_bytes` <a name="reset_body_bytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resetBodyBytes"></a>

```python
def reset_body_bytes() -> None
```

##### `reset_data_masking` <a name="reset_data_masking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resetDataMasking"></a>

```python
def reset_data_masking() -> None
```

##### `reset_headers_to_log` <a name="reset_headers_to_log" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.resetHeadersToLog"></a>

```python
def reset_headers_to_log() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.dataMasking">data_masking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference">ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.bodyBytesInput">body_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.dataMaskingInput">data_masking_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking">ApiManagementDiagnosticFrontendResponseDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.headersToLogInput">headers_to_log_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.bodyBytes">body_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.headersToLog">headers_to_log</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse">ApiManagementDiagnosticFrontendResponse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_masking`<sup>Required</sup> <a name="data_masking" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.dataMasking"></a>

```python
data_masking: ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference">ApiManagementDiagnosticFrontendResponseDataMaskingOutputReference</a>

---

##### `body_bytes_input`<sup>Optional</sup> <a name="body_bytes_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.bodyBytesInput"></a>

```python
body_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_masking_input`<sup>Optional</sup> <a name="data_masking_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.dataMaskingInput"></a>

```python
data_masking_input: ApiManagementDiagnosticFrontendResponseDataMasking
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseDataMasking">ApiManagementDiagnosticFrontendResponseDataMasking</a>

---

##### `headers_to_log_input`<sup>Optional</sup> <a name="headers_to_log_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.headersToLogInput"></a>

```python
headers_to_log_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `body_bytes`<sup>Required</sup> <a name="body_bytes" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.bodyBytes"></a>

```python
body_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `headers_to_log`<sup>Required</sup> <a name="headers_to_log" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.headersToLog"></a>

```python
headers_to_log: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponseOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementDiagnosticFrontendResponse
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticFrontendResponse">ApiManagementDiagnosticFrontendResponse</a>

---


### ApiManagementDiagnosticTimeoutsOutputReference <a name="ApiManagementDiagnosticTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_diagnostic

apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts">ApiManagementDiagnosticTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementDiagnosticTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementDiagnostic.ApiManagementDiagnosticTimeouts">ApiManagementDiagnosticTimeouts</a>]

---



