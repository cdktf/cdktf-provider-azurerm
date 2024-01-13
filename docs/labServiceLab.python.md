# `labServiceLab` Submodule <a name="`labServiceLab` Submodule" id="@cdktf/provider-azurerm.labServiceLab"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LabServiceLab <a name="LabServiceLab" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab azurerm_lab_service_lab}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLab(
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
  security: LabServiceLabSecurity,
  title: str,
  virtual_machine: LabServiceLabVirtualMachine,
  auto_shutdown: LabServiceLabAutoShutdown = None,
  connection_setting: LabServiceLabConnectionSetting = None,
  description: str = None,
  id: str = None,
  lab_plan_id: str = None,
  network: LabServiceLabNetwork = None,
  roster: LabServiceLabRoster = None,
  tags: typing.Mapping[str] = None,
  timeouts: LabServiceLabTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#location LabServiceLab#location}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#name LabServiceLab#name}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#resource_group_name LabServiceLab#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.security">security</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a></code> | security block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#title LabServiceLab#title}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.virtualMachine">virtual_machine</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a></code> | virtual_machine block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.autoShutdown">auto_shutdown</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a></code> | auto_shutdown block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.connectionSetting">connection_setting</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a></code> | connection_setting block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#description LabServiceLab#description}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#id LabServiceLab#id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.labPlanId">lab_plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#lab_plan_id LabServiceLab#lab_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.roster">roster</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a></code> | roster block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#tags LabServiceLab#tags}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#location LabServiceLab#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#name LabServiceLab#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#resource_group_name LabServiceLab#resource_group_name}.

---

##### `security`<sup>Required</sup> <a name="security" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.security"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a>

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#security LabServiceLab#security}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#title LabServiceLab#title}.

---

##### `virtual_machine`<sup>Required</sup> <a name="virtual_machine" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.virtualMachine"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#virtual_machine LabServiceLab#virtual_machine}

---

##### `auto_shutdown`<sup>Optional</sup> <a name="auto_shutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.autoShutdown"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a>

auto_shutdown block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#auto_shutdown LabServiceLab#auto_shutdown}

---

##### `connection_setting`<sup>Optional</sup> <a name="connection_setting" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.connectionSetting"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a>

connection_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#connection_setting LabServiceLab#connection_setting}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#description LabServiceLab#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#id LabServiceLab#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lab_plan_id`<sup>Optional</sup> <a name="lab_plan_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.labPlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#lab_plan_id LabServiceLab#lab_plan_id}.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.network"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#network LabServiceLab#network}

---

##### `roster`<sup>Optional</sup> <a name="roster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.roster"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a>

roster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#roster LabServiceLab#roster}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#tags LabServiceLab#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#timeouts LabServiceLab#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putAutoShutdown">put_auto_shutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putConnectionSetting">put_connection_setting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putNetwork">put_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putRoster">put_roster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putSecurity">put_security</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putVirtualMachine">put_virtual_machine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetAutoShutdown">reset_auto_shutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetConnectionSetting">reset_connection_setting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetLabPlanId">reset_lab_plan_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetRoster">reset_roster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auto_shutdown` <a name="put_auto_shutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putAutoShutdown"></a>

```python
def put_auto_shutdown(
  disconnect_delay: str = None,
  idle_delay: str = None,
  no_connect_delay: str = None,
  shutdown_on_idle: str = None
) -> None
```

###### `disconnect_delay`<sup>Optional</sup> <a name="disconnect_delay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putAutoShutdown.parameter.disconnectDelay"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#disconnect_delay LabServiceLab#disconnect_delay}.

---

###### `idle_delay`<sup>Optional</sup> <a name="idle_delay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putAutoShutdown.parameter.idleDelay"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#idle_delay LabServiceLab#idle_delay}.

---

###### `no_connect_delay`<sup>Optional</sup> <a name="no_connect_delay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putAutoShutdown.parameter.noConnectDelay"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#no_connect_delay LabServiceLab#no_connect_delay}.

---

###### `shutdown_on_idle`<sup>Optional</sup> <a name="shutdown_on_idle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putAutoShutdown.parameter.shutdownOnIdle"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#shutdown_on_idle LabServiceLab#shutdown_on_idle}.

---

##### `put_connection_setting` <a name="put_connection_setting" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putConnectionSetting"></a>

```python
def put_connection_setting(
  client_rdp_access: str = None,
  client_ssh_access: str = None
) -> None
```

###### `client_rdp_access`<sup>Optional</sup> <a name="client_rdp_access" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putConnectionSetting.parameter.clientRdpAccess"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#client_rdp_access LabServiceLab#client_rdp_access}.

---

###### `client_ssh_access`<sup>Optional</sup> <a name="client_ssh_access" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putConnectionSetting.parameter.clientSshAccess"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#client_ssh_access LabServiceLab#client_ssh_access}.

---

##### `put_network` <a name="put_network" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putNetwork"></a>

```python
def put_network(
  subnet_id: str = None
) -> None
```

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putNetwork.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#subnet_id LabServiceLab#subnet_id}.

---

##### `put_roster` <a name="put_roster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putRoster"></a>

```python
def put_roster(
  active_directory_group_id: str = None,
  lms_instance: str = None,
  lti_client_id: str = None,
  lti_context_id: str = None,
  lti_roster_endpoint: str = None
) -> None
```

