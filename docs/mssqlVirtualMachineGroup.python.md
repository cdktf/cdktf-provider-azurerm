# `mssqlVirtualMachineGroup` Submodule <a name="`mssqlVirtualMachineGroup` Submodule" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlVirtualMachineGroup <a name="MssqlVirtualMachineGroup" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group azurerm_mssql_virtual_machine_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_virtual_machine_group

mssqlVirtualMachineGroup.MssqlVirtualMachineGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  sql_image_offer: str,
  sql_image_sku: str,
  wsfc_domain_profile: MssqlVirtualMachineGroupWsfcDomainProfile,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: MssqlVirtualMachineGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#location MssqlVirtualMachineGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#name MssqlVirtualMachineGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#resource_group_name MssqlVirtualMachineGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.sqlImageOffer">sql_image_offer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#sql_image_offer MssqlVirtualMachineGroup#sql_image_offer}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.sqlImageSku">sql_image_sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#sql_image_sku MssqlVirtualMachineGroup#sql_image_sku}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.wsfcDomainProfile">wsfc_domain_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a></code> | wsfc_domain_profile block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#id MssqlVirtualMachineGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#tags MssqlVirtualMachineGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#location MssqlVirtualMachineGroup#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#name MssqlVirtualMachineGroup#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#resource_group_name MssqlVirtualMachineGroup#resource_group_name}.

---

##### `sql_image_offer`<sup>Required</sup> <a name="sql_image_offer" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.sqlImageOffer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#sql_image_offer MssqlVirtualMachineGroup#sql_image_offer}.

---

##### `sql_image_sku`<sup>Required</sup> <a name="sql_image_sku" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.sqlImageSku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#sql_image_sku MssqlVirtualMachineGroup#sql_image_sku}.

---

##### `wsfc_domain_profile`<sup>Required</sup> <a name="wsfc_domain_profile" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.wsfcDomainProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a>

wsfc_domain_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#wsfc_domain_profile MssqlVirtualMachineGroup#wsfc_domain_profile}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#id MssqlVirtualMachineGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#tags MssqlVirtualMachineGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#timeouts MssqlVirtualMachineGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putWsfcDomainProfile">put_wsfc_domain_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#create MssqlVirtualMachineGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#delete MssqlVirtualMachineGroup#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#read MssqlVirtualMachineGroup#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#update MssqlVirtualMachineGroup#update}.

---

##### `put_wsfc_domain_profile` <a name="put_wsfc_domain_profile" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putWsfcDomainProfile"></a>

```python
def put_wsfc_domain_profile(
  cluster_subnet_type: str,
  fqdn: str,
  cluster_bootstrap_account_name: str = None,
  cluster_operator_account_name: str = None,
  organizational_unit_path: str = None,
  sql_service_account_name: str = None,
  storage_account_primary_key: str = None,
  storage_account_url: str = None
) -> None
```

###### `cluster_subnet_type`<sup>Required</sup> <a name="cluster_subnet_type" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putWsfcDomainProfile.parameter.clusterSubnetType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#cluster_subnet_type MssqlVirtualMachineGroup#cluster_subnet_type}.

---

###### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putWsfcDomainProfile.parameter.fqdn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#fqdn MssqlVirtualMachineGroup#fqdn}.

---

###### `cluster_bootstrap_account_name`<sup>Optional</sup> <a name="cluster_bootstrap_account_name" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putWsfcDomainProfile.parameter.clusterBootstrapAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#cluster_bootstrap_account_name MssqlVirtualMachineGroup#cluster_bootstrap_account_name}.

---

###### `cluster_operator_account_name`<sup>Optional</sup> <a name="cluster_operator_account_name" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putWsfcDomainProfile.parameter.clusterOperatorAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#cluster_operator_account_name MssqlVirtualMachineGroup#cluster_operator_account_name}.

---

###### `organizational_unit_path`<sup>Optional</sup> <a name="organizational_unit_path" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putWsfcDomainProfile.parameter.organizationalUnitPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#organizational_unit_path MssqlVirtualMachineGroup#organizational_unit_path}.

---

###### `sql_service_account_name`<sup>Optional</sup> <a name="sql_service_account_name" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putWsfcDomainProfile.parameter.sqlServiceAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#sql_service_account_name MssqlVirtualMachineGroup#sql_service_account_name}.

---

###### `storage_account_primary_key`<sup>Optional</sup> <a name="storage_account_primary_key" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putWsfcDomainProfile.parameter.storageAccountPrimaryKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#storage_account_primary_key MssqlVirtualMachineGroup#storage_account_primary_key}.

---

