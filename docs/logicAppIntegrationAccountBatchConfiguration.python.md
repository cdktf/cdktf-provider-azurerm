# `logicAppIntegrationAccountBatchConfiguration` Submodule <a name="`logicAppIntegrationAccountBatchConfiguration` Submodule" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogicAppIntegrationAccountBatchConfiguration <a name="LogicAppIntegrationAccountBatchConfiguration" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration azurerm_logic_app_integration_account_batch_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_integration_account_batch_configuration

logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  batch_group_name: str,
  integration_account_name: str,
  name: str,
  release_criteria: LogicAppIntegrationAccountBatchConfigurationReleaseCriteria,
  resource_group_name: str,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  timeouts: LogicAppIntegrationAccountBatchConfigurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.batchGroupName">batch_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#batch_group_name LogicAppIntegrationAccountBatchConfiguration#batch_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.integrationAccountName">integration_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#integration_account_name LogicAppIntegrationAccountBatchConfiguration#integration_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#name LogicAppIntegrationAccountBatchConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.releaseCriteria">release_criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria">LogicAppIntegrationAccountBatchConfigurationReleaseCriteria</a></code> | release_criteria block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#resource_group_name LogicAppIntegrationAccountBatchConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#id LogicAppIntegrationAccountBatchConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#metadata LogicAppIntegrationAccountBatchConfiguration#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts">LogicAppIntegrationAccountBatchConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `batch_group_name`<sup>Required</sup> <a name="batch_group_name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.batchGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#batch_group_name LogicAppIntegrationAccountBatchConfiguration#batch_group_name}.

---

##### `integration_account_name`<sup>Required</sup> <a name="integration_account_name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.integrationAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#integration_account_name LogicAppIntegrationAccountBatchConfiguration#integration_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#name LogicAppIntegrationAccountBatchConfiguration#name}.

---

##### `release_criteria`<sup>Required</sup> <a name="release_criteria" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.releaseCriteria"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria">LogicAppIntegrationAccountBatchConfigurationReleaseCriteria</a>

release_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#release_criteria LogicAppIntegrationAccountBatchConfiguration#release_criteria}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#resource_group_name LogicAppIntegrationAccountBatchConfiguration#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#id LogicAppIntegrationAccountBatchConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#metadata LogicAppIntegrationAccountBatchConfiguration#metadata}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts">LogicAppIntegrationAccountBatchConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#timeouts LogicAppIntegrationAccountBatchConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.putReleaseCriteria">put_release_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_release_criteria` <a name="put_release_criteria" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.putReleaseCriteria"></a>

```python
def put_release_criteria(
  batch_size: typing.Union[int, float] = None,
  message_count: typing.Union[int, float] = None,
  recurrence: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence = None
) -> None
```

###### `batch_size`<sup>Optional</sup> <a name="batch_size" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.putReleaseCriteria.parameter.batchSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#batch_size LogicAppIntegrationAccountBatchConfiguration#batch_size}.

---

###### `message_count`<sup>Optional</sup> <a name="message_count" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.putReleaseCriteria.parameter.messageCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#message_count LogicAppIntegrationAccountBatchConfiguration#message_count}.

---

###### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.putReleaseCriteria.parameter.recurrence"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#recurrence LogicAppIntegrationAccountBatchConfiguration#recurrence}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#create LogicAppIntegrationAccountBatchConfiguration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#delete LogicAppIntegrationAccountBatchConfiguration#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#read LogicAppIntegrationAccountBatchConfiguration#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#update LogicAppIntegrationAccountBatchConfiguration#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LogicAppIntegrationAccountBatchConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_integration_account_batch_configuration

logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_integration_account_batch_configuration

logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_integration_account_batch_configuration

logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_integration_account_batch_configuration

logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LogicAppIntegrationAccountBatchConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LogicAppIntegrationAccountBatchConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LogicAppIntegrationAccountBatchConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogicAppIntegrationAccountBatchConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.releaseCriteria">release_criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference">LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.batchGroupNameInput">batch_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.integrationAccountNameInput">integration_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.releaseCriteriaInput">release_criteria_input</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria">LogicAppIntegrationAccountBatchConfigurationReleaseCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts">LogicAppIntegrationAccountBatchConfigurationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.batchGroupName">batch_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.integrationAccountName">integration_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `release_criteria`<sup>Required</sup> <a name="release_criteria" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.releaseCriteria"></a>

