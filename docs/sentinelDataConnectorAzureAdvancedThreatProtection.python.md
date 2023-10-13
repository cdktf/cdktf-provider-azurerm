# `azurerm_sentinel_data_connector_azure_advanced_threat_protection`

Refer to the Terraform Registory for docs: [`azurerm_sentinel_data_connector_azure_advanced_threat_protection`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection).

# `sentinelDataConnectorAzureAdvancedThreatProtection` Submodule <a name="`sentinelDataConnectorAzureAdvancedThreatProtection` Submodule" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelDataConnectorAzureAdvancedThreatProtection <a name="SentinelDataConnectorAzureAdvancedThreatProtection" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection azurerm_sentinel_data_connector_azure_advanced_threat_protection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_azure_advanced_threat_protection

sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  log_analytics_workspace_id: str,
  name: str,
  id: str = None,
  tenant_id: str = None,
  timeouts: SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#log_analytics_workspace_id SentinelDataConnectorAzureAdvancedThreatProtection#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#name SentinelDataConnectorAzureAdvancedThreatProtection#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#id SentinelDataConnectorAzureAdvancedThreatProtection#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#tenant_id SentinelDataConnectorAzureAdvancedThreatProtection#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts">SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#log_analytics_workspace_id SentinelDataConnectorAzureAdvancedThreatProtection#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#name SentinelDataConnectorAzureAdvancedThreatProtection#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#id SentinelDataConnectorAzureAdvancedThreatProtection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#tenant_id SentinelDataConnectorAzureAdvancedThreatProtection#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts">SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#timeouts SentinelDataConnectorAzureAdvancedThreatProtection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#create SentinelDataConnectorAzureAdvancedThreatProtection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#delete SentinelDataConnectorAzureAdvancedThreatProtection#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#read SentinelDataConnectorAzureAdvancedThreatProtection#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_azure_advanced_threat_protection

sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_azure_advanced_threat_protection

sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_azure_advanced_threat_protection

sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference">SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.logAnalyticsWorkspaceIdInput">log_analytics_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts">SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.timeouts"></a>

```python
timeouts: SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference">SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_analytics_workspace_id_input`<sup>Optional</sup> <a name="log_analytics_workspace_id_input" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.logAnalyticsWorkspaceIdInput"></a>

```python
log_analytics_workspace_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts">SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelDataConnectorAzureAdvancedThreatProtectionConfig <a name="SentinelDataConnectorAzureAdvancedThreatProtectionConfig" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_azure_advanced_threat_protection

sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  log_analytics_workspace_id: str,
  name: str,
  id: str = None,
  tenant_id: str = None,
  timeouts: SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#log_analytics_workspace_id SentinelDataConnectorAzureAdvancedThreatProtection#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#name SentinelDataConnectorAzureAdvancedThreatProtection#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#id SentinelDataConnectorAzureAdvancedThreatProtection#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#tenant_id SentinelDataConnectorAzureAdvancedThreatProtection#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts">SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#log_analytics_workspace_id SentinelDataConnectorAzureAdvancedThreatProtection#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#name SentinelDataConnectorAzureAdvancedThreatProtection#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#id SentinelDataConnectorAzureAdvancedThreatProtection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#tenant_id SentinelDataConnectorAzureAdvancedThreatProtection#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.timeouts"></a>

```python
timeouts: SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts">SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#timeouts SentinelDataConnectorAzureAdvancedThreatProtection#timeouts}

---

### SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts <a name="SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_azure_advanced_threat_protection

sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#create SentinelDataConnectorAzureAdvancedThreatProtection#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#delete SentinelDataConnectorAzureAdvancedThreatProtection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#read SentinelDataConnectorAzureAdvancedThreatProtection#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#create SentinelDataConnectorAzureAdvancedThreatProtection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#delete SentinelDataConnectorAzureAdvancedThreatProtection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#read SentinelDataConnectorAzureAdvancedThreatProtection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference <a name="SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_azure_advanced_threat_protection

sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts">SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts">SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts</a>]

---