###### `storage_account_url`<sup>Optional</sup> <a name="storage_account_url" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putWsfcDomainProfile.parameter.storageAccountUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#storage_account_url MssqlVirtualMachineGroup#storage_account_url}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MssqlVirtualMachineGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_virtual_machine_group

mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_virtual_machine_group

mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_virtual_machine_group

mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_virtual_machine_group

mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MssqlVirtualMachineGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MssqlVirtualMachineGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MssqlVirtualMachineGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MssqlVirtualMachineGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference">MssqlVirtualMachineGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.wsfcDomainProfile">wsfc_domain_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference">MssqlVirtualMachineGroupWsfcDomainProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageOfferInput">sql_image_offer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageSkuInput">sql_image_sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.wsfcDomainProfileInput">wsfc_domain_profile_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageOffer">sql_image_offer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageSku">sql_image_sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.timeouts"></a>

```python
timeouts: MssqlVirtualMachineGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference">MssqlVirtualMachineGroupTimeoutsOutputReference</a>

---

##### `wsfc_domain_profile`<sup>Required</sup> <a name="wsfc_domain_profile" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.wsfcDomainProfile"></a>

```python
wsfc_domain_profile: MssqlVirtualMachineGroupWsfcDomainProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference">MssqlVirtualMachineGroupWsfcDomainProfileOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sql_image_offer_input`<sup>Optional</sup> <a name="sql_image_offer_input" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageOfferInput"></a>

```python
sql_image_offer_input: str
```

- *Type:* str

---

##### `sql_image_sku_input`<sup>Optional</sup> <a name="sql_image_sku_input" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageSkuInput"></a>

```python
sql_image_sku_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MssqlVirtualMachineGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a>]

---

##### `wsfc_domain_profile_input`<sup>Optional</sup> <a name="wsfc_domain_profile_input" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.wsfcDomainProfileInput"></a>

```python
wsfc_domain_profile_input: MssqlVirtualMachineGroupWsfcDomainProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sql_image_offer`<sup>Required</sup> <a name="sql_image_offer" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageOffer"></a>

```python
sql_image_offer: str
```

- *Type:* str

---

##### `sql_image_sku`<sup>Required</sup> <a name="sql_image_sku" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageSku"></a>

```python
sql_image_sku: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlVirtualMachineGroupConfig <a name="MssqlVirtualMachineGroupConfig" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_virtual_machine_group

mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  sql_image_offer: str,
  sql_image_sku: str,
  wsfc_domain_profile: MssqlVirtualMachineGroupWsfcDomainProfile,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: MssqlVirtualMachineGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#location MssqlVirtualMachineGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#name MssqlVirtualMachineGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#resource_group_name MssqlVirtualMachineGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.sqlImageOffer">sql_image_offer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#sql_image_offer MssqlVirtualMachineGroup#sql_image_offer}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.sqlImageSku">sql_image_sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#sql_image_sku MssqlVirtualMachineGroup#sql_image_sku}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.wsfcDomainProfile">wsfc_domain_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a></code> | wsfc_domain_profile block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#id MssqlVirtualMachineGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#tags MssqlVirtualMachineGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#location MssqlVirtualMachineGroup#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#name MssqlVirtualMachineGroup#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#resource_group_name MssqlVirtualMachineGroup#resource_group_name}.

---

##### `sql_image_offer`<sup>Required</sup> <a name="sql_image_offer" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.sqlImageOffer"></a>

```python
sql_image_offer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#sql_image_offer MssqlVirtualMachineGroup#sql_image_offer}.

---

##### `sql_image_sku`<sup>Required</sup> <a name="sql_image_sku" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.sqlImageSku"></a>

```python
sql_image_sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#sql_image_sku MssqlVirtualMachineGroup#sql_image_sku}.

---

##### `wsfc_domain_profile`<sup>Required</sup> <a name="wsfc_domain_profile" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.wsfcDomainProfile"></a>

```python
wsfc_domain_profile: MssqlVirtualMachineGroupWsfcDomainProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a>

wsfc_domain_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#wsfc_domain_profile MssqlVirtualMachineGroup#wsfc_domain_profile}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#id MssqlVirtualMachineGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#tags MssqlVirtualMachineGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.timeouts"></a>

```python
timeouts: MssqlVirtualMachineGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#timeouts MssqlVirtualMachineGroup#timeouts}

---

### MssqlVirtualMachineGroupTimeouts <a name="MssqlVirtualMachineGroupTimeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_virtual_machine_group

mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#create MssqlVirtualMachineGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#delete MssqlVirtualMachineGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#read MssqlVirtualMachineGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#update MssqlVirtualMachineGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#create MssqlVirtualMachineGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#delete MssqlVirtualMachineGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#read MssqlVirtualMachineGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#update MssqlVirtualMachineGroup#update}.