```python
release_criteria: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.timeouts"></a>

```python
timeouts: LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference">LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference</a>

---

##### `batch_group_name_input`<sup>Optional</sup> <a name="batch_group_name_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.batchGroupNameInput"></a>

```python
batch_group_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integration_account_name_input`<sup>Optional</sup> <a name="integration_account_name_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.integrationAccountNameInput"></a>

```python
integration_account_name_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `release_criteria_input`<sup>Optional</sup> <a name="release_criteria_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.releaseCriteriaInput"></a>

```python
release_criteria_input: LogicAppIntegrationAccountBatchConfigurationReleaseCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria">LogicAppIntegrationAccountBatchConfigurationReleaseCriteria</a>

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LogicAppIntegrationAccountBatchConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts">LogicAppIntegrationAccountBatchConfigurationTimeouts</a>]

---

##### `batch_group_name`<sup>Required</sup> <a name="batch_group_name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.batchGroupName"></a>

```python
batch_group_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_account_name`<sup>Required</sup> <a name="integration_account_name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.integrationAccountName"></a>

```python
integration_account_name: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LogicAppIntegrationAccountBatchConfigurationConfig <a name="LogicAppIntegrationAccountBatchConfigurationConfig" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_integration_account_batch_configuration

logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  batch_group_name: str,
  integration_account_name: str,
  name: str,
  release_criteria: LogicAppIntegrationAccountBatchConfigurationReleaseCriteria,
  resource_group_name: str,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  timeouts: LogicAppIntegrationAccountBatchConfigurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.batchGroupName">batch_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#batch_group_name LogicAppIntegrationAccountBatchConfiguration#batch_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.integrationAccountName">integration_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#integration_account_name LogicAppIntegrationAccountBatchConfiguration#integration_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#name LogicAppIntegrationAccountBatchConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.releaseCriteria">release_criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria">LogicAppIntegrationAccountBatchConfigurationReleaseCriteria</a></code> | release_criteria block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#resource_group_name LogicAppIntegrationAccountBatchConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#id LogicAppIntegrationAccountBatchConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#metadata LogicAppIntegrationAccountBatchConfiguration#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts">LogicAppIntegrationAccountBatchConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `batch_group_name`<sup>Required</sup> <a name="batch_group_name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.batchGroupName"></a>

```python
batch_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#batch_group_name LogicAppIntegrationAccountBatchConfiguration#batch_group_name}.

---

##### `integration_account_name`<sup>Required</sup> <a name="integration_account_name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.integrationAccountName"></a>

```python
integration_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#integration_account_name LogicAppIntegrationAccountBatchConfiguration#integration_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#name LogicAppIntegrationAccountBatchConfiguration#name}.

---

##### `release_criteria`<sup>Required</sup> <a name="release_criteria" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.releaseCriteria"></a>

```python
release_criteria: LogicAppIntegrationAccountBatchConfigurationReleaseCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria">LogicAppIntegrationAccountBatchConfigurationReleaseCriteria</a>

release_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#release_criteria LogicAppIntegrationAccountBatchConfiguration#release_criteria}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#resource_group_name LogicAppIntegrationAccountBatchConfiguration#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#id LogicAppIntegrationAccountBatchConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#metadata LogicAppIntegrationAccountBatchConfiguration#metadata}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationConfig.property.timeouts"></a>

```python
timeouts: LogicAppIntegrationAccountBatchConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts">LogicAppIntegrationAccountBatchConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#timeouts LogicAppIntegrationAccountBatchConfiguration#timeouts}

---

### LogicAppIntegrationAccountBatchConfigurationReleaseCriteria <a name="LogicAppIntegrationAccountBatchConfigurationReleaseCriteria" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_integration_account_batch_configuration

logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria(
  batch_size: typing.Union[int, float] = None,
  message_count: typing.Union[int, float] = None,
  recurrence: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#batch_size LogicAppIntegrationAccountBatchConfiguration#batch_size}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria.property.messageCount">message_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#message_count LogicAppIntegrationAccountBatchConfiguration#message_count}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence</a></code> | recurrence block. |

---

##### `batch_size`<sup>Optional</sup> <a name="batch_size" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#batch_size LogicAppIntegrationAccountBatchConfiguration#batch_size}.

---

##### `message_count`<sup>Optional</sup> <a name="message_count" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria.property.messageCount"></a>

```python
message_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#message_count LogicAppIntegrationAccountBatchConfiguration#message_count}.

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria.property.recurrence"></a>

