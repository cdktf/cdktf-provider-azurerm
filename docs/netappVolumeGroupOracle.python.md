# `netappVolumeGroupOracle` Submodule <a name="`netappVolumeGroupOracle` Submodule" id="@cdktf/provider-azurerm.netappVolumeGroupOracle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolumeGroupOracle <a name="NetappVolumeGroupOracle" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle azurerm_netapp_volume_group_oracle}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_oracle

netappVolumeGroupOracle.NetappVolumeGroupOracle(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_name: str,
  application_identifier: str,
  group_description: str,
  location: str,
  name: str,
  resource_group_name: str,
  volume: typing.Union[IResolvable, typing.List[NetappVolumeGroupOracleVolume]],
  id: str = None,
  timeouts: NetappVolumeGroupOracleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#account_name NetappVolumeGroupOracle#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.applicationIdentifier">application_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#application_identifier NetappVolumeGroupOracle#application_identifier}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.groupDescription">group_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#group_description NetappVolumeGroupOracle#group_description}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#location NetappVolumeGroupOracle#location}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#name NetappVolumeGroupOracle#name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#resource_group_name NetappVolumeGroupOracle#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.volume">volume</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume">NetappVolumeGroupOracleVolume</a>]]</code> | volume block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#id NetappVolumeGroupOracle#id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts">NetappVolumeGroupOracleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.accountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#account_name NetappVolumeGroupOracle#account_name}.

---

##### `application_identifier`<sup>Required</sup> <a name="application_identifier" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.applicationIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#application_identifier NetappVolumeGroupOracle#application_identifier}.

---

##### `group_description`<sup>Required</sup> <a name="group_description" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.groupDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#group_description NetappVolumeGroupOracle#group_description}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#location NetappVolumeGroupOracle#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#name NetappVolumeGroupOracle#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#resource_group_name NetappVolumeGroupOracle#resource_group_name}.

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.volume"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume">NetappVolumeGroupOracleVolume</a>]]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#volume NetappVolumeGroupOracle#volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#id NetappVolumeGroupOracle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts">NetappVolumeGroupOracleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#timeouts NetappVolumeGroupOracle#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.putVolume">put_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#create NetappVolumeGroupOracle#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#delete NetappVolumeGroupOracle#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#read NetappVolumeGroupOracle#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#update NetappVolumeGroupOracle#update}.

---

##### `put_volume` <a name="put_volume" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.putVolume"></a>

```python
def put_volume(
  value: typing.Union[IResolvable, typing.List[NetappVolumeGroupOracleVolume]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.putVolume.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume">NetappVolumeGroupOracleVolume</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetappVolumeGroupOracle resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_oracle

netappVolumeGroupOracle.NetappVolumeGroupOracle.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_oracle

netappVolumeGroupOracle.NetappVolumeGroupOracle.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_oracle

netappVolumeGroupOracle.NetappVolumeGroupOracle.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_oracle

netappVolumeGroupOracle.NetappVolumeGroupOracle.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetappVolumeGroupOracle resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetappVolumeGroupOracle to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetappVolumeGroupOracle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetappVolumeGroupOracle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference">NetappVolumeGroupOracleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList">NetappVolumeGroupOracleVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.accountNameInput">account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.applicationIdentifierInput">application_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.groupDescriptionInput">group_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts">NetappVolumeGroupOracleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.volumeInput">volume_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume">NetappVolumeGroupOracleVolume</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.applicationIdentifier">application_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.groupDescription">group_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.timeouts"></a>

```python
timeouts: NetappVolumeGroupOracleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference">NetappVolumeGroupOracleTimeoutsOutputReference</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.volume"></a>

```python
volume: NetappVolumeGroupOracleVolumeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList">NetappVolumeGroupOracleVolumeList</a>

---

##### `account_name_input`<sup>Optional</sup> <a name="account_name_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.accountNameInput"></a>

```python
account_name_input: str
```

- *Type:* str

---

##### `application_identifier_input`<sup>Optional</sup> <a name="application_identifier_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.applicationIdentifierInput"></a>

```python
application_identifier_input: str
```

- *Type:* str

---

##### `group_description_input`<sup>Optional</sup> <a name="group_description_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.groupDescriptionInput"></a>

```python
group_description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetappVolumeGroupOracleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts">NetappVolumeGroupOracleTimeouts</a>]

---

##### `volume_input`<sup>Optional</sup> <a name="volume_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.volumeInput"></a>

```python
volume_input: typing.Union[IResolvable, typing.List[NetappVolumeGroupOracleVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume">NetappVolumeGroupOracleVolume</a>]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `application_identifier`<sup>Required</sup> <a name="application_identifier" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.applicationIdentifier"></a>

```python
application_identifier: str
```

- *Type:* str

---

##### `group_description`<sup>Required</sup> <a name="group_description" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.groupDescription"></a>

```python
group_description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeGroupOracleConfig <a name="NetappVolumeGroupOracleConfig" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_oracle