###### `active_directory_group_id`<sup>Optional</sup> <a name="active_directory_group_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putRoster.parameter.activeDirectoryGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#active_directory_group_id LabServiceLab#active_directory_group_id}.

---

###### `lms_instance`<sup>Optional</sup> <a name="lms_instance" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putRoster.parameter.lmsInstance"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#lms_instance LabServiceLab#lms_instance}.

---

###### `lti_client_id`<sup>Optional</sup> <a name="lti_client_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putRoster.parameter.ltiClientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#lti_client_id LabServiceLab#lti_client_id}.

---

###### `lti_context_id`<sup>Optional</sup> <a name="lti_context_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putRoster.parameter.ltiContextId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#lti_context_id LabServiceLab#lti_context_id}.

---

###### `lti_roster_endpoint`<sup>Optional</sup> <a name="lti_roster_endpoint" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putRoster.parameter.ltiRosterEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#lti_roster_endpoint LabServiceLab#lti_roster_endpoint}.

---

##### `put_security` <a name="put_security" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putSecurity"></a>

```python
def put_security(
  open_access_enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `open_access_enabled`<sup>Required</sup> <a name="open_access_enabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putSecurity.parameter.openAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#open_access_enabled LabServiceLab#open_access_enabled}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#create LabServiceLab#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#delete LabServiceLab#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#read LabServiceLab#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#update LabServiceLab#update}.

---

##### `put_virtual_machine` <a name="put_virtual_machine" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putVirtualMachine"></a>

```python
def put_virtual_machine(
  admin_user: LabServiceLabVirtualMachineAdminUser,
  image_reference: LabServiceLabVirtualMachineImageReference,
  sku: LabServiceLabVirtualMachineSku,
  additional_capability_gpu_drivers_installed: typing.Union[bool, IResolvable] = None,
  create_option: str = None,
  non_admin_user: LabServiceLabVirtualMachineNonAdminUser = None,
  shared_password_enabled: typing.Union[bool, IResolvable] = None,
  usage_quota: str = None
) -> None
```

###### `admin_user`<sup>Required</sup> <a name="admin_user" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putVirtualMachine.parameter.adminUser"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a>

admin_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#admin_user LabServiceLab#admin_user}

---

###### `image_reference`<sup>Required</sup> <a name="image_reference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putVirtualMachine.parameter.imageReference"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a>

image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#image_reference LabServiceLab#image_reference}

---

###### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putVirtualMachine.parameter.sku"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#sku LabServiceLab#sku}

---

###### `additional_capability_gpu_drivers_installed`<sup>Optional</sup> <a name="additional_capability_gpu_drivers_installed" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putVirtualMachine.parameter.additionalCapabilityGpuDriversInstalled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#additional_capability_gpu_drivers_installed LabServiceLab#additional_capability_gpu_drivers_installed}.

---

###### `create_option`<sup>Optional</sup> <a name="create_option" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putVirtualMachine.parameter.createOption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#create_option LabServiceLab#create_option}.

---

###### `non_admin_user`<sup>Optional</sup> <a name="non_admin_user" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putVirtualMachine.parameter.nonAdminUser"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a>

non_admin_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#non_admin_user LabServiceLab#non_admin_user}

---

###### `shared_password_enabled`<sup>Optional</sup> <a name="shared_password_enabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putVirtualMachine.parameter.sharedPasswordEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#shared_password_enabled LabServiceLab#shared_password_enabled}.

---

###### `usage_quota`<sup>Optional</sup> <a name="usage_quota" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putVirtualMachine.parameter.usageQuota"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#usage_quota LabServiceLab#usage_quota}.

---

##### `reset_auto_shutdown` <a name="reset_auto_shutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetAutoShutdown"></a>

```python
def reset_auto_shutdown() -> None
```

##### `reset_connection_setting` <a name="reset_connection_setting" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetConnectionSetting"></a>

```python
def reset_connection_setting() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lab_plan_id` <a name="reset_lab_plan_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetLabPlanId"></a>

```python
def reset_lab_plan_id() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_roster` <a name="reset_roster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetRoster"></a>

```python
def reset_roster() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LabServiceLab resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLab.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLab.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLab.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLab.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LabServiceLab resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LabServiceLab to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LabServiceLab that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LabServiceLab to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.autoShutdown">auto_shutdown</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference">LabServiceLabAutoShutdownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connectionSetting">connection_setting</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference">LabServiceLabConnectionSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference">LabServiceLabNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.roster">roster</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference">LabServiceLabRosterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.security">security</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference">LabServiceLabSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference">LabServiceLabTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.virtualMachine">virtual_machine</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference">LabServiceLabVirtualMachineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.autoShutdownInput">auto_shutdown_input</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connectionSettingInput">connection_setting_input</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.labPlanIdInput">lab_plan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.networkInput">network_input</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.rosterInput">roster_input</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.securityInput">security_input</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.virtualMachineInput">virtual_machine_input</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.labPlanId">lab_plan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.title">title</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_shutdown`<sup>Required</sup> <a name="auto_shutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.autoShutdown"></a>

```python
auto_shutdown: LabServiceLabAutoShutdownOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference">LabServiceLabAutoShutdownOutputReference</a>

---

##### `connection_setting`<sup>Required</sup> <a name="connection_setting" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connectionSetting"></a>

```python
connection_setting: LabServiceLabConnectionSettingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference">LabServiceLabConnectionSettingOutputReference</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.network"></a>