```python
recurrence: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#recurrence LogicAppIntegrationAccountBatchConfiguration#recurrence}

---

### LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence <a name="LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_integration_account_batch_configuration

logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence(
  frequency: str,
  interval: typing.Union[int, float],
  end_time: str = None,
  schedule: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule = None,
  start_time: str = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence.property.frequency">frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#frequency LogicAppIntegrationAccountBatchConfiguration#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#interval LogicAppIntegrationAccountBatchConfiguration#interval}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence.property.endTime">end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#end_time LogicAppIntegrationAccountBatchConfiguration#end_time}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#start_time LogicAppIntegrationAccountBatchConfiguration#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#time_zone LogicAppIntegrationAccountBatchConfiguration#time_zone}. |

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#frequency LogicAppIntegrationAccountBatchConfiguration#frequency}.

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#interval LogicAppIntegrationAccountBatchConfiguration#interval}.

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#end_time LogicAppIntegrationAccountBatchConfiguration#end_time}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence.property.schedule"></a>

```python
schedule: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#schedule LogicAppIntegrationAccountBatchConfiguration#schedule}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#start_time LogicAppIntegrationAccountBatchConfiguration#start_time}.

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#time_zone LogicAppIntegrationAccountBatchConfiguration#time_zone}.

---

### LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule <a name="LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_integration_account_batch_configuration

logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule(
  hours: typing.List[typing.Union[int, float]] = None,
  minutes: typing.List[typing.Union[int, float]] = None,
  month_days: typing.List[typing.Union[int, float]] = None,
  monthly: typing.Union[IResolvable, typing.List[LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly]] = None,
  week_days: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule.property.hours">hours</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#hours LogicAppIntegrationAccountBatchConfiguration#hours}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule.property.minutes">minutes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#minutes LogicAppIntegrationAccountBatchConfiguration#minutes}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule.property.monthDays">month_days</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#month_days LogicAppIntegrationAccountBatchConfiguration#month_days}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule.property.monthly">monthly</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly</a>]]</code> | monthly block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule.property.weekDays">week_days</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#week_days LogicAppIntegrationAccountBatchConfiguration#week_days}. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule.property.hours"></a>

```python
hours: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#hours LogicAppIntegrationAccountBatchConfiguration#hours}.

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule.property.minutes"></a>

```python
minutes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#minutes LogicAppIntegrationAccountBatchConfiguration#minutes}.

---

##### `month_days`<sup>Optional</sup> <a name="month_days" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule.property.monthDays"></a>

```python
month_days: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#month_days LogicAppIntegrationAccountBatchConfiguration#month_days}.

---

##### `monthly`<sup>Optional</sup> <a name="monthly" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule.property.monthly"></a>

```python
monthly: typing.Union[IResolvable, typing.List[LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly</a>]]

monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#monthly LogicAppIntegrationAccountBatchConfiguration#monthly}

---

##### `week_days`<sup>Optional</sup> <a name="week_days" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule.property.weekDays"></a>

```python
week_days: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#week_days LogicAppIntegrationAccountBatchConfiguration#week_days}.

---

### LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly <a name="LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_integration_account_batch_configuration

logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly(
  week: typing.Union[int, float],
  weekday: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly.property.week">week</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#week LogicAppIntegrationAccountBatchConfiguration#week}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly.property.weekday">weekday</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#weekday LogicAppIntegrationAccountBatchConfiguration#weekday}. |

---

##### `week`<sup>Required</sup> <a name="week" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly.property.week"></a>

```python
week: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#week LogicAppIntegrationAccountBatchConfiguration#week}.

---

##### `weekday`<sup>Required</sup> <a name="weekday" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly.property.weekday"></a>

```python
weekday: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#weekday LogicAppIntegrationAccountBatchConfiguration#weekday}.

---

### LogicAppIntegrationAccountBatchConfigurationTimeouts <a name="LogicAppIntegrationAccountBatchConfigurationTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_integration_account_batch_configuration

logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#create LogicAppIntegrationAccountBatchConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#delete LogicAppIntegrationAccountBatchConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#read LogicAppIntegrationAccountBatchConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#update LogicAppIntegrationAccountBatchConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#create LogicAppIntegrationAccountBatchConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#delete LogicAppIntegrationAccountBatchConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#read LogicAppIntegrationAccountBatchConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#update LogicAppIntegrationAccountBatchConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference <a name="LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_integration_account_batch_configuration

logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.putRecurrence">put_recurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.resetBatchSize">reset_batch_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.resetMessageCount">reset_message_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.resetRecurrence">reset_recurrence</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_recurrence` <a name="put_recurrence" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.putRecurrence"></a>

```python
def put_recurrence(
  frequency: str,
  interval: typing.Union[int, float],
  end_time: str = None,
  schedule: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule = None,
  start_time: str = None,
  time_zone: str = None
) -> None
```

###### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.putRecurrence.parameter.frequency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#frequency LogicAppIntegrationAccountBatchConfiguration#frequency}.

---

###### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.putRecurrence.parameter.interval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#interval LogicAppIntegrationAccountBatchConfiguration#interval}.

---

###### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.putRecurrence.parameter.endTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#end_time LogicAppIntegrationAccountBatchConfiguration#end_time}.

---

###### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.putRecurrence.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#schedule LogicAppIntegrationAccountBatchConfiguration#schedule}

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.putRecurrence.parameter.startTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#start_time LogicAppIntegrationAccountBatchConfiguration#start_time}.

---

###### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.putRecurrence.parameter.timeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#time_zone LogicAppIntegrationAccountBatchConfiguration#time_zone}.

---

##### `reset_batch_size` <a name="reset_batch_size" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.resetBatchSize"></a>

```python
def reset_batch_size() -> None
```

##### `reset_message_count` <a name="reset_message_count" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.resetMessageCount"></a>

```python
def reset_message_count() -> None
```

##### `reset_recurrence` <a name="reset_recurrence" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.resetRecurrence"></a>

```python
def reset_recurrence() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.batchSizeInput">batch_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.messageCountInput">message_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.recurrenceInput">recurrence_input</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.messageCount">message_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria">LogicAppIntegrationAccountBatchConfigurationReleaseCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.recurrence"></a>

```python
recurrence: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference</a>

---

##### `batch_size_input`<sup>Optional</sup> <a name="batch_size_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.batchSizeInput"></a>

```python
batch_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message_count_input`<sup>Optional</sup> <a name="message_count_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.messageCountInput"></a>

```python
message_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recurrence_input`<sup>Optional</sup> <a name="recurrence_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.recurrenceInput"></a>

```python
recurrence_input: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence</a>

---

##### `batch_size`<sup>Required</sup> <a name="batch_size" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message_count`<sup>Required</sup> <a name="message_count" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.messageCount"></a>

```python
message_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: LogicAppIntegrationAccountBatchConfigurationReleaseCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteria">LogicAppIntegrationAccountBatchConfigurationReleaseCriteria</a>

---


### LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference <a name="LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_integration_account_batch_configuration

logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.putSchedule"></a>

```python
def put_schedule(
  hours: typing.List[typing.Union[int, float]] = None,
  minutes: typing.List[typing.Union[int, float]] = None,
  month_days: typing.List[typing.Union[int, float]] = None,
  monthly: typing.Union[IResolvable, typing.List[LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly]] = None,
  week_days: typing.List[str] = None
) -> None
```

###### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.putSchedule.parameter.hours"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#hours LogicAppIntegrationAccountBatchConfiguration#hours}.

---

###### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.putSchedule.parameter.minutes"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#minutes LogicAppIntegrationAccountBatchConfiguration#minutes}.

---

###### `month_days`<sup>Optional</sup> <a name="month_days" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.putSchedule.parameter.monthDays"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#month_days LogicAppIntegrationAccountBatchConfiguration#month_days}.

---

###### `monthly`<sup>Optional</sup> <a name="monthly" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.putSchedule.parameter.monthly"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly</a>]]

monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#monthly LogicAppIntegrationAccountBatchConfiguration#monthly}

---

###### `week_days`<sup>Optional</sup> <a name="week_days" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.putSchedule.parameter.weekDays"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/logic_app_integration_account_batch_configuration#week_days LogicAppIntegrationAccountBatchConfiguration#week_days}.

---

##### `reset_end_time` <a name="reset_end_time" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.frequencyInput">frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.intervalInput">interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.scheduleInput">schedule_input</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.schedule"></a>

```python
schedule: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference</a>

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.frequencyInput"></a>

```python
frequency_input: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.intervalInput"></a>

```python
interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.scheduleInput"></a>

```python
schedule_input: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule</a>

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceOutputReference.property.internalValue"></a>

```python
internal_value: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrence</a>

---


### LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList <a name="LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_integration_account_batch_configuration

logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly</a>]]