netappVolumeGroupOracle.NetappVolumeGroupOracleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_name: str,
  application_identifier: str,
  group_description: str,
  location: str,
  name: str,
  resource_group_name: str,
  volume: typing.Union[IResolvable, typing.List[NetappVolumeGroupOracleVolume]],
  id: str = None,
  timeouts: NetappVolumeGroupOracleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#account_name NetappVolumeGroupOracle#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.applicationIdentifier">application_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#application_identifier NetappVolumeGroupOracle#application_identifier}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.groupDescription">group_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#group_description NetappVolumeGroupOracle#group_description}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#location NetappVolumeGroupOracle#location}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#name NetappVolumeGroupOracle#name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#resource_group_name NetappVolumeGroupOracle#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.volume">volume</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume">NetappVolumeGroupOracleVolume</a>]]</code> | volume block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#id NetappVolumeGroupOracle#id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts">NetappVolumeGroupOracleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#account_name NetappVolumeGroupOracle#account_name}.

---

##### `application_identifier`<sup>Required</sup> <a name="application_identifier" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.applicationIdentifier"></a>

```python
application_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#application_identifier NetappVolumeGroupOracle#application_identifier}.

---

##### `group_description`<sup>Required</sup> <a name="group_description" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.groupDescription"></a>

```python
group_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#group_description NetappVolumeGroupOracle#group_description}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#location NetappVolumeGroupOracle#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#name NetappVolumeGroupOracle#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#resource_group_name NetappVolumeGroupOracle#resource_group_name}.

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.volume"></a>

```python
volume: typing.Union[IResolvable, typing.List[NetappVolumeGroupOracleVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume">NetappVolumeGroupOracleVolume</a>]]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#volume NetappVolumeGroupOracle#volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#id NetappVolumeGroupOracle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.timeouts"></a>

```python
timeouts: NetappVolumeGroupOracleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts">NetappVolumeGroupOracleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#timeouts NetappVolumeGroupOracle#timeouts}

---

### NetappVolumeGroupOracleTimeouts <a name="NetappVolumeGroupOracleTimeouts" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_oracle

netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#create NetappVolumeGroupOracle#create}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#delete NetappVolumeGroupOracle#delete}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#read NetappVolumeGroupOracle#read}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#update NetappVolumeGroupOracle#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#create NetappVolumeGroupOracle#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#delete NetappVolumeGroupOracle#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#read NetappVolumeGroupOracle#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#update NetappVolumeGroupOracle#update}.

---

### NetappVolumeGroupOracleVolume <a name="NetappVolumeGroupOracleVolume" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_oracle