```python
network: LabServiceLabNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference">LabServiceLabNetworkOutputReference</a>

---

##### `roster`<sup>Required</sup> <a name="roster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.roster"></a>

```python
roster: LabServiceLabRosterOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference">LabServiceLabRosterOutputReference</a>

---

##### `security`<sup>Required</sup> <a name="security" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.security"></a>

```python
security: LabServiceLabSecurityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference">LabServiceLabSecurityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.timeouts"></a>

```python
timeouts: LabServiceLabTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference">LabServiceLabTimeoutsOutputReference</a>

---

##### `virtual_machine`<sup>Required</sup> <a name="virtual_machine" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.virtualMachine"></a>

```python
virtual_machine: LabServiceLabVirtualMachineOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference">LabServiceLabVirtualMachineOutputReference</a>

---

##### `auto_shutdown_input`<sup>Optional</sup> <a name="auto_shutdown_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.autoShutdownInput"></a>

```python
auto_shutdown_input: LabServiceLabAutoShutdown
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a>

---

##### `connection_setting_input`<sup>Optional</sup> <a name="connection_setting_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connectionSettingInput"></a>

```python
connection_setting_input: LabServiceLabConnectionSetting
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lab_plan_id_input`<sup>Optional</sup> <a name="lab_plan_id_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.labPlanIdInput"></a>

```python
lab_plan_id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.networkInput"></a>

```python
network_input: LabServiceLabNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a>

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `roster_input`<sup>Optional</sup> <a name="roster_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.rosterInput"></a>

```python
roster_input: LabServiceLabRoster
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a>

---

##### `security_input`<sup>Optional</sup> <a name="security_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.securityInput"></a>

```python
security_input: LabServiceLabSecurity
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LabServiceLabTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a>]

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `virtual_machine_input`<sup>Optional</sup> <a name="virtual_machine_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.virtualMachineInput"></a>

```python
virtual_machine_input: LabServiceLabVirtualMachine
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lab_plan_id`<sup>Required</sup> <a name="lab_plan_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.labPlanId"></a>

```python
lab_plan_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.title"></a>

```python
title: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LabServiceLabAutoShutdown <a name="LabServiceLabAutoShutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLabAutoShutdown(
  disconnect_delay: str = None,
  idle_delay: str = None,
  no_connect_delay: str = None,
  shutdown_on_idle: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.disconnectDelay">disconnect_delay</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#disconnect_delay LabServiceLab#disconnect_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.idleDelay">idle_delay</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#idle_delay LabServiceLab#idle_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.noConnectDelay">no_connect_delay</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#no_connect_delay LabServiceLab#no_connect_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.shutdownOnIdle">shutdown_on_idle</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#shutdown_on_idle LabServiceLab#shutdown_on_idle}. |

---

##### `disconnect_delay`<sup>Optional</sup> <a name="disconnect_delay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.disconnectDelay"></a>

```python
disconnect_delay: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#disconnect_delay LabServiceLab#disconnect_delay}.

---

##### `idle_delay`<sup>Optional</sup> <a name="idle_delay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.idleDelay"></a>

```python
idle_delay: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#idle_delay LabServiceLab#idle_delay}.

---

##### `no_connect_delay`<sup>Optional</sup> <a name="no_connect_delay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.noConnectDelay"></a>

```python
no_connect_delay: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#no_connect_delay LabServiceLab#no_connect_delay}.

---

##### `shutdown_on_idle`<sup>Optional</sup> <a name="shutdown_on_idle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.shutdownOnIdle"></a>

```python
shutdown_on_idle: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#shutdown_on_idle LabServiceLab#shutdown_on_idle}.

---

### LabServiceLabConfig <a name="LabServiceLabConfig" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLabConfig(
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
  security: LabServiceLabSecurity,
  title: str,
  virtual_machine: LabServiceLabVirtualMachine,
  auto_shutdown: LabServiceLabAutoShutdown = None,
  connection_setting: LabServiceLabConnectionSetting = None,
  description: str = None,
  id: str = None,
  lab_plan_id: str = None,
  network: LabServiceLabNetwork = None,
  roster: LabServiceLabRoster = None,
  tags: typing.Mapping[str] = None,
  timeouts: LabServiceLabTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#location LabServiceLab#location}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#name LabServiceLab#name}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#resource_group_name LabServiceLab#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.security">security</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a></code> | security block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#title LabServiceLab#title}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.virtualMachine">virtual_machine</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a></code> | virtual_machine block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.autoShutdown">auto_shutdown</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a></code> | auto_shutdown block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.connectionSetting">connection_setting</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a></code> | connection_setting block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#description LabServiceLab#description}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#id LabServiceLab#id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.labPlanId">lab_plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#lab_plan_id LabServiceLab#lab_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.roster">roster</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a></code> | roster block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#tags LabServiceLab#tags}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#location LabServiceLab#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#name LabServiceLab#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#resource_group_name LabServiceLab#resource_group_name}.

---

##### `security`<sup>Required</sup> <a name="security" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.security"></a>

```python
security: LabServiceLabSecurity
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a>

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#security LabServiceLab#security}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#title LabServiceLab#title}.

---

##### `virtual_machine`<sup>Required</sup> <a name="virtual_machine" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.virtualMachine"></a>

```python
virtual_machine: LabServiceLabVirtualMachine
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#virtual_machine LabServiceLab#virtual_machine}

---

##### `auto_shutdown`<sup>Optional</sup> <a name="auto_shutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.autoShutdown"></a>