---


### LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference <a name="LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_integration_account_batch_configuration

logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.weekdayInput">weekday_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.weekInput">week_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.week">week</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.weekday">weekday</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `weekday_input`<sup>Optional</sup> <a name="weekday_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.weekdayInput"></a>

```python
weekday_input: str
```

- *Type:* str

---

##### `week_input`<sup>Optional</sup> <a name="week_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.weekInput"></a>

```python
week_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `week`<sup>Required</sup> <a name="week" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.week"></a>

```python
week: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weekday`<sup>Required</sup> <a name="weekday" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.weekday"></a>

```python
weekday: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly</a>]

---


### LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference <a name="LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_integration_account_batch_configuration

logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.putMonthly">put_monthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.resetHours">reset_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.resetMinutes">reset_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.resetMonthDays">reset_month_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.resetMonthly">reset_monthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.resetWeekDays">reset_week_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_monthly` <a name="put_monthly" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.putMonthly"></a>

```python
def put_monthly(
  value: typing.Union[IResolvable, typing.List[LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.putMonthly.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly</a>]]

---

##### `reset_hours` <a name="reset_hours" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.resetHours"></a>

```python
def reset_hours() -> None
```

##### `reset_minutes` <a name="reset_minutes" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.resetMinutes"></a>

```python
def reset_minutes() -> None
```

##### `reset_month_days` <a name="reset_month_days" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.resetMonthDays"></a>

```python
def reset_month_days() -> None
```

##### `reset_monthly` <a name="reset_monthly" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.resetMonthly"></a>

```python
def reset_monthly() -> None
```

##### `reset_week_days` <a name="reset_week_days" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.resetWeekDays"></a>

```python
def reset_week_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.monthly">monthly</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.monthDaysInput">month_days_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.monthlyInput">monthly_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.weekDaysInput">week_days_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.hours">hours</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.minutes">minutes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.monthDays">month_days</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.weekDays">week_days</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `monthly`<sup>Required</sup> <a name="monthly" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.monthly"></a>

```python
monthly: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthlyList</a>

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.hoursInput"></a>

```python
hours_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `month_days_input`<sup>Optional</sup> <a name="month_days_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.monthDaysInput"></a>

```python
month_days_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `monthly_input`<sup>Optional</sup> <a name="monthly_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.monthlyInput"></a>

```python
monthly_input: typing.Union[IResolvable, typing.List[LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleMonthly</a>]]

---

##### `week_days_input`<sup>Optional</sup> <a name="week_days_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.weekDaysInput"></a>

```python
week_days_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.hours"></a>

```python
hours: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.minutes"></a>

```python
minutes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `month_days`<sup>Required</sup> <a name="month_days" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.monthDays"></a>

```python
month_days: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `week_days`<sup>Required</sup> <a name="week_days" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.weekDays"></a>

```python
week_days: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceScheduleOutputReference.property.internalValue"></a>

```python
internal_value: LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule">LogicAppIntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceSchedule</a>

---


### LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference <a name="LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_integration_account_batch_configuration

logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts">LogicAppIntegrationAccountBatchConfigurationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogicAppIntegrationAccountBatchConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountBatchConfiguration.LogicAppIntegrationAccountBatchConfigurationTimeouts">LogicAppIntegrationAccountBatchConfigurationTimeouts</a>]

---