---

### MssqlVirtualMachineGroupWsfcDomainProfile <a name="MssqlVirtualMachineGroupWsfcDomainProfile" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_virtual_machine_group

mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile(
  cluster_subnet_type: str,
  fqdn: str,
  cluster_bootstrap_account_name: str = None,
  cluster_operator_account_name: str = None,
  organizational_unit_path: str = None,
  sql_service_account_name: str = None,
  storage_account_primary_key: str = None,
  storage_account_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.clusterSubnetType">cluster_subnet_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#cluster_subnet_type MssqlVirtualMachineGroup#cluster_subnet_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.fqdn">fqdn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#fqdn MssqlVirtualMachineGroup#fqdn}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.clusterBootstrapAccountName">cluster_bootstrap_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#cluster_bootstrap_account_name MssqlVirtualMachineGroup#cluster_bootstrap_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.clusterOperatorAccountName">cluster_operator_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#cluster_operator_account_name MssqlVirtualMachineGroup#cluster_operator_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.organizationalUnitPath">organizational_unit_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#organizational_unit_path MssqlVirtualMachineGroup#organizational_unit_path}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.sqlServiceAccountName">sql_service_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#sql_service_account_name MssqlVirtualMachineGroup#sql_service_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.storageAccountPrimaryKey">storage_account_primary_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#storage_account_primary_key MssqlVirtualMachineGroup#storage_account_primary_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.storageAccountUrl">storage_account_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#storage_account_url MssqlVirtualMachineGroup#storage_account_url}. |

---

##### `cluster_subnet_type`<sup>Required</sup> <a name="cluster_subnet_type" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.clusterSubnetType"></a>

```python
cluster_subnet_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#cluster_subnet_type MssqlVirtualMachineGroup#cluster_subnet_type}.

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#fqdn MssqlVirtualMachineGroup#fqdn}.

---

##### `cluster_bootstrap_account_name`<sup>Optional</sup> <a name="cluster_bootstrap_account_name" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.clusterBootstrapAccountName"></a>

```python
cluster_bootstrap_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#cluster_bootstrap_account_name MssqlVirtualMachineGroup#cluster_bootstrap_account_name}.

---

##### `cluster_operator_account_name`<sup>Optional</sup> <a name="cluster_operator_account_name" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.clusterOperatorAccountName"></a>

```python
cluster_operator_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#cluster_operator_account_name MssqlVirtualMachineGroup#cluster_operator_account_name}.

---

##### `organizational_unit_path`<sup>Optional</sup> <a name="organizational_unit_path" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.organizationalUnitPath"></a>

```python
organizational_unit_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#organizational_unit_path MssqlVirtualMachineGroup#organizational_unit_path}.

---

##### `sql_service_account_name`<sup>Optional</sup> <a name="sql_service_account_name" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.sqlServiceAccountName"></a>

```python
sql_service_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#sql_service_account_name MssqlVirtualMachineGroup#sql_service_account_name}.

---

##### `storage_account_primary_key`<sup>Optional</sup> <a name="storage_account_primary_key" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.storageAccountPrimaryKey"></a>

```python
storage_account_primary_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#storage_account_primary_key MssqlVirtualMachineGroup#storage_account_primary_key}.

---

##### `storage_account_url`<sup>Optional</sup> <a name="storage_account_url" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.storageAccountUrl"></a>

```python
storage_account_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/mssql_virtual_machine_group#storage_account_url MssqlVirtualMachineGroup#storage_account_url}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlVirtualMachineGroupTimeoutsOutputReference <a name="MssqlVirtualMachineGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_virtual_machine_group

mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MssqlVirtualMachineGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a>]

---


### MssqlVirtualMachineGroupWsfcDomainProfileOutputReference <a name="MssqlVirtualMachineGroupWsfcDomainProfileOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_virtual_machine_group

mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetClusterBootstrapAccountName">reset_cluster_bootstrap_account_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetClusterOperatorAccountName">reset_cluster_operator_account_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetOrganizationalUnitPath">reset_organizational_unit_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetSqlServiceAccountName">reset_sql_service_account_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetStorageAccountPrimaryKey">reset_storage_account_primary_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetStorageAccountUrl">reset_storage_account_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cluster_bootstrap_account_name` <a name="reset_cluster_bootstrap_account_name" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetClusterBootstrapAccountName"></a>

```python
def reset_cluster_bootstrap_account_name() -> None
```

##### `reset_cluster_operator_account_name` <a name="reset_cluster_operator_account_name" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetClusterOperatorAccountName"></a>

```python
def reset_cluster_operator_account_name() -> None
```

##### `reset_organizational_unit_path` <a name="reset_organizational_unit_path" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetOrganizationalUnitPath"></a>

```python
def reset_organizational_unit_path() -> None
```

##### `reset_sql_service_account_name` <a name="reset_sql_service_account_name" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetSqlServiceAccountName"></a>

```python
def reset_sql_service_account_name() -> None
```

##### `reset_storage_account_primary_key` <a name="reset_storage_account_primary_key" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetStorageAccountPrimaryKey"></a>

```python
def reset_storage_account_primary_key() -> None
```

##### `reset_storage_account_url` <a name="reset_storage_account_url" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetStorageAccountUrl"></a>

```python
def reset_storage_account_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterBootstrapAccountNameInput">cluster_bootstrap_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterOperatorAccountNameInput">cluster_operator_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterSubnetTypeInput">cluster_subnet_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.fqdnInput">fqdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.organizationalUnitPathInput">organizational_unit_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.sqlServiceAccountNameInput">sql_service_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountPrimaryKeyInput">storage_account_primary_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountUrlInput">storage_account_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterBootstrapAccountName">cluster_bootstrap_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterOperatorAccountName">cluster_operator_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterSubnetType">cluster_subnet_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.organizationalUnitPath">organizational_unit_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.sqlServiceAccountName">sql_service_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountPrimaryKey">storage_account_primary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountUrl">storage_account_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_bootstrap_account_name_input`<sup>Optional</sup> <a name="cluster_bootstrap_account_name_input" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterBootstrapAccountNameInput"></a>

```python
cluster_bootstrap_account_name_input: str
```

- *Type:* str

---

##### `cluster_operator_account_name_input`<sup>Optional</sup> <a name="cluster_operator_account_name_input" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterOperatorAccountNameInput"></a>

```python
cluster_operator_account_name_input: str
```

- *Type:* str

---

##### `cluster_subnet_type_input`<sup>Optional</sup> <a name="cluster_subnet_type_input" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterSubnetTypeInput"></a>

```python
cluster_subnet_type_input: str
```

- *Type:* str

---

##### `fqdn_input`<sup>Optional</sup> <a name="fqdn_input" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.fqdnInput"></a>

```python
fqdn_input: str
```

- *Type:* str

---

##### `organizational_unit_path_input`<sup>Optional</sup> <a name="organizational_unit_path_input" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.organizationalUnitPathInput"></a>

```python
organizational_unit_path_input: str
```

- *Type:* str

---

##### `sql_service_account_name_input`<sup>Optional</sup> <a name="sql_service_account_name_input" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.sqlServiceAccountNameInput"></a>

```python
sql_service_account_name_input: str
```

- *Type:* str

---

##### `storage_account_primary_key_input`<sup>Optional</sup> <a name="storage_account_primary_key_input" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountPrimaryKeyInput"></a>

```python
storage_account_primary_key_input: str
```

- *Type:* str

---

##### `storage_account_url_input`<sup>Optional</sup> <a name="storage_account_url_input" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountUrlInput"></a>

```python
storage_account_url_input: str
```

- *Type:* str

---

##### `cluster_bootstrap_account_name`<sup>Required</sup> <a name="cluster_bootstrap_account_name" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterBootstrapAccountName"></a>

```python
cluster_bootstrap_account_name: str
```

- *Type:* str

---

##### `cluster_operator_account_name`<sup>Required</sup> <a name="cluster_operator_account_name" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterOperatorAccountName"></a>

```python
cluster_operator_account_name: str
```

- *Type:* str

---

##### `cluster_subnet_type`<sup>Required</sup> <a name="cluster_subnet_type" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterSubnetType"></a>

```python
cluster_subnet_type: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `organizational_unit_path`<sup>Required</sup> <a name="organizational_unit_path" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.organizationalUnitPath"></a>

```python
organizational_unit_path: str
```

- *Type:* str

---

##### `sql_service_account_name`<sup>Required</sup> <a name="sql_service_account_name" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.sqlServiceAccountName"></a>

```python
sql_service_account_name: str
```

- *Type:* str

---

##### `storage_account_primary_key`<sup>Required</sup> <a name="storage_account_primary_key" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountPrimaryKey"></a>

```python
storage_account_primary_key: str
```

- *Type:* str

---

##### `storage_account_url`<sup>Required</sup> <a name="storage_account_url" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountUrl"></a>

```python
storage_account_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.internalValue"></a>

```python
internal_value: MssqlVirtualMachineGroupWsfcDomainProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a>

---