```python
auto_shutdown: LabServiceLabAutoShutdown
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a>

auto_shutdown block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#auto_shutdown LabServiceLab#auto_shutdown}

---

##### `connection_setting`<sup>Optional</sup> <a name="connection_setting" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.connectionSetting"></a>

```python
connection_setting: LabServiceLabConnectionSetting
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a>

connection_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#connection_setting LabServiceLab#connection_setting}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#description LabServiceLab#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#id LabServiceLab#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lab_plan_id`<sup>Optional</sup> <a name="lab_plan_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.labPlanId"></a>

```python
lab_plan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#lab_plan_id LabServiceLab#lab_plan_id}.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.network"></a>

```python
network: LabServiceLabNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#network LabServiceLab#network}

---

##### `roster`<sup>Optional</sup> <a name="roster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.roster"></a>

```python
roster: LabServiceLabRoster
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a>

roster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#roster LabServiceLab#roster}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#tags LabServiceLab#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.timeouts"></a>

```python
timeouts: LabServiceLabTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#timeouts LabServiceLab#timeouts}

---

### LabServiceLabConnectionSetting <a name="LabServiceLabConnectionSetting" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLabConnectionSetting(
  client_rdp_access: str = None,
  client_ssh_access: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting.property.clientRdpAccess">client_rdp_access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#client_rdp_access LabServiceLab#client_rdp_access}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting.property.clientSshAccess">client_ssh_access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#client_ssh_access LabServiceLab#client_ssh_access}. |

---

##### `client_rdp_access`<sup>Optional</sup> <a name="client_rdp_access" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting.property.clientRdpAccess"></a>

```python
client_rdp_access: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#client_rdp_access LabServiceLab#client_rdp_access}.

---

##### `client_ssh_access`<sup>Optional</sup> <a name="client_ssh_access" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting.property.clientSshAccess"></a>

```python
client_ssh_access: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#client_ssh_access LabServiceLab#client_ssh_access}.

---

### LabServiceLabNetwork <a name="LabServiceLabNetwork" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLabNetwork(
  subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#subnet_id LabServiceLab#subnet_id}. |

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#subnet_id LabServiceLab#subnet_id}.

---

### LabServiceLabRoster <a name="LabServiceLabRoster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLabRoster(
  active_directory_group_id: str = None,
  lms_instance: str = None,
  lti_client_id: str = None,
  lti_context_id: str = None,
  lti_roster_endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.activeDirectoryGroupId">active_directory_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#active_directory_group_id LabServiceLab#active_directory_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.lmsInstance">lms_instance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#lms_instance LabServiceLab#lms_instance}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiClientId">lti_client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#lti_client_id LabServiceLab#lti_client_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiContextId">lti_context_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#lti_context_id LabServiceLab#lti_context_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiRosterEndpoint">lti_roster_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#lti_roster_endpoint LabServiceLab#lti_roster_endpoint}. |

---

##### `active_directory_group_id`<sup>Optional</sup> <a name="active_directory_group_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.activeDirectoryGroupId"></a>

```python
active_directory_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#active_directory_group_id LabServiceLab#active_directory_group_id}.

---

##### `lms_instance`<sup>Optional</sup> <a name="lms_instance" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.lmsInstance"></a>

```python
lms_instance: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#lms_instance LabServiceLab#lms_instance}.

---

##### `lti_client_id`<sup>Optional</sup> <a name="lti_client_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiClientId"></a>

```python
lti_client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#lti_client_id LabServiceLab#lti_client_id}.

---

##### `lti_context_id`<sup>Optional</sup> <a name="lti_context_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiContextId"></a>

```python
lti_context_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#lti_context_id LabServiceLab#lti_context_id}.

---

##### `lti_roster_endpoint`<sup>Optional</sup> <a name="lti_roster_endpoint" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiRosterEndpoint"></a>

```python
lti_roster_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#lti_roster_endpoint LabServiceLab#lti_roster_endpoint}.

---

### LabServiceLabSecurity <a name="LabServiceLabSecurity" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLabSecurity(
  open_access_enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity.property.openAccessEnabled">open_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#open_access_enabled LabServiceLab#open_access_enabled}. |

---

##### `open_access_enabled`<sup>Required</sup> <a name="open_access_enabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity.property.openAccessEnabled"></a>

```python
open_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#open_access_enabled LabServiceLab#open_access_enabled}.

---

### LabServiceLabTimeouts <a name="LabServiceLabTimeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLabTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#create LabServiceLab#create}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#delete LabServiceLab#delete}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#read LabServiceLab#read}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#update LabServiceLab#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#create LabServiceLab#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#delete LabServiceLab#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#read LabServiceLab#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#update LabServiceLab#update}.

---

### LabServiceLabVirtualMachine <a name="LabServiceLabVirtualMachine" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLabVirtualMachine(
  admin_user: LabServiceLabVirtualMachineAdminUser,
  image_reference: LabServiceLabVirtualMachineImageReference,
  sku: LabServiceLabVirtualMachineSku,
  additional_capability_gpu_drivers_installed: typing.Union[bool, IResolvable] = None,
  create_option: str = None,
  non_admin_user: LabServiceLabVirtualMachineNonAdminUser = None,
  shared_password_enabled: typing.Union[bool, IResolvable] = None,
  usage_quota: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.adminUser">admin_user</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a></code> | admin_user block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.imageReference">image_reference</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a></code> | image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.additionalCapabilityGpuDriversInstalled">additional_capability_gpu_drivers_installed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#additional_capability_gpu_drivers_installed LabServiceLab#additional_capability_gpu_drivers_installed}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.createOption">create_option</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#create_option LabServiceLab#create_option}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.nonAdminUser">non_admin_user</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a></code> | non_admin_user block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.sharedPasswordEnabled">shared_password_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#shared_password_enabled LabServiceLab#shared_password_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.usageQuota">usage_quota</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#usage_quota LabServiceLab#usage_quota}. |

