# `dnsSrvRecord` Submodule <a name="`dnsSrvRecord` Submodule" id="@cdktf/provider-azurerm.dnsSrvRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsSrvRecord <a name="DnsSrvRecord" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record azurerm_dns_srv_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dns_srv_record

dnsSrvRecord.DnsSrvRecord(
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
  record: typing.Union[IResolvable, typing.List[DnsSrvRecordRecord]],
  resource_group_name: str,
  ttl: typing.Union[int, float],
  zone_name: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DnsSrvRecordTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#name DnsSrvRecord#name}. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.record">record</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecord">DnsSrvRecordRecord</a>]]</code> | record block. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#resource_group_name DnsSrvRecord#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#ttl DnsSrvRecord#ttl}. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.zoneName">zone_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#zone_name DnsSrvRecord#zone_name}. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#id DnsSrvRecord#id}. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#tags DnsSrvRecord#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeouts">DnsSrvRecordTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#name DnsSrvRecord#name}.

---

##### `record`<sup>Required</sup> <a name="record" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.record"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecord">DnsSrvRecordRecord</a>]]

record block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#record DnsSrvRecord#record}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#resource_group_name DnsSrvRecord#resource_group_name}.

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#ttl DnsSrvRecord#ttl}.

---

##### `zone_name`<sup>Required</sup> <a name="zone_name" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.zoneName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#zone_name DnsSrvRecord#zone_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#id DnsSrvRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#tags DnsSrvRecord#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeouts">DnsSrvRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#timeouts DnsSrvRecord#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.putRecord">put_record</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_record` <a name="put_record" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.putRecord"></a>

```python
def put_record(
  value: typing.Union[IResolvable, typing.List[DnsSrvRecordRecord]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.putRecord.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecord">DnsSrvRecordRecord</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#create DnsSrvRecord#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#delete DnsSrvRecord#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#read DnsSrvRecord#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#update DnsSrvRecord#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DnsSrvRecord resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import dns_srv_record

dnsSrvRecord.DnsSrvRecord.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import dns_srv_record

dnsSrvRecord.DnsSrvRecord.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import dns_srv_record

dnsSrvRecord.DnsSrvRecord.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import dns_srv_record

dnsSrvRecord.DnsSrvRecord.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DnsSrvRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DnsSrvRecord to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DnsSrvRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DnsSrvRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.record">record</a></code> | <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList">DnsSrvRecordRecordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference">DnsSrvRecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.recordInput">record_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecord">DnsSrvRecordRecord</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeouts">DnsSrvRecordTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.zoneNameInput">zone_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.zoneName">zone_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `record`<sup>Required</sup> <a name="record" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.record"></a>

```python
record: DnsSrvRecordRecordList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList">DnsSrvRecordRecordList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.timeouts"></a>

```python
timeouts: DnsSrvRecordTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference">DnsSrvRecordTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `record_input`<sup>Optional</sup> <a name="record_input" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.recordInput"></a>

```python
record_input: typing.Union[IResolvable, typing.List[DnsSrvRecordRecord]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecord">DnsSrvRecordRecord</a>]]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DnsSrvRecordTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeouts">DnsSrvRecordTimeouts</a>]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_name_input`<sup>Optional</sup> <a name="zone_name_input" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.zoneNameInput"></a>

```python
zone_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_name`<sup>Required</sup> <a name="zone_name" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.zoneName"></a>

```python
zone_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecord.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DnsSrvRecordConfig <a name="DnsSrvRecordConfig" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dns_srv_record

dnsSrvRecord.DnsSrvRecordConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  record: typing.Union[IResolvable, typing.List[DnsSrvRecordRecord]],
  resource_group_name: str,
  ttl: typing.Union[int, float],
  zone_name: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DnsSrvRecordTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#name DnsSrvRecord#name}. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.record">record</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecord">DnsSrvRecordRecord</a>]]</code> | record block. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#resource_group_name DnsSrvRecord#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#ttl DnsSrvRecord#ttl}. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.zoneName">zone_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#zone_name DnsSrvRecord#zone_name}. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#id DnsSrvRecord#id}. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#tags DnsSrvRecord#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeouts">DnsSrvRecordTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#name DnsSrvRecord#name}.

---

##### `record`<sup>Required</sup> <a name="record" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.record"></a>

```python
record: typing.Union[IResolvable, typing.List[DnsSrvRecordRecord]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecord">DnsSrvRecordRecord</a>]]

record block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#record DnsSrvRecord#record}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#resource_group_name DnsSrvRecord#resource_group_name}.

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#ttl DnsSrvRecord#ttl}.

---

##### `zone_name`<sup>Required</sup> <a name="zone_name" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.zoneName"></a>

```python
zone_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#zone_name DnsSrvRecord#zone_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#id DnsSrvRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#tags DnsSrvRecord#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordConfig.property.timeouts"></a>

```python
timeouts: DnsSrvRecordTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeouts">DnsSrvRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#timeouts DnsSrvRecord#timeouts}

---

### DnsSrvRecordRecord <a name="DnsSrvRecordRecord" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecord"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecord.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dns_srv_record

dnsSrvRecord.DnsSrvRecordRecord(
  port: typing.Union[int, float],
  priority: typing.Union[int, float],
  target: str,
  weight: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecord.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#port DnsSrvRecord#port}. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecord.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#priority DnsSrvRecord#priority}. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecord.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#target DnsSrvRecord#target}. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecord.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#weight DnsSrvRecord#weight}. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecord.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#port DnsSrvRecord#port}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecord.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#priority DnsSrvRecord#priority}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecord.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#target DnsSrvRecord#target}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecord.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#weight DnsSrvRecord#weight}.

---

### DnsSrvRecordTimeouts <a name="DnsSrvRecordTimeouts" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dns_srv_record

dnsSrvRecord.DnsSrvRecordTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#create DnsSrvRecord#create}. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#delete DnsSrvRecord#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#read DnsSrvRecord#read}. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#update DnsSrvRecord#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#create DnsSrvRecord#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#delete DnsSrvRecord#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#read DnsSrvRecord#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/dns_srv_record#update DnsSrvRecord#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsSrvRecordRecordList <a name="DnsSrvRecordRecordList" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dns_srv_record

dnsSrvRecord.DnsSrvRecordRecordList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DnsSrvRecordRecordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecord">DnsSrvRecordRecord</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DnsSrvRecordRecord]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecord">DnsSrvRecordRecord</a>]]

---


### DnsSrvRecordRecordOutputReference <a name="DnsSrvRecordRecordOutputReference" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dns_srv_record

dnsSrvRecord.DnsSrvRecordRecordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecord">DnsSrvRecordRecord</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecordOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsSrvRecordRecord]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordRecord">DnsSrvRecordRecord</a>]

---


### DnsSrvRecordTimeoutsOutputReference <a name="DnsSrvRecordTimeoutsOutputReference" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dns_srv_record

dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeouts">DnsSrvRecordTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DnsSrvRecordTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dnsSrvRecord.DnsSrvRecordTimeouts">DnsSrvRecordTimeouts</a>]

---



