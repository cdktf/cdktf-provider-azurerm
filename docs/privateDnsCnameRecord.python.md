# `privateDnsCnameRecord` Submodule <a name="`privateDnsCnameRecord` Submodule" id="@cdktf/provider-azurerm.privateDnsCnameRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateDnsCnameRecord <a name="PrivateDnsCnameRecord" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record azurerm_private_dns_cname_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_cname_record

privateDnsCnameRecord.PrivateDnsCnameRecord(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  record: str,
  resource_group_name: str,
  ttl: typing.Union[int, float],
  zone_name: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: PrivateDnsCnameRecordTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#name PrivateDnsCnameRecord#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.record">record</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#record PrivateDnsCnameRecord#record}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#resource_group_name PrivateDnsCnameRecord#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#ttl PrivateDnsCnameRecord#ttl}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.zoneName">zone_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#zone_name PrivateDnsCnameRecord#zone_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#id PrivateDnsCnameRecord#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#tags PrivateDnsCnameRecord#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeouts">PrivateDnsCnameRecordTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#name PrivateDnsCnameRecord#name}.

---

##### `record`<sup>Required</sup> <a name="record" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.record"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#record PrivateDnsCnameRecord#record}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#resource_group_name PrivateDnsCnameRecord#resource_group_name}.

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#ttl PrivateDnsCnameRecord#ttl}.

---

##### `zone_name`<sup>Required</sup> <a name="zone_name" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.zoneName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#zone_name PrivateDnsCnameRecord#zone_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#id PrivateDnsCnameRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#tags PrivateDnsCnameRecord#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeouts">PrivateDnsCnameRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#timeouts PrivateDnsCnameRecord#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#create PrivateDnsCnameRecord#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#delete PrivateDnsCnameRecord#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#read PrivateDnsCnameRecord#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#update PrivateDnsCnameRecord#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PrivateDnsCnameRecord resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_cname_record

privateDnsCnameRecord.PrivateDnsCnameRecord.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_cname_record

privateDnsCnameRecord.PrivateDnsCnameRecord.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_cname_record

privateDnsCnameRecord.PrivateDnsCnameRecord.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_cname_record

privateDnsCnameRecord.PrivateDnsCnameRecord.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PrivateDnsCnameRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PrivateDnsCnameRecord to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PrivateDnsCnameRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrivateDnsCnameRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference">PrivateDnsCnameRecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.recordInput">record_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeouts">PrivateDnsCnameRecordTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.zoneNameInput">zone_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.record">record</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.zoneName">zone_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.timeouts"></a>

```python
timeouts: PrivateDnsCnameRecordTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference">PrivateDnsCnameRecordTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `record_input`<sup>Optional</sup> <a name="record_input" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.recordInput"></a>

```python
record_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | PrivateDnsCnameRecordTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeouts">PrivateDnsCnameRecordTimeouts</a>

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_name_input`<sup>Optional</sup> <a name="zone_name_input" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.zoneNameInput"></a>

```python
zone_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `record`<sup>Required</sup> <a name="record" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.record"></a>

```python
record: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_name`<sup>Required</sup> <a name="zone_name" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.zoneName"></a>

```python
zone_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecord.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateDnsCnameRecordConfig <a name="PrivateDnsCnameRecordConfig" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_cname_record

privateDnsCnameRecord.PrivateDnsCnameRecordConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  record: str,
  resource_group_name: str,
  ttl: typing.Union[int, float],
  zone_name: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: PrivateDnsCnameRecordTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#name PrivateDnsCnameRecord#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.record">record</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#record PrivateDnsCnameRecord#record}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#resource_group_name PrivateDnsCnameRecord#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#ttl PrivateDnsCnameRecord#ttl}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.zoneName">zone_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#zone_name PrivateDnsCnameRecord#zone_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#id PrivateDnsCnameRecord#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#tags PrivateDnsCnameRecord#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeouts">PrivateDnsCnameRecordTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#name PrivateDnsCnameRecord#name}.

---

##### `record`<sup>Required</sup> <a name="record" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.record"></a>

```python
record: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#record PrivateDnsCnameRecord#record}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#resource_group_name PrivateDnsCnameRecord#resource_group_name}.

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#ttl PrivateDnsCnameRecord#ttl}.

---

##### `zone_name`<sup>Required</sup> <a name="zone_name" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.zoneName"></a>

```python
zone_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#zone_name PrivateDnsCnameRecord#zone_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#id PrivateDnsCnameRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#tags PrivateDnsCnameRecord#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordConfig.property.timeouts"></a>

```python
timeouts: PrivateDnsCnameRecordTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeouts">PrivateDnsCnameRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#timeouts PrivateDnsCnameRecord#timeouts}

---

### PrivateDnsCnameRecordTimeouts <a name="PrivateDnsCnameRecordTimeouts" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_cname_record

privateDnsCnameRecord.PrivateDnsCnameRecordTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#create PrivateDnsCnameRecord#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#delete PrivateDnsCnameRecord#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#read PrivateDnsCnameRecord#read}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#update PrivateDnsCnameRecord#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#create PrivateDnsCnameRecord#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#delete PrivateDnsCnameRecord#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#read PrivateDnsCnameRecord#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/private_dns_cname_record#update PrivateDnsCnameRecord#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateDnsCnameRecordTimeoutsOutputReference <a name="PrivateDnsCnameRecordTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_cname_record

privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeouts">PrivateDnsCnameRecordTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PrivateDnsCnameRecordTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateDnsCnameRecord.PrivateDnsCnameRecordTimeouts">PrivateDnsCnameRecordTimeouts</a>

---



