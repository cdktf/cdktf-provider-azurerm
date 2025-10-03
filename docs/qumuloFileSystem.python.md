# `qumuloFileSystem` Submodule <a name="`qumuloFileSystem` Submodule" id="@cdktf/provider-azurerm.qumuloFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QumuloFileSystem <a name="QumuloFileSystem" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system azurerm_qumulo_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import qumulo_file_system

qumuloFileSystem.QumuloFileSystem(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  admin_password: str,
  email: str,
  location: str,
  name: str,
  resource_group_name: str,
  storage_sku: str,
  subnet_id: str,
  zone: str,
  id: str = None,
  offer_id: str = None,
  plan_id: str = None,
  publisher_id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: QumuloFileSystemTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.adminPassword">admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#admin_password QumuloFileSystem#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#email QumuloFileSystem#email}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#location QumuloFileSystem#location}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#name QumuloFileSystem#name}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#resource_group_name QumuloFileSystem#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.storageSku">storage_sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#storage_sku QumuloFileSystem#storage_sku}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#subnet_id QumuloFileSystem#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#zone QumuloFileSystem#zone}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#id QumuloFileSystem#id}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.offerId">offer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#offer_id QumuloFileSystem#offer_id}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.planId">plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#plan_id QumuloFileSystem#plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.publisherId">publisher_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#publisher_id QumuloFileSystem#publisher_id}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#tags QumuloFileSystem#tags}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts">QumuloFileSystemTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.adminPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#admin_password QumuloFileSystem#admin_password}.

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#email QumuloFileSystem#email}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#location QumuloFileSystem#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#name QumuloFileSystem#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#resource_group_name QumuloFileSystem#resource_group_name}.

---

##### `storage_sku`<sup>Required</sup> <a name="storage_sku" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.storageSku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#storage_sku QumuloFileSystem#storage_sku}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#subnet_id QumuloFileSystem#subnet_id}.

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.zone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#zone QumuloFileSystem#zone}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#id QumuloFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `offer_id`<sup>Optional</sup> <a name="offer_id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.offerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#offer_id QumuloFileSystem#offer_id}.

---

##### `plan_id`<sup>Optional</sup> <a name="plan_id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.planId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#plan_id QumuloFileSystem#plan_id}.

---

##### `publisher_id`<sup>Optional</sup> <a name="publisher_id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.publisherId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#publisher_id QumuloFileSystem#publisher_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#tags QumuloFileSystem#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts">QumuloFileSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#timeouts QumuloFileSystem#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetOfferId">reset_offer_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetPlanId">reset_plan_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetPublisherId">reset_publisher_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#create QumuloFileSystem#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#delete QumuloFileSystem#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#read QumuloFileSystem#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#update QumuloFileSystem#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_offer_id` <a name="reset_offer_id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetOfferId"></a>

```python
def reset_offer_id() -> None
```

##### `reset_plan_id` <a name="reset_plan_id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetPlanId"></a>

```python
def reset_plan_id() -> None
```

##### `reset_publisher_id` <a name="reset_publisher_id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetPublisherId"></a>

```python
def reset_publisher_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a QumuloFileSystem resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import qumulo_file_system

qumuloFileSystem.QumuloFileSystem.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import qumulo_file_system

qumuloFileSystem.QumuloFileSystem.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import qumulo_file_system

qumuloFileSystem.QumuloFileSystem.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import qumulo_file_system

qumuloFileSystem.QumuloFileSystem.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a QumuloFileSystem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the QumuloFileSystem to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing QumuloFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the QumuloFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference">QumuloFileSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.adminPasswordInput">admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.offerIdInput">offer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.planIdInput">plan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.publisherIdInput">publisher_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.storageSkuInput">storage_sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts">QumuloFileSystemTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.offerId">offer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.planId">plan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.publisherId">publisher_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.storageSku">storage_sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.timeouts"></a>

```python
timeouts: QumuloFileSystemTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference">QumuloFileSystemTimeoutsOutputReference</a>

---

##### `admin_password_input`<sup>Optional</sup> <a name="admin_password_input" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.adminPasswordInput"></a>

```python
admin_password_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `offer_id_input`<sup>Optional</sup> <a name="offer_id_input" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.offerIdInput"></a>

```python
offer_id_input: str
```

- *Type:* str

---

##### `plan_id_input`<sup>Optional</sup> <a name="plan_id_input" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.planIdInput"></a>

```python
plan_id_input: str
```

- *Type:* str

---

##### `publisher_id_input`<sup>Optional</sup> <a name="publisher_id_input" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.publisherIdInput"></a>

```python
publisher_id_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `storage_sku_input`<sup>Optional</sup> <a name="storage_sku_input" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.storageSkuInput"></a>

```python
storage_sku_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, QumuloFileSystemTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts">QumuloFileSystemTimeouts</a>]

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `offer_id`<sup>Required</sup> <a name="offer_id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.offerId"></a>

```python
offer_id: str
```

- *Type:* str

---

##### `plan_id`<sup>Required</sup> <a name="plan_id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.planId"></a>

```python
plan_id: str
```

- *Type:* str

---

##### `publisher_id`<sup>Required</sup> <a name="publisher_id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.publisherId"></a>

```python
publisher_id: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `storage_sku`<sup>Required</sup> <a name="storage_sku" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.storageSku"></a>

```python
storage_sku: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystem.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QumuloFileSystemConfig <a name="QumuloFileSystemConfig" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import qumulo_file_system

qumuloFileSystem.QumuloFileSystemConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  admin_password: str,
  email: str,
  location: str,
  name: str,
  resource_group_name: str,
  storage_sku: str,
  subnet_id: str,
  zone: str,
  id: str = None,
  offer_id: str = None,
  plan_id: str = None,
  publisher_id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: QumuloFileSystemTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.adminPassword">admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#admin_password QumuloFileSystem#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#email QumuloFileSystem#email}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#location QumuloFileSystem#location}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#name QumuloFileSystem#name}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#resource_group_name QumuloFileSystem#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.storageSku">storage_sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#storage_sku QumuloFileSystem#storage_sku}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#subnet_id QumuloFileSystem#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.zone">zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#zone QumuloFileSystem#zone}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#id QumuloFileSystem#id}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.offerId">offer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#offer_id QumuloFileSystem#offer_id}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.planId">plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#plan_id QumuloFileSystem#plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.publisherId">publisher_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#publisher_id QumuloFileSystem#publisher_id}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#tags QumuloFileSystem#tags}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts">QumuloFileSystemTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#admin_password QumuloFileSystem#admin_password}.

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#email QumuloFileSystem#email}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#location QumuloFileSystem#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#name QumuloFileSystem#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#resource_group_name QumuloFileSystem#resource_group_name}.

---

##### `storage_sku`<sup>Required</sup> <a name="storage_sku" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.storageSku"></a>

```python
storage_sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#storage_sku QumuloFileSystem#storage_sku}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#subnet_id QumuloFileSystem#subnet_id}.

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#zone QumuloFileSystem#zone}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#id QumuloFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `offer_id`<sup>Optional</sup> <a name="offer_id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.offerId"></a>

```python
offer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#offer_id QumuloFileSystem#offer_id}.

---

##### `plan_id`<sup>Optional</sup> <a name="plan_id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.planId"></a>

```python
plan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#plan_id QumuloFileSystem#plan_id}.

---

##### `publisher_id`<sup>Optional</sup> <a name="publisher_id" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.publisherId"></a>

```python
publisher_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#publisher_id QumuloFileSystem#publisher_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#tags QumuloFileSystem#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemConfig.property.timeouts"></a>

```python
timeouts: QumuloFileSystemTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts">QumuloFileSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#timeouts QumuloFileSystem#timeouts}

---

### QumuloFileSystemTimeouts <a name="QumuloFileSystemTimeouts" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import qumulo_file_system

qumuloFileSystem.QumuloFileSystemTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#create QumuloFileSystem#create}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#delete QumuloFileSystem#delete}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#read QumuloFileSystem#read}. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#update QumuloFileSystem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#create QumuloFileSystem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#delete QumuloFileSystem#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#read QumuloFileSystem#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/qumulo_file_system#update QumuloFileSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### QumuloFileSystemTimeoutsOutputReference <a name="QumuloFileSystemTimeoutsOutputReference" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import qumulo_file_system

qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts">QumuloFileSystemTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, QumuloFileSystemTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.qumuloFileSystem.QumuloFileSystemTimeouts">QumuloFileSystemTimeouts</a>]

---



