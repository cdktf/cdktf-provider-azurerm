# `sqlVirtualNetworkRule` Submodule <a name="`sqlVirtualNetworkRule` Submodule" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlVirtualNetworkRule <a name="SqlVirtualNetworkRule" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule azurerm_sql_virtual_network_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_virtual_network_rule

sqlVirtualNetworkRule.SqlVirtualNetworkRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  server_name: str,
  subnet_id: str,
  id: str = None,
  ignore_missing_vnet_service_endpoint: typing.Union[bool, IResolvable] = None,
  timeouts: SqlVirtualNetworkRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#name SqlVirtualNetworkRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#resource_group_name SqlVirtualNetworkRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#server_name SqlVirtualNetworkRule#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#subnet_id SqlVirtualNetworkRule#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#id SqlVirtualNetworkRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.ignoreMissingVnetServiceEndpoint">ignore_missing_vnet_service_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#ignore_missing_vnet_service_endpoint SqlVirtualNetworkRule#ignore_missing_vnet_service_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts">SqlVirtualNetworkRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#name SqlVirtualNetworkRule#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#resource_group_name SqlVirtualNetworkRule#resource_group_name}.

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.serverName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#server_name SqlVirtualNetworkRule#server_name}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#subnet_id SqlVirtualNetworkRule#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#id SqlVirtualNetworkRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_missing_vnet_service_endpoint`<sup>Optional</sup> <a name="ignore_missing_vnet_service_endpoint" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.ignoreMissingVnetServiceEndpoint"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#ignore_missing_vnet_service_endpoint SqlVirtualNetworkRule#ignore_missing_vnet_service_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts">SqlVirtualNetworkRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#timeouts SqlVirtualNetworkRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.resetIgnoreMissingVnetServiceEndpoint">reset_ignore_missing_vnet_service_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#create SqlVirtualNetworkRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#delete SqlVirtualNetworkRule#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#read SqlVirtualNetworkRule#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#update SqlVirtualNetworkRule#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_missing_vnet_service_endpoint` <a name="reset_ignore_missing_vnet_service_endpoint" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.resetIgnoreMissingVnetServiceEndpoint"></a>

```python
def reset_ignore_missing_vnet_service_endpoint() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SqlVirtualNetworkRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_virtual_network_rule

sqlVirtualNetworkRule.SqlVirtualNetworkRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_virtual_network_rule

sqlVirtualNetworkRule.SqlVirtualNetworkRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_virtual_network_rule

sqlVirtualNetworkRule.SqlVirtualNetworkRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_virtual_network_rule

sqlVirtualNetworkRule.SqlVirtualNetworkRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SqlVirtualNetworkRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SqlVirtualNetworkRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SqlVirtualNetworkRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SqlVirtualNetworkRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference">SqlVirtualNetworkRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.ignoreMissingVnetServiceEndpointInput">ignore_missing_vnet_service_endpoint_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts">SqlVirtualNetworkRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.ignoreMissingVnetServiceEndpoint">ignore_missing_vnet_service_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.timeouts"></a>

```python
timeouts: SqlVirtualNetworkRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference">SqlVirtualNetworkRuleTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_missing_vnet_service_endpoint_input`<sup>Optional</sup> <a name="ignore_missing_vnet_service_endpoint_input" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.ignoreMissingVnetServiceEndpointInput"></a>

```python
ignore_missing_vnet_service_endpoint_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SqlVirtualNetworkRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts">SqlVirtualNetworkRuleTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_missing_vnet_service_endpoint`<sup>Required</sup> <a name="ignore_missing_vnet_service_endpoint" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.ignoreMissingVnetServiceEndpoint"></a>

```python
ignore_missing_vnet_service_endpoint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SqlVirtualNetworkRuleConfig <a name="SqlVirtualNetworkRuleConfig" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_virtual_network_rule

sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  server_name: str,
  subnet_id: str,
  id: str = None,
  ignore_missing_vnet_service_endpoint: typing.Union[bool, IResolvable] = None,
  timeouts: SqlVirtualNetworkRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#name SqlVirtualNetworkRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#resource_group_name SqlVirtualNetworkRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#server_name SqlVirtualNetworkRule#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#subnet_id SqlVirtualNetworkRule#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#id SqlVirtualNetworkRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.ignoreMissingVnetServiceEndpoint">ignore_missing_vnet_service_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#ignore_missing_vnet_service_endpoint SqlVirtualNetworkRule#ignore_missing_vnet_service_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts">SqlVirtualNetworkRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#name SqlVirtualNetworkRule#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#resource_group_name SqlVirtualNetworkRule#resource_group_name}.

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#server_name SqlVirtualNetworkRule#server_name}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#subnet_id SqlVirtualNetworkRule#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#id SqlVirtualNetworkRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_missing_vnet_service_endpoint`<sup>Optional</sup> <a name="ignore_missing_vnet_service_endpoint" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.ignoreMissingVnetServiceEndpoint"></a>

```python
ignore_missing_vnet_service_endpoint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#ignore_missing_vnet_service_endpoint SqlVirtualNetworkRule#ignore_missing_vnet_service_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleConfig.property.timeouts"></a>

```python
timeouts: SqlVirtualNetworkRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts">SqlVirtualNetworkRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#timeouts SqlVirtualNetworkRule#timeouts}

---

### SqlVirtualNetworkRuleTimeouts <a name="SqlVirtualNetworkRuleTimeouts" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_virtual_network_rule

sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#create SqlVirtualNetworkRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#delete SqlVirtualNetworkRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#read SqlVirtualNetworkRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#update SqlVirtualNetworkRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#create SqlVirtualNetworkRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#delete SqlVirtualNetworkRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#read SqlVirtualNetworkRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/sql_virtual_network_rule#update SqlVirtualNetworkRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlVirtualNetworkRuleTimeoutsOutputReference <a name="SqlVirtualNetworkRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_virtual_network_rule

sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts">SqlVirtualNetworkRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SqlVirtualNetworkRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sqlVirtualNetworkRule.SqlVirtualNetworkRuleTimeouts">SqlVirtualNetworkRuleTimeouts</a>]

---