---

##### `admin_user`<sup>Required</sup> <a name="admin_user" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.adminUser"></a>

```python
admin_user: LabServiceLabVirtualMachineAdminUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a>

admin_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#admin_user LabServiceLab#admin_user}

---

##### `image_reference`<sup>Required</sup> <a name="image_reference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.imageReference"></a>

```python
image_reference: LabServiceLabVirtualMachineImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a>

image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#image_reference LabServiceLab#image_reference}

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.sku"></a>

```python
sku: LabServiceLabVirtualMachineSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#sku LabServiceLab#sku}

---

##### `additional_capability_gpu_drivers_installed`<sup>Optional</sup> <a name="additional_capability_gpu_drivers_installed" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.additionalCapabilityGpuDriversInstalled"></a>

```python
additional_capability_gpu_drivers_installed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#additional_capability_gpu_drivers_installed LabServiceLab#additional_capability_gpu_drivers_installed}.

---

##### `create_option`<sup>Optional</sup> <a name="create_option" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.createOption"></a>

```python
create_option: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#create_option LabServiceLab#create_option}.

---

##### `non_admin_user`<sup>Optional</sup> <a name="non_admin_user" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.nonAdminUser"></a>

```python
non_admin_user: LabServiceLabVirtualMachineNonAdminUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a>

non_admin_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#non_admin_user LabServiceLab#non_admin_user}

---

##### `shared_password_enabled`<sup>Optional</sup> <a name="shared_password_enabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.sharedPasswordEnabled"></a>

```python
shared_password_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#shared_password_enabled LabServiceLab#shared_password_enabled}.

---

##### `usage_quota`<sup>Optional</sup> <a name="usage_quota" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.usageQuota"></a>

```python
usage_quota: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#usage_quota LabServiceLab#usage_quota}.

---

### LabServiceLabVirtualMachineAdminUser <a name="LabServiceLabVirtualMachineAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLabVirtualMachineAdminUser(
  password: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#password LabServiceLab#password}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#username LabServiceLab#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#password LabServiceLab#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#username LabServiceLab#username}.

---

### LabServiceLabVirtualMachineImageReference <a name="LabServiceLabVirtualMachineImageReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLabVirtualMachineImageReference(
  id: str = None,
  offer: str = None,
  publisher: str = None,
  sku: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#id LabServiceLab#id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.offer">offer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#offer LabServiceLab#offer}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#publisher LabServiceLab#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#sku LabServiceLab#sku}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#version LabServiceLab#version}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#id LabServiceLab#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `offer`<sup>Optional</sup> <a name="offer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.offer"></a>

```python
offer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#offer LabServiceLab#offer}.

---

##### `publisher`<sup>Optional</sup> <a name="publisher" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#publisher LabServiceLab#publisher}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#sku LabServiceLab#sku}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#version LabServiceLab#version}.

---

### LabServiceLabVirtualMachineNonAdminUser <a name="LabServiceLabVirtualMachineNonAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLabVirtualMachineNonAdminUser(
  password: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#password LabServiceLab#password}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#username LabServiceLab#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#password LabServiceLab#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#username LabServiceLab#username}.

---

### LabServiceLabVirtualMachineSku <a name="LabServiceLabVirtualMachineSku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLabVirtualMachineSku(
  capacity: typing.Union[int, float],
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#capacity LabServiceLab#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#name LabServiceLab#name}. |

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#capacity LabServiceLab#capacity}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#name LabServiceLab#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### LabServiceLabAutoShutdownOutputReference <a name="LabServiceLabAutoShutdownOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLabAutoShutdownOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetDisconnectDelay">reset_disconnect_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetIdleDelay">reset_idle_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetNoConnectDelay">reset_no_connect_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetShutdownOnIdle">reset_shutdown_on_idle</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disconnect_delay` <a name="reset_disconnect_delay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetDisconnectDelay"></a>

```python
def reset_disconnect_delay() -> None
```

##### `reset_idle_delay` <a name="reset_idle_delay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetIdleDelay"></a>

```python
def reset_idle_delay() -> None
```

##### `reset_no_connect_delay` <a name="reset_no_connect_delay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetNoConnectDelay"></a>

```python
def reset_no_connect_delay() -> None
```

##### `reset_shutdown_on_idle` <a name="reset_shutdown_on_idle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetShutdownOnIdle"></a>

```python
def reset_shutdown_on_idle() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.disconnectDelayInput">disconnect_delay_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.idleDelayInput">idle_delay_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.noConnectDelayInput">no_connect_delay_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.shutdownOnIdleInput">shutdown_on_idle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.disconnectDelay">disconnect_delay</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.idleDelay">idle_delay</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.noConnectDelay">no_connect_delay</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.shutdownOnIdle">shutdown_on_idle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disconnect_delay_input`<sup>Optional</sup> <a name="disconnect_delay_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.disconnectDelayInput"></a>

