# `netappVolumeGroupSapHana` Submodule <a name="`netappVolumeGroupSapHana` Submodule" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolumeGroupSapHana <a name="NetappVolumeGroupSapHana" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana azurerm_netapp_volume_group_sap_hana}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_sap_hana

netappVolumeGroupSapHana.NetappVolumeGroupSapHana(
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
  volume: typing.Union[IResolvable, typing.List[NetappVolumeGroupSapHanaVolume]],
  id: str = None,
  timeouts: NetappVolumeGroupSapHanaTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#account_name NetappVolumeGroupSapHana#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.applicationIdentifier">application_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#application_identifier NetappVolumeGroupSapHana#application_identifier}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.groupDescription">group_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#group_description NetappVolumeGroupSapHana#group_description}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#location NetappVolumeGroupSapHana#location}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#name NetappVolumeGroupSapHana#name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#resource_group_name NetappVolumeGroupSapHana#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.volume">volume</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume">NetappVolumeGroupSapHanaVolume</a>]]</code> | volume block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#id NetappVolumeGroupSapHana#id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeouts">NetappVolumeGroupSapHanaTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.accountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#account_name NetappVolumeGroupSapHana#account_name}.

---

##### `application_identifier`<sup>Required</sup> <a name="application_identifier" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.applicationIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#application_identifier NetappVolumeGroupSapHana#application_identifier}.

---

##### `group_description`<sup>Required</sup> <a name="group_description" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.groupDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#group_description NetappVolumeGroupSapHana#group_description}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#location NetappVolumeGroupSapHana#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#name NetappVolumeGroupSapHana#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#resource_group_name NetappVolumeGroupSapHana#resource_group_name}.

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.volume"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume">NetappVolumeGroupSapHanaVolume</a>]]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#volume NetappVolumeGroupSapHana#volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#id NetappVolumeGroupSapHana#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeouts">NetappVolumeGroupSapHanaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#timeouts NetappVolumeGroupSapHana#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.putVolume">put_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#create NetappVolumeGroupSapHana#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#delete NetappVolumeGroupSapHana#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#read NetappVolumeGroupSapHana#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#update NetappVolumeGroupSapHana#update}.

---

##### `put_volume` <a name="put_volume" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.putVolume"></a>

```python
def put_volume(
  value: typing.Union[IResolvable, typing.List[NetappVolumeGroupSapHanaVolume]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.putVolume.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume">NetappVolumeGroupSapHanaVolume</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetappVolumeGroupSapHana resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_sap_hana

netappVolumeGroupSapHana.NetappVolumeGroupSapHana.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_sap_hana

netappVolumeGroupSapHana.NetappVolumeGroupSapHana.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_sap_hana

netappVolumeGroupSapHana.NetappVolumeGroupSapHana.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_sap_hana

netappVolumeGroupSapHana.NetappVolumeGroupSapHana.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetappVolumeGroupSapHana resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetappVolumeGroupSapHana to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetappVolumeGroupSapHana that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetappVolumeGroupSapHana to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference">NetappVolumeGroupSapHanaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList">NetappVolumeGroupSapHanaVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.accountNameInput">account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.applicationIdentifierInput">application_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.groupDescriptionInput">group_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeouts">NetappVolumeGroupSapHanaTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.volumeInput">volume_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume">NetappVolumeGroupSapHanaVolume</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.applicationIdentifier">application_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.groupDescription">group_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.timeouts"></a>

```python
timeouts: NetappVolumeGroupSapHanaTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference">NetappVolumeGroupSapHanaTimeoutsOutputReference</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.volume"></a>

```python
volume: NetappVolumeGroupSapHanaVolumeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList">NetappVolumeGroupSapHanaVolumeList</a>

---

##### `account_name_input`<sup>Optional</sup> <a name="account_name_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.accountNameInput"></a>

```python
account_name_input: str
```

- *Type:* str

---

##### `application_identifier_input`<sup>Optional</sup> <a name="application_identifier_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.applicationIdentifierInput"></a>

```python
application_identifier_input: str
```

- *Type:* str

---

##### `group_description_input`<sup>Optional</sup> <a name="group_description_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.groupDescriptionInput"></a>

```python
group_description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetappVolumeGroupSapHanaTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeouts">NetappVolumeGroupSapHanaTimeouts</a>]

---

##### `volume_input`<sup>Optional</sup> <a name="volume_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.volumeInput"></a>

