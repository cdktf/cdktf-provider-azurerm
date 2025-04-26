# `sentinelDataConnectorDynamics365` Submodule <a name="`sentinelDataConnectorDynamics365` Submodule" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelDataConnectorDynamics365 <a name="SentinelDataConnectorDynamics365" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365 azurerm_sentinel_data_connector_dynamics_365}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_dynamics365

sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365(
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
  timeouts: SentinelDataConnectorDynamics365Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#log_analytics_workspace_id SentinelDataConnectorDynamics365#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#name SentinelDataConnectorDynamics365#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#id SentinelDataConnectorDynamics365#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#tenant_id SentinelDataConnectorDynamics365#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Timeouts">SentinelDataConnectorDynamics365Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#log_analytics_workspace_id SentinelDataConnectorDynamics365#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#name SentinelDataConnectorDynamics365#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#id SentinelDataConnectorDynamics365#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#tenant_id SentinelDataConnectorDynamics365#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Timeouts">SentinelDataConnectorDynamics365Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#timeouts SentinelDataConnectorDynamics365#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#create SentinelDataConnectorDynamics365#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#delete SentinelDataConnectorDynamics365#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#read SentinelDataConnectorDynamics365#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SentinelDataConnectorDynamics365 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_dynamics365

sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_dynamics365

sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_dynamics365

sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_dynamics365

sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SentinelDataConnectorDynamics365 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SentinelDataConnectorDynamics365 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SentinelDataConnectorDynamics365 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SentinelDataConnectorDynamics365 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference">SentinelDataConnectorDynamics365TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.logAnalyticsWorkspaceIdInput">log_analytics_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Timeouts">SentinelDataConnectorDynamics365Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.timeouts"></a>

```python
timeouts: SentinelDataConnectorDynamics365TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference">SentinelDataConnectorDynamics365TimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_analytics_workspace_id_input`<sup>Optional</sup> <a name="log_analytics_workspace_id_input" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.logAnalyticsWorkspaceIdInput"></a>

```python
log_analytics_workspace_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SentinelDataConnectorDynamics365Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Timeouts">SentinelDataConnectorDynamics365Timeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelDataConnectorDynamics365Config <a name="SentinelDataConnectorDynamics365Config" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_dynamics365

sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config(
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
  timeouts: SentinelDataConnectorDynamics365Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#log_analytics_workspace_id SentinelDataConnectorDynamics365#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#name SentinelDataConnectorDynamics365#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#id SentinelDataConnectorDynamics365#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#tenant_id SentinelDataConnectorDynamics365#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Timeouts">SentinelDataConnectorDynamics365Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#log_analytics_workspace_id SentinelDataConnectorDynamics365#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#name SentinelDataConnectorDynamics365#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#id SentinelDataConnectorDynamics365#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#tenant_id SentinelDataConnectorDynamics365#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Config.property.timeouts"></a>

```python
timeouts: SentinelDataConnectorDynamics365Timeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Timeouts">SentinelDataConnectorDynamics365Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#timeouts SentinelDataConnectorDynamics365#timeouts}

---

### SentinelDataConnectorDynamics365Timeouts <a name="SentinelDataConnectorDynamics365Timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_dynamics365

sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#create SentinelDataConnectorDynamics365#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#delete SentinelDataConnectorDynamics365#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Timeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#read SentinelDataConnectorDynamics365#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#create SentinelDataConnectorDynamics365#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#delete SentinelDataConnectorDynamics365#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Timeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/sentinel_data_connector_dynamics_365#read SentinelDataConnectorDynamics365#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelDataConnectorDynamics365TimeoutsOutputReference <a name="SentinelDataConnectorDynamics365TimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_dynamics365

sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Timeouts">SentinelDataConnectorDynamics365Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SentinelDataConnectorDynamics365Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelDataConnectorDynamics365.SentinelDataConnectorDynamics365Timeouts">SentinelDataConnectorDynamics365Timeouts</a>]

---