```python
disconnect_delay_input: str
```

- *Type:* str

---

##### `idle_delay_input`<sup>Optional</sup> <a name="idle_delay_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.idleDelayInput"></a>

```python
idle_delay_input: str
```

- *Type:* str

---

##### `no_connect_delay_input`<sup>Optional</sup> <a name="no_connect_delay_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.noConnectDelayInput"></a>

```python
no_connect_delay_input: str
```

- *Type:* str

---

##### `shutdown_on_idle_input`<sup>Optional</sup> <a name="shutdown_on_idle_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.shutdownOnIdleInput"></a>

```python
shutdown_on_idle_input: str
```

- *Type:* str

---

##### `disconnect_delay`<sup>Required</sup> <a name="disconnect_delay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.disconnectDelay"></a>

```python
disconnect_delay: str
```

- *Type:* str

---

##### `idle_delay`<sup>Required</sup> <a name="idle_delay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.idleDelay"></a>

```python
idle_delay: str
```

- *Type:* str

---

##### `no_connect_delay`<sup>Required</sup> <a name="no_connect_delay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.noConnectDelay"></a>

```python
no_connect_delay: str
```

- *Type:* str

---

##### `shutdown_on_idle`<sup>Required</sup> <a name="shutdown_on_idle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.shutdownOnIdle"></a>

```python
shutdown_on_idle: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.internalValue"></a>

```python
internal_value: LabServiceLabAutoShutdown
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a>

---


### LabServiceLabConnectionSettingOutputReference <a name="LabServiceLabConnectionSettingOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLabConnectionSettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resetClientRdpAccess">reset_client_rdp_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resetClientSshAccess">reset_client_ssh_access</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_rdp_access` <a name="reset_client_rdp_access" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resetClientRdpAccess"></a>

```python
def reset_client_rdp_access() -> None
```

##### `reset_client_ssh_access` <a name="reset_client_ssh_access" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resetClientSshAccess"></a>

```python
def reset_client_ssh_access() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientRdpAccessInput">client_rdp_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientSshAccessInput">client_ssh_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientRdpAccess">client_rdp_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientSshAccess">client_ssh_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_rdp_access_input`<sup>Optional</sup> <a name="client_rdp_access_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientRdpAccessInput"></a>

```python
client_rdp_access_input: str
```

- *Type:* str

---

##### `client_ssh_access_input`<sup>Optional</sup> <a name="client_ssh_access_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientSshAccessInput"></a>

```python
client_ssh_access_input: str
```

- *Type:* str

---

##### `client_rdp_access`<sup>Required</sup> <a name="client_rdp_access" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientRdpAccess"></a>

```python
client_rdp_access: str
```

- *Type:* str

---

##### `client_ssh_access`<sup>Required</sup> <a name="client_ssh_access" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientSshAccess"></a>

```python
client_ssh_access: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.internalValue"></a>

```python
internal_value: LabServiceLabConnectionSetting
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a>

---


### LabServiceLabNetworkOutputReference <a name="LabServiceLabNetworkOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLabNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.publicIpId">public_ip_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `public_ip_id`<sup>Required</sup> <a name="public_ip_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.publicIpId"></a>

```python
public_ip_id: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.internalValue"></a>

```python
internal_value: LabServiceLabNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a>

---


### LabServiceLabRosterOutputReference <a name="LabServiceLabRosterOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLabRosterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetActiveDirectoryGroupId">reset_active_directory_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLmsInstance">reset_lms_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiClientId">reset_lti_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiContextId">reset_lti_context_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiRosterEndpoint">reset_lti_roster_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_active_directory_group_id` <a name="reset_active_directory_group_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetActiveDirectoryGroupId"></a>

```python
def reset_active_directory_group_id() -> None
```

##### `reset_lms_instance` <a name="reset_lms_instance" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLmsInstance"></a>

```python
def reset_lms_instance() -> None
```

##### `reset_lti_client_id` <a name="reset_lti_client_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiClientId"></a>

```python
def reset_lti_client_id() -> None
```

##### `reset_lti_context_id` <a name="reset_lti_context_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiContextId"></a>

```python
def reset_lti_context_id() -> None
```

##### `reset_lti_roster_endpoint` <a name="reset_lti_roster_endpoint" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiRosterEndpoint"></a>

```python
def reset_lti_roster_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.activeDirectoryGroupIdInput">active_directory_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.lmsInstanceInput">lms_instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiClientIdInput">lti_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiContextIdInput">lti_context_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiRosterEndpointInput">lti_roster_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.activeDirectoryGroupId">active_directory_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.lmsInstance">lms_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiClientId">lti_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiContextId">lti_context_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiRosterEndpoint">lti_roster_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_directory_group_id_input`<sup>Optional</sup> <a name="active_directory_group_id_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.activeDirectoryGroupIdInput"></a>

```python
active_directory_group_id_input: str
```

- *Type:* str

---

##### `lms_instance_input`<sup>Optional</sup> <a name="lms_instance_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.lmsInstanceInput"></a>

```python
lms_instance_input: str
```

- *Type:* str

---

##### `lti_client_id_input`<sup>Optional</sup> <a name="lti_client_id_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiClientIdInput"></a>

```python
lti_client_id_input: str
```

- *Type:* str

---

##### `lti_context_id_input`<sup>Optional</sup> <a name="lti_context_id_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiContextIdInput"></a>

```python
lti_context_id_input: str
```