```python
volume_input: typing.Union[IResolvable, typing.List[NetappVolumeGroupSapHanaVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume">NetappVolumeGroupSapHanaVolume</a>]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `application_identifier`<sup>Required</sup> <a name="application_identifier" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.applicationIdentifier"></a>

```python
application_identifier: str
```

- *Type:* str

---

##### `group_description`<sup>Required</sup> <a name="group_description" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.groupDescription"></a>

```python
group_description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHana.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeGroupSapHanaConfig <a name="NetappVolumeGroupSapHanaConfig" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_sap_hana

netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig(
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
  volume: typing.Union[IResolvable, typing.List[NetappVolumeGroupSapHanaVolume]],
  id: str = None,
  timeouts: NetappVolumeGroupSapHanaTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#account_name NetappVolumeGroupSapHana#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.applicationIdentifier">application_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#application_identifier NetappVolumeGroupSapHana#application_identifier}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.groupDescription">group_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#group_description NetappVolumeGroupSapHana#group_description}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#location NetappVolumeGroupSapHana#location}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#name NetappVolumeGroupSapHana#name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#resource_group_name NetappVolumeGroupSapHana#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.volume">volume</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume">NetappVolumeGroupSapHanaVolume</a>]]</code> | volume block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#id NetappVolumeGroupSapHana#id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeouts">NetappVolumeGroupSapHanaTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#account_name NetappVolumeGroupSapHana#account_name}.

---

##### `application_identifier`<sup>Required</sup> <a name="application_identifier" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.applicationIdentifier"></a>

```python
application_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#application_identifier NetappVolumeGroupSapHana#application_identifier}.

---

##### `group_description`<sup>Required</sup> <a name="group_description" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.groupDescription"></a>

```python
group_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#group_description NetappVolumeGroupSapHana#group_description}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#location NetappVolumeGroupSapHana#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#name NetappVolumeGroupSapHana#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#resource_group_name NetappVolumeGroupSapHana#resource_group_name}.

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.volume"></a>

```python
volume: typing.Union[IResolvable, typing.List[NetappVolumeGroupSapHanaVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume">NetappVolumeGroupSapHanaVolume</a>]]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#volume NetappVolumeGroupSapHana#volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#id NetappVolumeGroupSapHana#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaConfig.property.timeouts"></a>

```python
timeouts: NetappVolumeGroupSapHanaTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeouts">NetappVolumeGroupSapHanaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#timeouts NetappVolumeGroupSapHana#timeouts}

---

### NetappVolumeGroupSapHanaTimeouts <a name="NetappVolumeGroupSapHanaTimeouts" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_sap_hana

netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#create NetappVolumeGroupSapHana#create}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#delete NetappVolumeGroupSapHana#delete}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#read NetappVolumeGroupSapHana#read}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#update NetappVolumeGroupSapHana#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#create NetappVolumeGroupSapHana#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#delete NetappVolumeGroupSapHana#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#read NetappVolumeGroupSapHana#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#update NetappVolumeGroupSapHana#update}.

---

### NetappVolumeGroupSapHanaVolume <a name="NetappVolumeGroupSapHanaVolume" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_sap_hana

netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume(
  capacity_pool_id: str,
  export_policy_rule: typing.Union[IResolvable, typing.List[NetappVolumeGroupSapHanaVolumeExportPolicyRule]],
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
  data_protection_replication: NetappVolumeGroupSapHanaVolumeDataProtectionReplication = None,
  data_protection_snapshot_policy: NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy = None,
  proximity_placement_group_id: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.capacityPoolId">capacity_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#capacity_pool_id NetappVolumeGroupSapHana#capacity_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.exportPolicyRule">export_policy_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRule">NetappVolumeGroupSapHanaVolumeExportPolicyRule</a>]]</code> | export_policy_rule block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#name NetappVolumeGroupSapHana#name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#protocols NetappVolumeGroupSapHana#protocols}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.securityStyle">security_style</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#security_style NetappVolumeGroupSapHana#security_style}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.serviceLevel">service_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#service_level NetappVolumeGroupSapHana#service_level}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.snapshotDirectoryVisible">snapshot_directory_visible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#snapshot_directory_visible NetappVolumeGroupSapHana#snapshot_directory_visible}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.storageQuotaInGb">storage_quota_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#storage_quota_in_gb NetappVolumeGroupSapHana#storage_quota_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#subnet_id NetappVolumeGroupSapHana#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.throughputInMibps">throughput_in_mibps</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#throughput_in_mibps NetappVolumeGroupSapHana#throughput_in_mibps}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.volumePath">volume_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#volume_path NetappVolumeGroupSapHana#volume_path}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.volumeSpecName">volume_spec_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#volume_spec_name NetappVolumeGroupSapHana#volume_spec_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.dataProtectionReplication">data_protection_replication</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplication">NetappVolumeGroupSapHanaVolumeDataProtectionReplication</a></code> | data_protection_replication block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.dataProtectionSnapshotPolicy">data_protection_snapshot_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy">NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy</a></code> | data_protection_snapshot_policy block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.proximityPlacementGroupId">proximity_placement_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#proximity_placement_group_id NetappVolumeGroupSapHana#proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#tags NetappVolumeGroupSapHana#tags}. |

---

##### `capacity_pool_id`<sup>Required</sup> <a name="capacity_pool_id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.capacityPoolId"></a>

```python
capacity_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#capacity_pool_id NetappVolumeGroupSapHana#capacity_pool_id}.

---

##### `export_policy_rule`<sup>Required</sup> <a name="export_policy_rule" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.exportPolicyRule"></a>

```python
export_policy_rule: typing.Union[IResolvable, typing.List[NetappVolumeGroupSapHanaVolumeExportPolicyRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRule">NetappVolumeGroupSapHanaVolumeExportPolicyRule</a>]]

export_policy_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#export_policy_rule NetappVolumeGroupSapHana#export_policy_rule}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#name NetappVolumeGroupSapHana#name}.

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#protocols NetappVolumeGroupSapHana#protocols}.

---

##### `security_style`<sup>Required</sup> <a name="security_style" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.securityStyle"></a>

```python
security_style: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#security_style NetappVolumeGroupSapHana#security_style}.

---

##### `service_level`<sup>Required</sup> <a name="service_level" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.serviceLevel"></a>

```python
service_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#service_level NetappVolumeGroupSapHana#service_level}.

---

##### `snapshot_directory_visible`<sup>Required</sup> <a name="snapshot_directory_visible" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.snapshotDirectoryVisible"></a>

```python
snapshot_directory_visible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#snapshot_directory_visible NetappVolumeGroupSapHana#snapshot_directory_visible}.

---

##### `storage_quota_in_gb`<sup>Required</sup> <a name="storage_quota_in_gb" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.storageQuotaInGb"></a>

```python
storage_quota_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#storage_quota_in_gb NetappVolumeGroupSapHana#storage_quota_in_gb}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#subnet_id NetappVolumeGroupSapHana#subnet_id}.

---

##### `throughput_in_mibps`<sup>Required</sup> <a name="throughput_in_mibps" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.throughputInMibps"></a>

```python
throughput_in_mibps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#throughput_in_mibps NetappVolumeGroupSapHana#throughput_in_mibps}.

---

##### `volume_path`<sup>Required</sup> <a name="volume_path" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.volumePath"></a>

```python
volume_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#volume_path NetappVolumeGroupSapHana#volume_path}.

---

##### `volume_spec_name`<sup>Required</sup> <a name="volume_spec_name" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.volumeSpecName"></a>

```python
volume_spec_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#volume_spec_name NetappVolumeGroupSapHana#volume_spec_name}.

---

##### `data_protection_replication`<sup>Optional</sup> <a name="data_protection_replication" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.dataProtectionReplication"></a>

```python
data_protection_replication: NetappVolumeGroupSapHanaVolumeDataProtectionReplication
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplication">NetappVolumeGroupSapHanaVolumeDataProtectionReplication</a>

data_protection_replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#data_protection_replication NetappVolumeGroupSapHana#data_protection_replication}

---

##### `data_protection_snapshot_policy`<sup>Optional</sup> <a name="data_protection_snapshot_policy" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.dataProtectionSnapshotPolicy"></a>

```python
data_protection_snapshot_policy: NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy">NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy</a>

data_protection_snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#data_protection_snapshot_policy NetappVolumeGroupSapHana#data_protection_snapshot_policy}

---

##### `proximity_placement_group_id`<sup>Optional</sup> <a name="proximity_placement_group_id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.proximityPlacementGroupId"></a>

```python
proximity_placement_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#proximity_placement_group_id NetappVolumeGroupSapHana#proximity_placement_group_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#tags NetappVolumeGroupSapHana#tags}.

---

### NetappVolumeGroupSapHanaVolumeDataProtectionReplication <a name="NetappVolumeGroupSapHanaVolumeDataProtectionReplication" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplication.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_sap_hana

netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplication(
  remote_volume_location: str,
  remote_volume_resource_id: str,
  replication_frequency: str,
  endpoint_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplication.property.remoteVolumeLocation">remote_volume_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#remote_volume_location NetappVolumeGroupSapHana#remote_volume_location}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplication.property.remoteVolumeResourceId">remote_volume_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#remote_volume_resource_id NetappVolumeGroupSapHana#remote_volume_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplication.property.replicationFrequency">replication_frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#replication_frequency NetappVolumeGroupSapHana#replication_frequency}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplication.property.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#endpoint_type NetappVolumeGroupSapHana#endpoint_type}. |

---

##### `remote_volume_location`<sup>Required</sup> <a name="remote_volume_location" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplication.property.remoteVolumeLocation"></a>

```python
remote_volume_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#remote_volume_location NetappVolumeGroupSapHana#remote_volume_location}.

---

##### `remote_volume_resource_id`<sup>Required</sup> <a name="remote_volume_resource_id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplication.property.remoteVolumeResourceId"></a>

```python
remote_volume_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#remote_volume_resource_id NetappVolumeGroupSapHana#remote_volume_resource_id}.

---

##### `replication_frequency`<sup>Required</sup> <a name="replication_frequency" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplication.property.replicationFrequency"></a>

```python
replication_frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#replication_frequency NetappVolumeGroupSapHana#replication_frequency}.

---

##### `endpoint_type`<sup>Optional</sup> <a name="endpoint_type" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplication.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#endpoint_type NetappVolumeGroupSapHana#endpoint_type}.

---

### NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy <a name="NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_sap_hana

netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy(
  snapshot_policy_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy.property.snapshotPolicyId">snapshot_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#snapshot_policy_id NetappVolumeGroupSapHana#snapshot_policy_id}. |

---

##### `snapshot_policy_id`<sup>Required</sup> <a name="snapshot_policy_id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy.property.snapshotPolicyId"></a>

```python
snapshot_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#snapshot_policy_id NetappVolumeGroupSapHana#snapshot_policy_id}.

---

### NetappVolumeGroupSapHanaVolumeExportPolicyRule <a name="NetappVolumeGroupSapHanaVolumeExportPolicyRule" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_sap_hana

netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRule(
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
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRule.property.allowedClients">allowed_clients</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#allowed_clients NetappVolumeGroupSapHana#allowed_clients}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRule.property.nfsv3Enabled">nfsv3_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#nfsv3_enabled NetappVolumeGroupSapHana#nfsv3_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRule.property.nfsv41Enabled">nfsv41_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#nfsv41_enabled NetappVolumeGroupSapHana#nfsv41_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRule.property.ruleIndex">rule_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#rule_index NetappVolumeGroupSapHana#rule_index}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRule.property.rootAccessEnabled">root_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#root_access_enabled NetappVolumeGroupSapHana#root_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRule.property.unixReadOnly">unix_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#unix_read_only NetappVolumeGroupSapHana#unix_read_only}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRule.property.unixReadWrite">unix_read_write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#unix_read_write NetappVolumeGroupSapHana#unix_read_write}. |

---

##### `allowed_clients`<sup>Required</sup> <a name="allowed_clients" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRule.property.allowedClients"></a>

```python
allowed_clients: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#allowed_clients NetappVolumeGroupSapHana#allowed_clients}.

---

##### `nfsv3_enabled`<sup>Required</sup> <a name="nfsv3_enabled" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRule.property.nfsv3Enabled"></a>

```python
nfsv3_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#nfsv3_enabled NetappVolumeGroupSapHana#nfsv3_enabled}.

---

##### `nfsv41_enabled`<sup>Required</sup> <a name="nfsv41_enabled" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRule.property.nfsv41Enabled"></a>

```python
nfsv41_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#nfsv41_enabled NetappVolumeGroupSapHana#nfsv41_enabled}.

---

##### `rule_index`<sup>Required</sup> <a name="rule_index" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRule.property.ruleIndex"></a>

```python
rule_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#rule_index NetappVolumeGroupSapHana#rule_index}.

---

##### `root_access_enabled`<sup>Optional</sup> <a name="root_access_enabled" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRule.property.rootAccessEnabled"></a>

```python
root_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#root_access_enabled NetappVolumeGroupSapHana#root_access_enabled}.

---

##### `unix_read_only`<sup>Optional</sup> <a name="unix_read_only" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRule.property.unixReadOnly"></a>

```python
unix_read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#unix_read_only NetappVolumeGroupSapHana#unix_read_only}.

---

##### `unix_read_write`<sup>Optional</sup> <a name="unix_read_write" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRule.property.unixReadWrite"></a>

```python
unix_read_write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#unix_read_write NetappVolumeGroupSapHana#unix_read_write}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeGroupSapHanaTimeoutsOutputReference <a name="NetappVolumeGroupSapHanaTimeoutsOutputReference" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_sap_hana

netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeouts">NetappVolumeGroupSapHanaTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetappVolumeGroupSapHanaTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaTimeouts">NetappVolumeGroupSapHanaTimeouts</a>]

---


### NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference <a name="NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_sap_hana

netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.resetEndpointType">reset_endpoint_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_endpoint_type` <a name="reset_endpoint_type" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.resetEndpointType"></a>

```python
def reset_endpoint_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.endpointTypeInput">endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocationInput">remote_volume_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceIdInput">remote_volume_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.replicationFrequencyInput">replication_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocation">remote_volume_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceId">remote_volume_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.replicationFrequency">replication_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplication">NetappVolumeGroupSapHanaVolumeDataProtectionReplication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_type_input`<sup>Optional</sup> <a name="endpoint_type_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.endpointTypeInput"></a>

```python
endpoint_type_input: str
```

- *Type:* str

---

##### `remote_volume_location_input`<sup>Optional</sup> <a name="remote_volume_location_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocationInput"></a>

```python
remote_volume_location_input: str
```

- *Type:* str

---

##### `remote_volume_resource_id_input`<sup>Optional</sup> <a name="remote_volume_resource_id_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceIdInput"></a>

```python
remote_volume_resource_id_input: str
```

- *Type:* str

---

##### `replication_frequency_input`<sup>Optional</sup> <a name="replication_frequency_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.replicationFrequencyInput"></a>

```python
replication_frequency_input: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `remote_volume_location`<sup>Required</sup> <a name="remote_volume_location" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocation"></a>

```python
remote_volume_location: str
```

- *Type:* str

---

##### `remote_volume_resource_id`<sup>Required</sup> <a name="remote_volume_resource_id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceId"></a>

```python
remote_volume_resource_id: str
```

- *Type:* str

---

##### `replication_frequency`<sup>Required</sup> <a name="replication_frequency" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.replicationFrequency"></a>

```python
replication_frequency: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.internalValue"></a>

```python
internal_value: NetappVolumeGroupSapHanaVolumeDataProtectionReplication
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplication">NetappVolumeGroupSapHanaVolumeDataProtectionReplication</a>

---


### NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference <a name="NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_sap_hana

netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyIdInput">snapshot_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyId">snapshot_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy">NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `snapshot_policy_id_input`<sup>Optional</sup> <a name="snapshot_policy_id_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyIdInput"></a>

```python
snapshot_policy_id_input: str
```

- *Type:* str

---

##### `snapshot_policy_id`<sup>Required</sup> <a name="snapshot_policy_id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyId"></a>

```python
snapshot_policy_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.property.internalValue"></a>

```python
internal_value: NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy">NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy</a>

---


### NetappVolumeGroupSapHanaVolumeExportPolicyRuleList <a name="NetappVolumeGroupSapHanaVolumeExportPolicyRuleList" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_sap_hana

netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRule">NetappVolumeGroupSapHanaVolumeExportPolicyRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetappVolumeGroupSapHanaVolumeExportPolicyRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRule">NetappVolumeGroupSapHanaVolumeExportPolicyRule</a>]]

---


### NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference <a name="NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_sap_hana

netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.resetRootAccessEnabled">reset_root_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.resetUnixReadOnly">reset_unix_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.resetUnixReadWrite">reset_unix_read_write</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_root_access_enabled` <a name="reset_root_access_enabled" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.resetRootAccessEnabled"></a>

```python
def reset_root_access_enabled() -> None
```

##### `reset_unix_read_only` <a name="reset_unix_read_only" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.resetUnixReadOnly"></a>

```python
def reset_unix_read_only() -> None
```

##### `reset_unix_read_write` <a name="reset_unix_read_write" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.resetUnixReadWrite"></a>

```python
def reset_unix_read_write() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.allowedClientsInput">allowed_clients_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.nfsv3EnabledInput">nfsv3_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.nfsv41EnabledInput">nfsv41_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.rootAccessEnabledInput">root_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.ruleIndexInput">rule_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.unixReadOnlyInput">unix_read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.unixReadWriteInput">unix_read_write_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.allowedClients">allowed_clients</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.nfsv3Enabled">nfsv3_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.nfsv41Enabled">nfsv41_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.rootAccessEnabled">root_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.ruleIndex">rule_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.unixReadOnly">unix_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.unixReadWrite">unix_read_write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRule">NetappVolumeGroupSapHanaVolumeExportPolicyRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_clients_input`<sup>Optional</sup> <a name="allowed_clients_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.allowedClientsInput"></a>

```python
allowed_clients_input: str
```

- *Type:* str

---

##### `nfsv3_enabled_input`<sup>Optional</sup> <a name="nfsv3_enabled_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.nfsv3EnabledInput"></a>

```python
nfsv3_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nfsv41_enabled_input`<sup>Optional</sup> <a name="nfsv41_enabled_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.nfsv41EnabledInput"></a>

```python
nfsv41_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `root_access_enabled_input`<sup>Optional</sup> <a name="root_access_enabled_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.rootAccessEnabledInput"></a>

```python
root_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rule_index_input`<sup>Optional</sup> <a name="rule_index_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.ruleIndexInput"></a>

```python
rule_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unix_read_only_input`<sup>Optional</sup> <a name="unix_read_only_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.unixReadOnlyInput"></a>

```python
unix_read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unix_read_write_input`<sup>Optional</sup> <a name="unix_read_write_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.unixReadWriteInput"></a>

```python
unix_read_write_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_clients`<sup>Required</sup> <a name="allowed_clients" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.allowedClients"></a>

```python
allowed_clients: str
```

- *Type:* str

---

##### `nfsv3_enabled`<sup>Required</sup> <a name="nfsv3_enabled" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.nfsv3Enabled"></a>

```python
nfsv3_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nfsv41_enabled`<sup>Required</sup> <a name="nfsv41_enabled" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.nfsv41Enabled"></a>

```python
nfsv41_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `root_access_enabled`<sup>Required</sup> <a name="root_access_enabled" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.rootAccessEnabled"></a>

```python
root_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rule_index`<sup>Required</sup> <a name="rule_index" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.ruleIndex"></a>

```python
rule_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unix_read_only`<sup>Required</sup> <a name="unix_read_only" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.unixReadOnly"></a>

```python
unix_read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unix_read_write`<sup>Required</sup> <a name="unix_read_write" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.unixReadWrite"></a>

```python
unix_read_write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetappVolumeGroupSapHanaVolumeExportPolicyRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRule">NetappVolumeGroupSapHanaVolumeExportPolicyRule</a>]

---


### NetappVolumeGroupSapHanaVolumeList <a name="NetappVolumeGroupSapHanaVolumeList" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_sap_hana

netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetappVolumeGroupSapHanaVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume">NetappVolumeGroupSapHanaVolume</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetappVolumeGroupSapHanaVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume">NetappVolumeGroupSapHanaVolume</a>]]

---


### NetappVolumeGroupSapHanaVolumeOutputReference <a name="NetappVolumeGroupSapHanaVolumeOutputReference" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import netapp_volume_group_sap_hana

netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.putDataProtectionReplication">put_data_protection_replication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.putDataProtectionSnapshotPolicy">put_data_protection_snapshot_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.putExportPolicyRule">put_export_policy_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.resetDataProtectionReplication">reset_data_protection_replication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.resetDataProtectionSnapshotPolicy">reset_data_protection_snapshot_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.resetProximityPlacementGroupId">reset_proximity_placement_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_protection_replication` <a name="put_data_protection_replication" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.putDataProtectionReplication"></a>

```python
def put_data_protection_replication(
  remote_volume_location: str,
  remote_volume_resource_id: str,
  replication_frequency: str,
  endpoint_type: str = None
) -> None
```

###### `remote_volume_location`<sup>Required</sup> <a name="remote_volume_location" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.putDataProtectionReplication.parameter.remoteVolumeLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#remote_volume_location NetappVolumeGroupSapHana#remote_volume_location}.

---

###### `remote_volume_resource_id`<sup>Required</sup> <a name="remote_volume_resource_id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.putDataProtectionReplication.parameter.remoteVolumeResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#remote_volume_resource_id NetappVolumeGroupSapHana#remote_volume_resource_id}.

---

###### `replication_frequency`<sup>Required</sup> <a name="replication_frequency" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.putDataProtectionReplication.parameter.replicationFrequency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#replication_frequency NetappVolumeGroupSapHana#replication_frequency}.

---

###### `endpoint_type`<sup>Optional</sup> <a name="endpoint_type" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.putDataProtectionReplication.parameter.endpointType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#endpoint_type NetappVolumeGroupSapHana#endpoint_type}.

---

##### `put_data_protection_snapshot_policy` <a name="put_data_protection_snapshot_policy" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.putDataProtectionSnapshotPolicy"></a>

```python
def put_data_protection_snapshot_policy(
  snapshot_policy_id: str
) -> None
```

###### `snapshot_policy_id`<sup>Required</sup> <a name="snapshot_policy_id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.putDataProtectionSnapshotPolicy.parameter.snapshotPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/netapp_volume_group_sap_hana#snapshot_policy_id NetappVolumeGroupSapHana#snapshot_policy_id}.

---

##### `put_export_policy_rule` <a name="put_export_policy_rule" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.putExportPolicyRule"></a>

```python
def put_export_policy_rule(
  value: typing.Union[IResolvable, typing.List[NetappVolumeGroupSapHanaVolumeExportPolicyRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.putExportPolicyRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRule">NetappVolumeGroupSapHanaVolumeExportPolicyRule</a>]]

---

##### `reset_data_protection_replication` <a name="reset_data_protection_replication" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.resetDataProtectionReplication"></a>

```python
def reset_data_protection_replication() -> None
```

##### `reset_data_protection_snapshot_policy` <a name="reset_data_protection_snapshot_policy" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.resetDataProtectionSnapshotPolicy"></a>

```python
def reset_data_protection_snapshot_policy() -> None
```

##### `reset_proximity_placement_group_id` <a name="reset_proximity_placement_group_id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.resetProximityPlacementGroupId"></a>

```python
def reset_proximity_placement_group_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.dataProtectionReplication">data_protection_replication</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference">NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.dataProtectionSnapshotPolicy">data_protection_snapshot_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference">NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.exportPolicyRule">export_policy_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList">NetappVolumeGroupSapHanaVolumeExportPolicyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.mountIpAddresses">mount_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.capacityPoolIdInput">capacity_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.dataProtectionReplicationInput">data_protection_replication_input</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplication">NetappVolumeGroupSapHanaVolumeDataProtectionReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.dataProtectionSnapshotPolicyInput">data_protection_snapshot_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy">NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.exportPolicyRuleInput">export_policy_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRule">NetappVolumeGroupSapHanaVolumeExportPolicyRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.protocolsInput">protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.proximityPlacementGroupIdInput">proximity_placement_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.securityStyleInput">security_style_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.serviceLevelInput">service_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.snapshotDirectoryVisibleInput">snapshot_directory_visible_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.storageQuotaInGbInput">storage_quota_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.throughputInMibpsInput">throughput_in_mibps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.volumePathInput">volume_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.volumeSpecNameInput">volume_spec_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.capacityPoolId">capacity_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.proximityPlacementGroupId">proximity_placement_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.securityStyle">security_style</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.serviceLevel">service_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.snapshotDirectoryVisible">snapshot_directory_visible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.storageQuotaInGb">storage_quota_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.throughputInMibps">throughput_in_mibps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.volumePath">volume_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.volumeSpecName">volume_spec_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume">NetappVolumeGroupSapHanaVolume</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_protection_replication`<sup>Required</sup> <a name="data_protection_replication" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.dataProtectionReplication"></a>

```python
data_protection_replication: NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference">NetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference</a>

---

##### `data_protection_snapshot_policy`<sup>Required</sup> <a name="data_protection_snapshot_policy" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.dataProtectionSnapshotPolicy"></a>

```python
data_protection_snapshot_policy: NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference">NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference</a>

---

##### `export_policy_rule`<sup>Required</sup> <a name="export_policy_rule" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.exportPolicyRule"></a>

```python
export_policy_rule: NetappVolumeGroupSapHanaVolumeExportPolicyRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRuleList">NetappVolumeGroupSapHanaVolumeExportPolicyRuleList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mount_ip_addresses`<sup>Required</sup> <a name="mount_ip_addresses" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.mountIpAddresses"></a>

```python
mount_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `capacity_pool_id_input`<sup>Optional</sup> <a name="capacity_pool_id_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.capacityPoolIdInput"></a>

```python
capacity_pool_id_input: str
```

- *Type:* str

---

##### `data_protection_replication_input`<sup>Optional</sup> <a name="data_protection_replication_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.dataProtectionReplicationInput"></a>

```python
data_protection_replication_input: NetappVolumeGroupSapHanaVolumeDataProtectionReplication
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionReplication">NetappVolumeGroupSapHanaVolumeDataProtectionReplication</a>

---

##### `data_protection_snapshot_policy_input`<sup>Optional</sup> <a name="data_protection_snapshot_policy_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.dataProtectionSnapshotPolicyInput"></a>

```python
data_protection_snapshot_policy_input: NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy">NetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy</a>

---

##### `export_policy_rule_input`<sup>Optional</sup> <a name="export_policy_rule_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.exportPolicyRuleInput"></a>

```python
export_policy_rule_input: typing.Union[IResolvable, typing.List[NetappVolumeGroupSapHanaVolumeExportPolicyRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeExportPolicyRule">NetappVolumeGroupSapHanaVolumeExportPolicyRule</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protocols_input`<sup>Optional</sup> <a name="protocols_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.protocolsInput"></a>

```python
protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `proximity_placement_group_id_input`<sup>Optional</sup> <a name="proximity_placement_group_id_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.proximityPlacementGroupIdInput"></a>

```python
proximity_placement_group_id_input: str
```

- *Type:* str

---

##### `security_style_input`<sup>Optional</sup> <a name="security_style_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.securityStyleInput"></a>

```python
security_style_input: str
```

- *Type:* str

---

##### `service_level_input`<sup>Optional</sup> <a name="service_level_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.serviceLevelInput"></a>

```python
service_level_input: str
```

- *Type:* str

---

##### `snapshot_directory_visible_input`<sup>Optional</sup> <a name="snapshot_directory_visible_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.snapshotDirectoryVisibleInput"></a>

```python
snapshot_directory_visible_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_quota_in_gb_input`<sup>Optional</sup> <a name="storage_quota_in_gb_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.storageQuotaInGbInput"></a>

```python
storage_quota_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `throughput_in_mibps_input`<sup>Optional</sup> <a name="throughput_in_mibps_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.throughputInMibpsInput"></a>

```python
throughput_in_mibps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_path_input`<sup>Optional</sup> <a name="volume_path_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.volumePathInput"></a>

```python
volume_path_input: str
```

- *Type:* str

---

##### `volume_spec_name_input`<sup>Optional</sup> <a name="volume_spec_name_input" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.volumeSpecNameInput"></a>

```python
volume_spec_name_input: str
```

- *Type:* str

---

##### `capacity_pool_id`<sup>Required</sup> <a name="capacity_pool_id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.capacityPoolId"></a>

```python
capacity_pool_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `proximity_placement_group_id`<sup>Required</sup> <a name="proximity_placement_group_id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.proximityPlacementGroupId"></a>

```python
proximity_placement_group_id: str
```

- *Type:* str

---

##### `security_style`<sup>Required</sup> <a name="security_style" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.securityStyle"></a>

```python
security_style: str
```

- *Type:* str

---

##### `service_level`<sup>Required</sup> <a name="service_level" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.serviceLevel"></a>

```python
service_level: str
```

- *Type:* str

---

##### `snapshot_directory_visible`<sup>Required</sup> <a name="snapshot_directory_visible" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.snapshotDirectoryVisible"></a>

```python
snapshot_directory_visible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_quota_in_gb`<sup>Required</sup> <a name="storage_quota_in_gb" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.storageQuotaInGb"></a>

```python
storage_quota_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `throughput_in_mibps`<sup>Required</sup> <a name="throughput_in_mibps" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.throughputInMibps"></a>

```python
throughput_in_mibps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_path`<sup>Required</sup> <a name="volume_path" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.volumePath"></a>

```python
volume_path: str
```

- *Type:* str

---

##### `volume_spec_name`<sup>Required</sup> <a name="volume_spec_name" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.volumeSpecName"></a>

```python
volume_spec_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolumeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetappVolumeGroupSapHanaVolume]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.netappVolumeGroupSapHana.NetappVolumeGroupSapHanaVolume">NetappVolumeGroupSapHanaVolume</a>]

---