netappVolumeGroupOracle.NetappVolumeGroupOracleVolume(
  capacity_pool_id: str,
  export_policy_rule: typing.Union[IResolvable, typing.List[NetappVolumeGroupOracleVolumeExportPolicyRule]],
  name: str,
  protocols: typing.List[str],
  security_style: str,
  service_level: str,
  snapshot_directory_visible: typing.Union[bool, IResolvable],
  storage_quota_in_gb: typing.Union[int, float],
  subnet_id: str,
  throughput_in_mibps: typing.Union[int, float],
  volume_path: str,
  volume_spec_name: str,
  data_protection_replication: NetappVolumeGroupOracleVolumeDataProtectionReplication = None,
  data_protection_snapshot_policy: NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy = None,
  encryption_key_source: str = None,
  key_vault_private_endpoint_id: str = None,
  network_features: str = None,
  proximity_placement_group_id: str = None,
  tags: typing.Mapping[str] = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.capacityPoolId">capacity_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#capacity_pool_id NetappVolumeGroupOracle#capacity_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.exportPolicyRule">export_policy_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule">NetappVolumeGroupOracleVolumeExportPolicyRule</a>]]</code> | export_policy_rule block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#name NetappVolumeGroupOracle#name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#protocols NetappVolumeGroupOracle#protocols}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.securityStyle">security_style</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#security_style NetappVolumeGroupOracle#security_style}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.serviceLevel">service_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#service_level NetappVolumeGroupOracle#service_level}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.snapshotDirectoryVisible">snapshot_directory_visible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#snapshot_directory_visible NetappVolumeGroupOracle#snapshot_directory_visible}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.storageQuotaInGb">storage_quota_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#storage_quota_in_gb NetappVolumeGroupOracle#storage_quota_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#subnet_id NetappVolumeGroupOracle#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.throughputInMibps">throughput_in_mibps</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#throughput_in_mibps NetappVolumeGroupOracle#throughput_in_mibps}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.volumePath">volume_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#volume_path NetappVolumeGroupOracle#volume_path}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.volumeSpecName">volume_spec_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#volume_spec_name NetappVolumeGroupOracle#volume_spec_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.dataProtectionReplication">data_protection_replication</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication">NetappVolumeGroupOracleVolumeDataProtectionReplication</a></code> | data_protection_replication block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.dataProtectionSnapshotPolicy">data_protection_snapshot_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy">NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy</a></code> | data_protection_snapshot_policy block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.encryptionKeySource">encryption_key_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#encryption_key_source NetappVolumeGroupOracle#encryption_key_source}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.keyVaultPrivateEndpointId">key_vault_private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#key_vault_private_endpoint_id NetappVolumeGroupOracle#key_vault_private_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.networkFeatures">network_features</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#network_features NetappVolumeGroupOracle#network_features}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.proximityPlacementGroupId">proximity_placement_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#proximity_placement_group_id NetappVolumeGroupOracle#proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#tags NetappVolumeGroupOracle#tags}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.zone">zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#zone NetappVolumeGroupOracle#zone}. |

---

##### `capacity_pool_id`<sup>Required</sup> <a name="capacity_pool_id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.capacityPoolId"></a>

```python
capacity_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#capacity_pool_id NetappVolumeGroupOracle#capacity_pool_id}.

---

##### `export_policy_rule`<sup>Required</sup> <a name="export_policy_rule" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.exportPolicyRule"></a>

```python
export_policy_rule: typing.Union[IResolvable, typing.List[NetappVolumeGroupOracleVolumeExportPolicyRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule">NetappVolumeGroupOracleVolumeExportPolicyRule</a>]]

export_policy_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#export_policy_rule NetappVolumeGroupOracle#export_policy_rule}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#name NetappVolumeGroupOracle#name}.

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#protocols NetappVolumeGroupOracle#protocols}.

---

##### `security_style`<sup>Required</sup> <a name="security_style" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.securityStyle"></a>

```python
security_style: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#security_style NetappVolumeGroupOracle#security_style}.

---

##### `service_level`<sup>Required</sup> <a name="service_level" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.serviceLevel"></a>

```python
service_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#service_level NetappVolumeGroupOracle#service_level}.

---

##### `snapshot_directory_visible`<sup>Required</sup> <a name="snapshot_directory_visible" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.snapshotDirectoryVisible"></a>

```python
snapshot_directory_visible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#snapshot_directory_visible NetappVolumeGroupOracle#snapshot_directory_visible}.

---

##### `storage_quota_in_gb`<sup>Required</sup> <a name="storage_quota_in_gb" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.storageQuotaInGb"></a>

```python
storage_quota_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#storage_quota_in_gb NetappVolumeGroupOracle#storage_quota_in_gb}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#subnet_id NetappVolumeGroupOracle#subnet_id}.

---

##### `throughput_in_mibps`<sup>Required</sup> <a name="throughput_in_mibps" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.throughputInMibps"></a>

```python
throughput_in_mibps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#throughput_in_mibps NetappVolumeGroupOracle#throughput_in_mibps}.

---

##### `volume_path`<sup>Required</sup> <a name="volume_path" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.volumePath"></a>

```python
volume_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#volume_path NetappVolumeGroupOracle#volume_path}.

---

##### `volume_spec_name`<sup>Required</sup> <a name="volume_spec_name" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.volumeSpecName"></a>

```python
volume_spec_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#volume_spec_name NetappVolumeGroupOracle#volume_spec_name}.

---

##### `data_protection_replication`<sup>Optional</sup> <a name="data_protection_replication" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.dataProtectionReplication"></a>

```python
data_protection_replication: NetappVolumeGroupOracleVolumeDataProtectionReplication
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication">NetappVolumeGroupOracleVolumeDataProtectionReplication</a>

data_protection_replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#data_protection_replication NetappVolumeGroupOracle#data_protection_replication}

---

##### `data_protection_snapshot_policy`<sup>Optional</sup> <a name="data_protection_snapshot_policy" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.dataProtectionSnapshotPolicy"></a>

```python
data_protection_snapshot_policy: NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy">NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy</a>

data_protection_snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#data_protection_snapshot_policy NetappVolumeGroupOracle#data_protection_snapshot_policy}

---

##### `encryption_key_source`<sup>Optional</sup> <a name="encryption_key_source" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.encryptionKeySource"></a>

```python
encryption_key_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#encryption_key_source NetappVolumeGroupOracle#encryption_key_source}.

---

##### `key_vault_private_endpoint_id`<sup>Optional</sup> <a name="key_vault_private_endpoint_id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.keyVaultPrivateEndpointId"></a>

```python
key_vault_private_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#key_vault_private_endpoint_id NetappVolumeGroupOracle#key_vault_private_endpoint_id}.

---

##### `network_features`<sup>Optional</sup> <a name="network_features" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.networkFeatures"></a>

```python
network_features: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#network_features NetappVolumeGroupOracle#network_features}.

---

##### `proximity_placement_group_id`<sup>Optional</sup> <a name="proximity_placement_group_id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.proximityPlacementGroupId"></a>

```python
proximity_placement_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#proximity_placement_group_id NetappVolumeGroupOracle#proximity_placement_group_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#tags NetappVolumeGroupOracle#tags}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.zone"></a>

```python
zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#zone NetappVolumeGroupOracle#zone}.

---

### NetappVolumeGroupOracleVolumeDataProtectionReplication <a name="NetappVolumeGroupOracleVolumeDataProtectionReplication" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_oracle

netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication(
  remote_volume_location: str,
  remote_volume_resource_id: str,
  replication_frequency: str,
  endpoint_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.property.remoteVolumeLocation">remote_volume_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#remote_volume_location NetappVolumeGroupOracle#remote_volume_location}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.property.remoteVolumeResourceId">remote_volume_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#remote_volume_resource_id NetappVolumeGroupOracle#remote_volume_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.property.replicationFrequency">replication_frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#replication_frequency NetappVolumeGroupOracle#replication_frequency}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.property.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#endpoint_type NetappVolumeGroupOracle#endpoint_type}. |

---

##### `remote_volume_location`<sup>Required</sup> <a name="remote_volume_location" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.property.remoteVolumeLocation"></a>

```python
remote_volume_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#remote_volume_location NetappVolumeGroupOracle#remote_volume_location}.

---

##### `remote_volume_resource_id`<sup>Required</sup> <a name="remote_volume_resource_id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.property.remoteVolumeResourceId"></a>

```python
remote_volume_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#remote_volume_resource_id NetappVolumeGroupOracle#remote_volume_resource_id}.

---

##### `replication_frequency`<sup>Required</sup> <a name="replication_frequency" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.property.replicationFrequency"></a>

```python
replication_frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#replication_frequency NetappVolumeGroupOracle#replication_frequency}.

---

##### `endpoint_type`<sup>Optional</sup> <a name="endpoint_type" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#endpoint_type NetappVolumeGroupOracle#endpoint_type}.

---

### NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy <a name="NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_oracle

netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy(
  snapshot_policy_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy.property.snapshotPolicyId">snapshot_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#snapshot_policy_id NetappVolumeGroupOracle#snapshot_policy_id}. |

---

##### `snapshot_policy_id`<sup>Required</sup> <a name="snapshot_policy_id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy.property.snapshotPolicyId"></a>

```python
snapshot_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#snapshot_policy_id NetappVolumeGroupOracle#snapshot_policy_id}.

---

### NetappVolumeGroupOracleVolumeExportPolicyRule <a name="NetappVolumeGroupOracleVolumeExportPolicyRule" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_oracle

netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule(
  allowed_clients: str,
  nfsv3_enabled: typing.Union[bool, IResolvable],
  nfsv41_enabled: typing.Union[bool, IResolvable],
  rule_index: typing.Union[int, float],
  root_access_enabled: typing.Union[bool, IResolvable] = None,
  unix_read_only: typing.Union[bool, IResolvable] = None,
  unix_read_write: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.allowedClients">allowed_clients</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#allowed_clients NetappVolumeGroupOracle#allowed_clients}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.nfsv3Enabled">nfsv3_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#nfsv3_enabled NetappVolumeGroupOracle#nfsv3_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.nfsv41Enabled">nfsv41_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#nfsv41_enabled NetappVolumeGroupOracle#nfsv41_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.ruleIndex">rule_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#rule_index NetappVolumeGroupOracle#rule_index}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.rootAccessEnabled">root_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#root_access_enabled NetappVolumeGroupOracle#root_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.unixReadOnly">unix_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#unix_read_only NetappVolumeGroupOracle#unix_read_only}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.unixReadWrite">unix_read_write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#unix_read_write NetappVolumeGroupOracle#unix_read_write}. |

---

##### `allowed_clients`<sup>Required</sup> <a name="allowed_clients" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.allowedClients"></a>

```python
allowed_clients: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#allowed_clients NetappVolumeGroupOracle#allowed_clients}.

---

##### `nfsv3_enabled`<sup>Required</sup> <a name="nfsv3_enabled" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.nfsv3Enabled"></a>

```python
nfsv3_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#nfsv3_enabled NetappVolumeGroupOracle#nfsv3_enabled}.

---

##### `nfsv41_enabled`<sup>Required</sup> <a name="nfsv41_enabled" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.nfsv41Enabled"></a>

```python
nfsv41_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#nfsv41_enabled NetappVolumeGroupOracle#nfsv41_enabled}.

---

##### `rule_index`<sup>Required</sup> <a name="rule_index" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.ruleIndex"></a>

```python
rule_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#rule_index NetappVolumeGroupOracle#rule_index}.

---

##### `root_access_enabled`<sup>Optional</sup> <a name="root_access_enabled" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.rootAccessEnabled"></a>

```python
root_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#root_access_enabled NetappVolumeGroupOracle#root_access_enabled}.

---

##### `unix_read_only`<sup>Optional</sup> <a name="unix_read_only" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.unixReadOnly"></a>

```python
unix_read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#unix_read_only NetappVolumeGroupOracle#unix_read_only}.

---

##### `unix_read_write`<sup>Optional</sup> <a name="unix_read_write" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.unixReadWrite"></a>

```python
unix_read_write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#unix_read_write NetappVolumeGroupOracle#unix_read_write}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeGroupOracleTimeoutsOutputReference <a name="NetappVolumeGroupOracleTimeoutsOutputReference" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_oracle

netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts">NetappVolumeGroupOracleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetappVolumeGroupOracleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts">NetappVolumeGroupOracleTimeouts</a>]

---


### NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference <a name="NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_oracle

netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.resetEndpointType">reset_endpoint_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_endpoint_type` <a name="reset_endpoint_type" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.resetEndpointType"></a>

```python
def reset_endpoint_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.endpointTypeInput">endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocationInput">remote_volume_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceIdInput">remote_volume_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.replicationFrequencyInput">replication_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocation">remote_volume_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceId">remote_volume_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.replicationFrequency">replication_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication">NetappVolumeGroupOracleVolumeDataProtectionReplication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_type_input`<sup>Optional</sup> <a name="endpoint_type_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.endpointTypeInput"></a>

```python
endpoint_type_input: str
```

- *Type:* str

---

##### `remote_volume_location_input`<sup>Optional</sup> <a name="remote_volume_location_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocationInput"></a>

```python
remote_volume_location_input: str
```

- *Type:* str

---

##### `remote_volume_resource_id_input`<sup>Optional</sup> <a name="remote_volume_resource_id_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceIdInput"></a>

```python
remote_volume_resource_id_input: str
```

- *Type:* str

---

##### `replication_frequency_input`<sup>Optional</sup> <a name="replication_frequency_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.replicationFrequencyInput"></a>

```python
replication_frequency_input: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `remote_volume_location`<sup>Required</sup> <a name="remote_volume_location" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocation"></a>

```python
remote_volume_location: str
```

- *Type:* str

---

##### `remote_volume_resource_id`<sup>Required</sup> <a name="remote_volume_resource_id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceId"></a>

```python
remote_volume_resource_id: str
```

- *Type:* str

---

##### `replication_frequency`<sup>Required</sup> <a name="replication_frequency" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.replicationFrequency"></a>

```python
replication_frequency: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.internalValue"></a>

```python
internal_value: NetappVolumeGroupOracleVolumeDataProtectionReplication
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication">NetappVolumeGroupOracleVolumeDataProtectionReplication</a>

---


### NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference <a name="NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_oracle

netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyIdInput">snapshot_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyId">snapshot_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy">NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `snapshot_policy_id_input`<sup>Optional</sup> <a name="snapshot_policy_id_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyIdInput"></a>

```python
snapshot_policy_id_input: str
```

- *Type:* str

---

##### `snapshot_policy_id`<sup>Required</sup> <a name="snapshot_policy_id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyId"></a>

```python
snapshot_policy_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.internalValue"></a>

```python
internal_value: NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy">NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy</a>

---


### NetappVolumeGroupOracleVolumeExportPolicyRuleList <a name="NetappVolumeGroupOracleVolumeExportPolicyRuleList" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_oracle

netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule">NetappVolumeGroupOracleVolumeExportPolicyRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetappVolumeGroupOracleVolumeExportPolicyRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule">NetappVolumeGroupOracleVolumeExportPolicyRule</a>]]

---


### NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference <a name="NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_oracle

netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resetRootAccessEnabled">reset_root_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resetUnixReadOnly">reset_unix_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resetUnixReadWrite">reset_unix_read_write</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_root_access_enabled` <a name="reset_root_access_enabled" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resetRootAccessEnabled"></a>

```python
def reset_root_access_enabled() -> None
```

##### `reset_unix_read_only` <a name="reset_unix_read_only" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resetUnixReadOnly"></a>

```python
def reset_unix_read_only() -> None
```

##### `reset_unix_read_write` <a name="reset_unix_read_write" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resetUnixReadWrite"></a>

```python
def reset_unix_read_write() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.allowedClientsInput">allowed_clients_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv3EnabledInput">nfsv3_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv41EnabledInput">nfsv41_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.rootAccessEnabledInput">root_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.ruleIndexInput">rule_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadOnlyInput">unix_read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadWriteInput">unix_read_write_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.allowedClients">allowed_clients</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv3Enabled">nfsv3_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv41Enabled">nfsv41_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.rootAccessEnabled">root_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.ruleIndex">rule_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadOnly">unix_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadWrite">unix_read_write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule">NetappVolumeGroupOracleVolumeExportPolicyRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_clients_input`<sup>Optional</sup> <a name="allowed_clients_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.allowedClientsInput"></a>

```python
allowed_clients_input: str
```

- *Type:* str

---

##### `nfsv3_enabled_input`<sup>Optional</sup> <a name="nfsv3_enabled_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv3EnabledInput"></a>

```python
nfsv3_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nfsv41_enabled_input`<sup>Optional</sup> <a name="nfsv41_enabled_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv41EnabledInput"></a>

```python
nfsv41_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `root_access_enabled_input`<sup>Optional</sup> <a name="root_access_enabled_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.rootAccessEnabledInput"></a>

```python
root_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rule_index_input`<sup>Optional</sup> <a name="rule_index_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.ruleIndexInput"></a>

```python
rule_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unix_read_only_input`<sup>Optional</sup> <a name="unix_read_only_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadOnlyInput"></a>

```python
unix_read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unix_read_write_input`<sup>Optional</sup> <a name="unix_read_write_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadWriteInput"></a>

```python
unix_read_write_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_clients`<sup>Required</sup> <a name="allowed_clients" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.allowedClients"></a>

```python
allowed_clients: str
```

- *Type:* str

---

##### `nfsv3_enabled`<sup>Required</sup> <a name="nfsv3_enabled" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv3Enabled"></a>

```python
nfsv3_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nfsv41_enabled`<sup>Required</sup> <a name="nfsv41_enabled" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv41Enabled"></a>

```python
nfsv41_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `root_access_enabled`<sup>Required</sup> <a name="root_access_enabled" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.rootAccessEnabled"></a>

```python
root_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rule_index`<sup>Required</sup> <a name="rule_index" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.ruleIndex"></a>

```python
rule_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unix_read_only`<sup>Required</sup> <a name="unix_read_only" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadOnly"></a>

```python
unix_read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unix_read_write`<sup>Required</sup> <a name="unix_read_write" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadWrite"></a>

```python
unix_read_write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetappVolumeGroupOracleVolumeExportPolicyRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule">NetappVolumeGroupOracleVolumeExportPolicyRule</a>]

---


### NetappVolumeGroupOracleVolumeList <a name="NetappVolumeGroupOracleVolumeList" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_oracle

netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetappVolumeGroupOracleVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume">NetappVolumeGroupOracleVolume</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetappVolumeGroupOracleVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume">NetappVolumeGroupOracleVolume</a>]]

---


### NetappVolumeGroupOracleVolumeOutputReference <a name="NetappVolumeGroupOracleVolumeOutputReference" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_oracle

netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putDataProtectionReplication">put_data_protection_replication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putDataProtectionSnapshotPolicy">put_data_protection_snapshot_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putExportPolicyRule">put_export_policy_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetDataProtectionReplication">reset_data_protection_replication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetDataProtectionSnapshotPolicy">reset_data_protection_snapshot_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetEncryptionKeySource">reset_encryption_key_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetKeyVaultPrivateEndpointId">reset_key_vault_private_endpoint_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetNetworkFeatures">reset_network_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetProximityPlacementGroupId">reset_proximity_placement_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetZone">reset_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_protection_replication` <a name="put_data_protection_replication" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putDataProtectionReplication"></a>

```python
def put_data_protection_replication(
  remote_volume_location: str,
  remote_volume_resource_id: str,
  replication_frequency: str,
  endpoint_type: str = None
) -> None
```

###### `remote_volume_location`<sup>Required</sup> <a name="remote_volume_location" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putDataProtectionReplication.parameter.remoteVolumeLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#remote_volume_location NetappVolumeGroupOracle#remote_volume_location}.

---

###### `remote_volume_resource_id`<sup>Required</sup> <a name="remote_volume_resource_id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putDataProtectionReplication.parameter.remoteVolumeResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#remote_volume_resource_id NetappVolumeGroupOracle#remote_volume_resource_id}.

---

###### `replication_frequency`<sup>Required</sup> <a name="replication_frequency" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putDataProtectionReplication.parameter.replicationFrequency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#replication_frequency NetappVolumeGroupOracle#replication_frequency}.

---

###### `endpoint_type`<sup>Optional</sup> <a name="endpoint_type" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putDataProtectionReplication.parameter.endpointType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#endpoint_type NetappVolumeGroupOracle#endpoint_type}.

---

##### `put_data_protection_snapshot_policy` <a name="put_data_protection_snapshot_policy" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putDataProtectionSnapshotPolicy"></a>

```python
def put_data_protection_snapshot_policy(
  snapshot_policy_id: str
) -> None
```

###### `snapshot_policy_id`<sup>Required</sup> <a name="snapshot_policy_id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putDataProtectionSnapshotPolicy.parameter.snapshotPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/netapp_volume_group_oracle#snapshot_policy_id NetappVolumeGroupOracle#snapshot_policy_id}.

---

##### `put_export_policy_rule` <a name="put_export_policy_rule" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putExportPolicyRule"></a>

```python
def put_export_policy_rule(
  value: typing.Union[IResolvable, typing.List[NetappVolumeGroupOracleVolumeExportPolicyRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putExportPolicyRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule">NetappVolumeGroupOracleVolumeExportPolicyRule</a>]]

---

##### `reset_data_protection_replication` <a name="reset_data_protection_replication" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetDataProtectionReplication"></a>

```python
def reset_data_protection_replication() -> None
```

##### `reset_data_protection_snapshot_policy` <a name="reset_data_protection_snapshot_policy" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetDataProtectionSnapshotPolicy"></a>

```python
def reset_data_protection_snapshot_policy() -> None
```

##### `reset_encryption_key_source` <a name="reset_encryption_key_source" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetEncryptionKeySource"></a>

```python
def reset_encryption_key_source() -> None
```

##### `reset_key_vault_private_endpoint_id` <a name="reset_key_vault_private_endpoint_id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetKeyVaultPrivateEndpointId"></a>

```python
def reset_key_vault_private_endpoint_id() -> None
```

##### `reset_network_features` <a name="reset_network_features" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetNetworkFeatures"></a>

```python
def reset_network_features() -> None
```

##### `reset_proximity_placement_group_id` <a name="reset_proximity_placement_group_id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetProximityPlacementGroupId"></a>

```python
def reset_proximity_placement_group_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetZone"></a>

```python
def reset_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionReplication">data_protection_replication</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference">NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionSnapshotPolicy">data_protection_snapshot_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference">NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.exportPolicyRule">export_policy_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList">NetappVolumeGroupOracleVolumeExportPolicyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.mountIpAddresses">mount_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.capacityPoolIdInput">capacity_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionReplicationInput">data_protection_replication_input</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication">NetappVolumeGroupOracleVolumeDataProtectionReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionSnapshotPolicyInput">data_protection_snapshot_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy">NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.encryptionKeySourceInput">encryption_key_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.exportPolicyRuleInput">export_policy_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule">NetappVolumeGroupOracleVolumeExportPolicyRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.keyVaultPrivateEndpointIdInput">key_vault_private_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.networkFeaturesInput">network_features_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.protocolsInput">protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.proximityPlacementGroupIdInput">proximity_placement_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.securityStyleInput">security_style_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.serviceLevelInput">service_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.snapshotDirectoryVisibleInput">snapshot_directory_visible_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.storageQuotaInGbInput">storage_quota_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.throughputInMibpsInput">throughput_in_mibps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.volumePathInput">volume_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.volumeSpecNameInput">volume_spec_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.capacityPoolId">capacity_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.encryptionKeySource">encryption_key_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.keyVaultPrivateEndpointId">key_vault_private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.networkFeatures">network_features</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.proximityPlacementGroupId">proximity_placement_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.securityStyle">security_style</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.serviceLevel">service_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.snapshotDirectoryVisible">snapshot_directory_visible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.storageQuotaInGb">storage_quota_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.throughputInMibps">throughput_in_mibps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.volumePath">volume_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.volumeSpecName">volume_spec_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume">NetappVolumeGroupOracleVolume</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_protection_replication`<sup>Required</sup> <a name="data_protection_replication" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionReplication"></a>

```python
data_protection_replication: NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference">NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference</a>

---

##### `data_protection_snapshot_policy`<sup>Required</sup> <a name="data_protection_snapshot_policy" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionSnapshotPolicy"></a>

```python
data_protection_snapshot_policy: NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference">NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference</a>

---

##### `export_policy_rule`<sup>Required</sup> <a name="export_policy_rule" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.exportPolicyRule"></a>

```python
export_policy_rule: NetappVolumeGroupOracleVolumeExportPolicyRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList">NetappVolumeGroupOracleVolumeExportPolicyRuleList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mount_ip_addresses`<sup>Required</sup> <a name="mount_ip_addresses" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.mountIpAddresses"></a>

```python
mount_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `capacity_pool_id_input`<sup>Optional</sup> <a name="capacity_pool_id_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.capacityPoolIdInput"></a>

```python
capacity_pool_id_input: str
```

- *Type:* str

---

##### `data_protection_replication_input`<sup>Optional</sup> <a name="data_protection_replication_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionReplicationInput"></a>

```python
data_protection_replication_input: NetappVolumeGroupOracleVolumeDataProtectionReplication
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication">NetappVolumeGroupOracleVolumeDataProtectionReplication</a>

---

##### `data_protection_snapshot_policy_input`<sup>Optional</sup> <a name="data_protection_snapshot_policy_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionSnapshotPolicyInput"></a>

```python
data_protection_snapshot_policy_input: NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy">NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy</a>

---

##### `encryption_key_source_input`<sup>Optional</sup> <a name="encryption_key_source_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.encryptionKeySourceInput"></a>

```python
encryption_key_source_input: str
```

- *Type:* str

---

##### `export_policy_rule_input`<sup>Optional</sup> <a name="export_policy_rule_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.exportPolicyRuleInput"></a>

```python
export_policy_rule_input: typing.Union[IResolvable, typing.List[NetappVolumeGroupOracleVolumeExportPolicyRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule">NetappVolumeGroupOracleVolumeExportPolicyRule</a>]]

---

##### `key_vault_private_endpoint_id_input`<sup>Optional</sup> <a name="key_vault_private_endpoint_id_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.keyVaultPrivateEndpointIdInput"></a>

```python
key_vault_private_endpoint_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_features_input`<sup>Optional</sup> <a name="network_features_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.networkFeaturesInput"></a>

```python
network_features_input: str
```

- *Type:* str

---

##### `protocols_input`<sup>Optional</sup> <a name="protocols_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.protocolsInput"></a>

```python
protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `proximity_placement_group_id_input`<sup>Optional</sup> <a name="proximity_placement_group_id_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.proximityPlacementGroupIdInput"></a>

```python
proximity_placement_group_id_input: str
```

- *Type:* str

---

##### `security_style_input`<sup>Optional</sup> <a name="security_style_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.securityStyleInput"></a>

```python
security_style_input: str
```

- *Type:* str

---

##### `service_level_input`<sup>Optional</sup> <a name="service_level_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.serviceLevelInput"></a>

```python
service_level_input: str
```

- *Type:* str

---

##### `snapshot_directory_visible_input`<sup>Optional</sup> <a name="snapshot_directory_visible_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.snapshotDirectoryVisibleInput"></a>

```python
snapshot_directory_visible_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_quota_in_gb_input`<sup>Optional</sup> <a name="storage_quota_in_gb_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.storageQuotaInGbInput"></a>

```python
storage_quota_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `throughput_in_mibps_input`<sup>Optional</sup> <a name="throughput_in_mibps_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.throughputInMibpsInput"></a>

```python
throughput_in_mibps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_path_input`<sup>Optional</sup> <a name="volume_path_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.volumePathInput"></a>

```python
volume_path_input: str
```

- *Type:* str

---

##### `volume_spec_name_input`<sup>Optional</sup> <a name="volume_spec_name_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.volumeSpecNameInput"></a>

```python
volume_spec_name_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `capacity_pool_id`<sup>Required</sup> <a name="capacity_pool_id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.capacityPoolId"></a>

```python
capacity_pool_id: str
```

- *Type:* str

---

##### `encryption_key_source`<sup>Required</sup> <a name="encryption_key_source" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.encryptionKeySource"></a>

```python
encryption_key_source: str
```

- *Type:* str

---

##### `key_vault_private_endpoint_id`<sup>Required</sup> <a name="key_vault_private_endpoint_id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.keyVaultPrivateEndpointId"></a>

```python
key_vault_private_endpoint_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_features`<sup>Required</sup> <a name="network_features" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.networkFeatures"></a>

```python
network_features: str
```

- *Type:* str

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `proximity_placement_group_id`<sup>Required</sup> <a name="proximity_placement_group_id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.proximityPlacementGroupId"></a>

```python
proximity_placement_group_id: str
```

- *Type:* str

---

##### `security_style`<sup>Required</sup> <a name="security_style" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.securityStyle"></a>

```python
security_style: str
```

- *Type:* str

---

##### `service_level`<sup>Required</sup> <a name="service_level" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.serviceLevel"></a>

```python
service_level: str
```

- *Type:* str

---

##### `snapshot_directory_visible`<sup>Required</sup> <a name="snapshot_directory_visible" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.snapshotDirectoryVisible"></a>

```python
snapshot_directory_visible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_quota_in_gb`<sup>Required</sup> <a name="storage_quota_in_gb" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.storageQuotaInGb"></a>

```python
storage_quota_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `throughput_in_mibps`<sup>Required</sup> <a name="throughput_in_mibps" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.throughputInMibps"></a>

```python
throughput_in_mibps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_path`<sup>Required</sup> <a name="volume_path" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.volumePath"></a>

```python
volume_path: str
```

- *Type:* str

---

##### `volume_spec_name`<sup>Required</sup> <a name="volume_spec_name" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.volumeSpecName"></a>

```python
volume_spec_name: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetappVolumeGroupOracleVolume]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume">NetappVolumeGroupOracleVolume</a>]

---