- *Type:* str

---

##### `lti_roster_endpoint_input`<sup>Optional</sup> <a name="lti_roster_endpoint_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiRosterEndpointInput"></a>

```python
lti_roster_endpoint_input: str
```

- *Type:* str

---

##### `active_directory_group_id`<sup>Required</sup> <a name="active_directory_group_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.activeDirectoryGroupId"></a>

```python
active_directory_group_id: str
```

- *Type:* str

---

##### `lms_instance`<sup>Required</sup> <a name="lms_instance" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.lmsInstance"></a>

```python
lms_instance: str
```

- *Type:* str

---

##### `lti_client_id`<sup>Required</sup> <a name="lti_client_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiClientId"></a>

```python
lti_client_id: str
```

- *Type:* str

---

##### `lti_context_id`<sup>Required</sup> <a name="lti_context_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiContextId"></a>

```python
lti_context_id: str
```

- *Type:* str

---

##### `lti_roster_endpoint`<sup>Required</sup> <a name="lti_roster_endpoint" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiRosterEndpoint"></a>

```python
lti_roster_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.internalValue"></a>

```python
internal_value: LabServiceLabRoster
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a>

---


### LabServiceLabSecurityOutputReference <a name="LabServiceLabSecurityOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLabSecurityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.registrationCode">registration_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.openAccessEnabledInput">open_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.openAccessEnabled">open_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `registration_code`<sup>Required</sup> <a name="registration_code" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.registrationCode"></a>

```python
registration_code: str
```

- *Type:* str

---

##### `open_access_enabled_input`<sup>Optional</sup> <a name="open_access_enabled_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.openAccessEnabledInput"></a>

```python
open_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `open_access_enabled`<sup>Required</sup> <a name="open_access_enabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.openAccessEnabled"></a>

```python
open_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.internalValue"></a>

```python
internal_value: LabServiceLabSecurity
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a>

---


### LabServiceLabTimeoutsOutputReference <a name="LabServiceLabTimeoutsOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLabTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LabServiceLabTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a>]

---


### LabServiceLabVirtualMachineAdminUserOutputReference <a name="LabServiceLabVirtualMachineAdminUserOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.internalValue"></a>

```python
internal_value: LabServiceLabVirtualMachineAdminUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a>

---


### LabServiceLabVirtualMachineImageReferenceOutputReference <a name="LabServiceLabVirtualMachineImageReferenceOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetOffer">reset_offer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetPublisher">reset_publisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetSku">reset_sku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_offer` <a name="reset_offer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetOffer"></a>

```python
def reset_offer() -> None
```

##### `reset_publisher` <a name="reset_publisher" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetPublisher"></a>

```python
def reset_publisher() -> None
```

##### `reset_sku` <a name="reset_sku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetSku"></a>

```python
def reset_sku() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.offerInput">offer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.publisherInput">publisher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.offer">offer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `offer_input`<sup>Optional</sup> <a name="offer_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.offerInput"></a>

```python
offer_input: str
```

- *Type:* str

---

##### `publisher_input`<sup>Optional</sup> <a name="publisher_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.publisherInput"></a>

```python
publisher_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.offer"></a>

```python
offer: str
```

- *Type:* str

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.internalValue"></a>

```python
internal_value: LabServiceLabVirtualMachineImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a>

---


### LabServiceLabVirtualMachineNonAdminUserOutputReference <a name="LabServiceLabVirtualMachineNonAdminUserOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.internalValue"></a>

```python
internal_value: LabServiceLabVirtualMachineNonAdminUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a>

---


### LabServiceLabVirtualMachineOutputReference <a name="LabServiceLabVirtualMachineOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLabVirtualMachineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putAdminUser">put_admin_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putImageReference">put_image_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putNonAdminUser">put_non_admin_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putSku">put_sku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetAdditionalCapabilityGpuDriversInstalled">reset_additional_capability_gpu_drivers_installed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetCreateOption">reset_create_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetNonAdminUser">reset_non_admin_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetSharedPasswordEnabled">reset_shared_password_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetUsageQuota">reset_usage_quota</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_admin_user` <a name="put_admin_user" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putAdminUser"></a>

```python
def put_admin_user(
  password: str,
  username: str
) -> None
```

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putAdminUser.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#password LabServiceLab#password}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putAdminUser.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#username LabServiceLab#username}.

---

##### `put_image_reference` <a name="put_image_reference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putImageReference"></a>

```python
def put_image_reference(
  id: str = None,
  offer: str = None,
  publisher: str = None,
  sku: str = None,
  version: str = None
) -> None
```

###### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putImageReference.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#id LabServiceLab#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `offer`<sup>Optional</sup> <a name="offer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putImageReference.parameter.offer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#offer LabServiceLab#offer}.

---

###### `publisher`<sup>Optional</sup> <a name="publisher" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putImageReference.parameter.publisher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#publisher LabServiceLab#publisher}.

---

###### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putImageReference.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#sku LabServiceLab#sku}.

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putImageReference.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#version LabServiceLab#version}.

---

##### `put_non_admin_user` <a name="put_non_admin_user" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putNonAdminUser"></a>

```python
def put_non_admin_user(
  password: str,
  username: str
) -> None
```

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putNonAdminUser.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#password LabServiceLab#password}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putNonAdminUser.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#username LabServiceLab#username}.

---

##### `put_sku` <a name="put_sku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putSku"></a>

```python
def put_sku(
  capacity: typing.Union[int, float],
  name: str
) -> None
```

###### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putSku.parameter.capacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#capacity LabServiceLab#capacity}.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putSku.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/lab_service_lab#name LabServiceLab#name}.

---

##### `reset_additional_capability_gpu_drivers_installed` <a name="reset_additional_capability_gpu_drivers_installed" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetAdditionalCapabilityGpuDriversInstalled"></a>

```python
def reset_additional_capability_gpu_drivers_installed() -> None
```

##### `reset_create_option` <a name="reset_create_option" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetCreateOption"></a>

```python
def reset_create_option() -> None
```

##### `reset_non_admin_user` <a name="reset_non_admin_user" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetNonAdminUser"></a>

```python
def reset_non_admin_user() -> None
```

##### `reset_shared_password_enabled` <a name="reset_shared_password_enabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetSharedPasswordEnabled"></a>

```python
def reset_shared_password_enabled() -> None
```

##### `reset_usage_quota` <a name="reset_usage_quota" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetUsageQuota"></a>

```python
def reset_usage_quota() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.adminUser">admin_user</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference">LabServiceLabVirtualMachineAdminUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.imageReference">image_reference</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference">LabServiceLabVirtualMachineImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.nonAdminUser">non_admin_user</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference">LabServiceLabVirtualMachineNonAdminUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference">LabServiceLabVirtualMachineSkuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.additionalCapabilityGpuDriversInstalledInput">additional_capability_gpu_drivers_installed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.adminUserInput">admin_user_input</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.createOptionInput">create_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.imageReferenceInput">image_reference_input</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.nonAdminUserInput">non_admin_user_input</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sharedPasswordEnabledInput">shared_password_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.skuInput">sku_input</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.usageQuotaInput">usage_quota_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.additionalCapabilityGpuDriversInstalled">additional_capability_gpu_drivers_installed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.createOption">create_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sharedPasswordEnabled">shared_password_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.usageQuota">usage_quota</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_user`<sup>Required</sup> <a name="admin_user" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.adminUser"></a>

```python
admin_user: LabServiceLabVirtualMachineAdminUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference">LabServiceLabVirtualMachineAdminUserOutputReference</a>

---

##### `image_reference`<sup>Required</sup> <a name="image_reference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.imageReference"></a>

```python
image_reference: LabServiceLabVirtualMachineImageReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference">LabServiceLabVirtualMachineImageReferenceOutputReference</a>

---

##### `non_admin_user`<sup>Required</sup> <a name="non_admin_user" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.nonAdminUser"></a>

```python
non_admin_user: LabServiceLabVirtualMachineNonAdminUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference">LabServiceLabVirtualMachineNonAdminUserOutputReference</a>

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sku"></a>

```python
sku: LabServiceLabVirtualMachineSkuOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference">LabServiceLabVirtualMachineSkuOutputReference</a>

---

##### `additional_capability_gpu_drivers_installed_input`<sup>Optional</sup> <a name="additional_capability_gpu_drivers_installed_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.additionalCapabilityGpuDriversInstalledInput"></a>

```python
additional_capability_gpu_drivers_installed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `admin_user_input`<sup>Optional</sup> <a name="admin_user_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.adminUserInput"></a>

```python
admin_user_input: LabServiceLabVirtualMachineAdminUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a>

---

##### `create_option_input`<sup>Optional</sup> <a name="create_option_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.createOptionInput"></a>

```python
create_option_input: str
```

- *Type:* str

---

##### `image_reference_input`<sup>Optional</sup> <a name="image_reference_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.imageReferenceInput"></a>

```python
image_reference_input: LabServiceLabVirtualMachineImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a>

---

##### `non_admin_user_input`<sup>Optional</sup> <a name="non_admin_user_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.nonAdminUserInput"></a>

```python
non_admin_user_input: LabServiceLabVirtualMachineNonAdminUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a>

---

##### `shared_password_enabled_input`<sup>Optional</sup> <a name="shared_password_enabled_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sharedPasswordEnabledInput"></a>

```python
shared_password_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.skuInput"></a>

```python
sku_input: LabServiceLabVirtualMachineSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a>

---

##### `usage_quota_input`<sup>Optional</sup> <a name="usage_quota_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.usageQuotaInput"></a>

```python
usage_quota_input: str
```

- *Type:* str

---

##### `additional_capability_gpu_drivers_installed`<sup>Required</sup> <a name="additional_capability_gpu_drivers_installed" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.additionalCapabilityGpuDriversInstalled"></a>

```python
additional_capability_gpu_drivers_installed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_option`<sup>Required</sup> <a name="create_option" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.createOption"></a>

```python
create_option: str
```

- *Type:* str

---

##### `shared_password_enabled`<sup>Required</sup> <a name="shared_password_enabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sharedPasswordEnabled"></a>

```python
shared_password_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `usage_quota`<sup>Required</sup> <a name="usage_quota" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.usageQuota"></a>

```python
usage_quota: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.internalValue"></a>

```python
internal_value: LabServiceLabVirtualMachine
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a>

---


### LabServiceLabVirtualMachineSkuOutputReference <a name="LabServiceLabVirtualMachineSkuOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lab_service_lab

labServiceLab.LabServiceLabVirtualMachineSkuOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.capacityInput">capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.capacityInput"></a>

```python
capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.internalValue"></a>

```python
internal_value: LabServiceLabVirtualMachineSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a>

---



