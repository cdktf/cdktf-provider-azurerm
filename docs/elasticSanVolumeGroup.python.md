# `elasticSanVolumeGroup` Submodule <a name="`elasticSanVolumeGroup` Submodule" id="@cdktf/provider-azurerm.elasticSanVolumeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticSanVolumeGroup <a name="ElasticSanVolumeGroup" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group azurerm_elastic_san_volume_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import elastic_san_volume_group

elasticSanVolumeGroup.ElasticSanVolumeGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  elastic_san_id: str,
  name: str,
  encryption: ElasticSanVolumeGroupEncryption = None,
  encryption_type: str = None,
  id: str = None,
  identity: ElasticSanVolumeGroupIdentity = None,
  network_rule: typing.Union[IResolvable, typing.List[ElasticSanVolumeGroupNetworkRule]] = None,
  protocol_type: str = None,
  timeouts: ElasticSanVolumeGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.elasticSanId">elastic_san_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#elastic_san_id ElasticSanVolumeGroup#elastic_san_id}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#name ElasticSanVolumeGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption">ElasticSanVolumeGroupEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.encryptionType">encryption_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#encryption_type ElasticSanVolumeGroup#encryption_type}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#id ElasticSanVolumeGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity">ElasticSanVolumeGroupIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.networkRule">network_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule">ElasticSanVolumeGroupNetworkRule</a>]]</code> | network_rule block. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.protocolType">protocol_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#protocol_type ElasticSanVolumeGroup#protocol_type}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts">ElasticSanVolumeGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `elastic_san_id`<sup>Required</sup> <a name="elastic_san_id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.elasticSanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#elastic_san_id ElasticSanVolumeGroup#elastic_san_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#name ElasticSanVolumeGroup#name}.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.encryption"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption">ElasticSanVolumeGroupEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#encryption ElasticSanVolumeGroup#encryption}

---

##### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.encryptionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#encryption_type ElasticSanVolumeGroup#encryption_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#id ElasticSanVolumeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity">ElasticSanVolumeGroupIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#identity ElasticSanVolumeGroup#identity}

---

##### `network_rule`<sup>Optional</sup> <a name="network_rule" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.networkRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule">ElasticSanVolumeGroupNetworkRule</a>]]

network_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#network_rule ElasticSanVolumeGroup#network_rule}

---

##### `protocol_type`<sup>Optional</sup> <a name="protocol_type" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.protocolType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#protocol_type ElasticSanVolumeGroup#protocol_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts">ElasticSanVolumeGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#timeouts ElasticSanVolumeGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putEncryption">put_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putNetworkRule">put_network_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetEncryptionType">reset_encryption_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetNetworkRule">reset_network_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetProtocolType">reset_protocol_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption` <a name="put_encryption" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putEncryption"></a>

```python
def put_encryption(
  key_vault_key_id: str,
  user_assigned_identity_id: str = None
) -> None
```

###### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putEncryption.parameter.keyVaultKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#key_vault_key_id ElasticSanVolumeGroup#key_vault_key_id}.

---

###### `user_assigned_identity_id`<sup>Optional</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putEncryption.parameter.userAssignedIdentityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#user_assigned_identity_id ElasticSanVolumeGroup#user_assigned_identity_id}.

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#type ElasticSanVolumeGroup#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#identity_ids ElasticSanVolumeGroup#identity_ids}.

---

##### `put_network_rule` <a name="put_network_rule" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putNetworkRule"></a>

```python
def put_network_rule(
  value: typing.Union[IResolvable, typing.List[ElasticSanVolumeGroupNetworkRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putNetworkRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule">ElasticSanVolumeGroupNetworkRule</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#create ElasticSanVolumeGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#delete ElasticSanVolumeGroup#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#read ElasticSanVolumeGroup#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#update ElasticSanVolumeGroup#update}.

---

##### `reset_encryption` <a name="reset_encryption" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_encryption_type` <a name="reset_encryption_type" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetEncryptionType"></a>

```python
def reset_encryption_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_network_rule` <a name="reset_network_rule" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetNetworkRule"></a>

```python
def reset_network_rule() -> None
```

##### `reset_protocol_type` <a name="reset_protocol_type" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetProtocolType"></a>

```python
def reset_protocol_type() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ElasticSanVolumeGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import elastic_san_volume_group

elasticSanVolumeGroup.ElasticSanVolumeGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import elastic_san_volume_group

elasticSanVolumeGroup.ElasticSanVolumeGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import elastic_san_volume_group

elasticSanVolumeGroup.ElasticSanVolumeGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import elastic_san_volume_group

elasticSanVolumeGroup.ElasticSanVolumeGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ElasticSanVolumeGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ElasticSanVolumeGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ElasticSanVolumeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ElasticSanVolumeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference">ElasticSanVolumeGroupEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference">ElasticSanVolumeGroupIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.networkRule">network_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList">ElasticSanVolumeGroupNetworkRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference">ElasticSanVolumeGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.elasticSanIdInput">elastic_san_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.encryptionInput">encryption_input</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption">ElasticSanVolumeGroupEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.encryptionTypeInput">encryption_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity">ElasticSanVolumeGroupIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.networkRuleInput">network_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule">ElasticSanVolumeGroupNetworkRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.protocolTypeInput">protocol_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts">ElasticSanVolumeGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.elasticSanId">elastic_san_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.protocolType">protocol_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.encryption"></a>

```python
encryption: ElasticSanVolumeGroupEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference">ElasticSanVolumeGroupEncryptionOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.identity"></a>

```python
identity: ElasticSanVolumeGroupIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference">ElasticSanVolumeGroupIdentityOutputReference</a>

---

##### `network_rule`<sup>Required</sup> <a name="network_rule" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.networkRule"></a>

```python
network_rule: ElasticSanVolumeGroupNetworkRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList">ElasticSanVolumeGroupNetworkRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.timeouts"></a>

```python
timeouts: ElasticSanVolumeGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference">ElasticSanVolumeGroupTimeoutsOutputReference</a>

---

##### `elastic_san_id_input`<sup>Optional</sup> <a name="elastic_san_id_input" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.elasticSanIdInput"></a>

```python
elastic_san_id_input: str
```

- *Type:* str

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.encryptionInput"></a>

```python
encryption_input: ElasticSanVolumeGroupEncryption
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption">ElasticSanVolumeGroupEncryption</a>

---

##### `encryption_type_input`<sup>Optional</sup> <a name="encryption_type_input" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.encryptionTypeInput"></a>

```python
encryption_type_input: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.identityInput"></a>

```python
identity_input: ElasticSanVolumeGroupIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity">ElasticSanVolumeGroupIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_rule_input`<sup>Optional</sup> <a name="network_rule_input" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.networkRuleInput"></a>

```python
network_rule_input: typing.Union[IResolvable, typing.List[ElasticSanVolumeGroupNetworkRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule">ElasticSanVolumeGroupNetworkRule</a>]]

---

##### `protocol_type_input`<sup>Optional</sup> <a name="protocol_type_input" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.protocolTypeInput"></a>

```python
protocol_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ElasticSanVolumeGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts">ElasticSanVolumeGroupTimeouts</a>]

---

##### `elastic_san_id`<sup>Required</sup> <a name="elastic_san_id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.elasticSanId"></a>

```python
elastic_san_id: str
```

- *Type:* str

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocol_type`<sup>Required</sup> <a name="protocol_type" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.protocolType"></a>

```python
protocol_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticSanVolumeGroupConfig <a name="ElasticSanVolumeGroupConfig" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import elastic_san_volume_group

elasticSanVolumeGroup.ElasticSanVolumeGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  elastic_san_id: str,
  name: str,
  encryption: ElasticSanVolumeGroupEncryption = None,
  encryption_type: str = None,
  id: str = None,
  identity: ElasticSanVolumeGroupIdentity = None,
  network_rule: typing.Union[IResolvable, typing.List[ElasticSanVolumeGroupNetworkRule]] = None,
  protocol_type: str = None,
  timeouts: ElasticSanVolumeGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.elasticSanId">elastic_san_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#elastic_san_id ElasticSanVolumeGroup#elastic_san_id}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#name ElasticSanVolumeGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption">ElasticSanVolumeGroupEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.encryptionType">encryption_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#encryption_type ElasticSanVolumeGroup#encryption_type}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#id ElasticSanVolumeGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity">ElasticSanVolumeGroupIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.networkRule">network_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule">ElasticSanVolumeGroupNetworkRule</a>]]</code> | network_rule block. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.protocolType">protocol_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#protocol_type ElasticSanVolumeGroup#protocol_type}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts">ElasticSanVolumeGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `elastic_san_id`<sup>Required</sup> <a name="elastic_san_id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.elasticSanId"></a>

```python
elastic_san_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#elastic_san_id ElasticSanVolumeGroup#elastic_san_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#name ElasticSanVolumeGroup#name}.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.encryption"></a>

```python
encryption: ElasticSanVolumeGroupEncryption
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption">ElasticSanVolumeGroupEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#encryption ElasticSanVolumeGroup#encryption}

---

##### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#encryption_type ElasticSanVolumeGroup#encryption_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#id ElasticSanVolumeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.identity"></a>

```python
identity: ElasticSanVolumeGroupIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity">ElasticSanVolumeGroupIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#identity ElasticSanVolumeGroup#identity}

---

##### `network_rule`<sup>Optional</sup> <a name="network_rule" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.networkRule"></a>

```python
network_rule: typing.Union[IResolvable, typing.List[ElasticSanVolumeGroupNetworkRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule">ElasticSanVolumeGroupNetworkRule</a>]]

network_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#network_rule ElasticSanVolumeGroup#network_rule}

---

##### `protocol_type`<sup>Optional</sup> <a name="protocol_type" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.protocolType"></a>

```python
protocol_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#protocol_type ElasticSanVolumeGroup#protocol_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.timeouts"></a>

```python
timeouts: ElasticSanVolumeGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts">ElasticSanVolumeGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#timeouts ElasticSanVolumeGroup#timeouts}

---

### ElasticSanVolumeGroupEncryption <a name="ElasticSanVolumeGroupEncryption" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import elastic_san_volume_group

elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption(
  key_vault_key_id: str,
  user_assigned_identity_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#key_vault_key_id ElasticSanVolumeGroup#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#user_assigned_identity_id ElasticSanVolumeGroup#user_assigned_identity_id}. |

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#key_vault_key_id ElasticSanVolumeGroup#key_vault_key_id}.

---

##### `user_assigned_identity_id`<sup>Optional</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#user_assigned_identity_id ElasticSanVolumeGroup#user_assigned_identity_id}.

---

### ElasticSanVolumeGroupIdentity <a name="ElasticSanVolumeGroupIdentity" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import elastic_san_volume_group

elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#type ElasticSanVolumeGroup#type}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#identity_ids ElasticSanVolumeGroup#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#type ElasticSanVolumeGroup#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#identity_ids ElasticSanVolumeGroup#identity_ids}.

---

### ElasticSanVolumeGroupNetworkRule <a name="ElasticSanVolumeGroupNetworkRule" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import elastic_san_volume_group

elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule(
  subnet_id: str,
  action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#subnet_id ElasticSanVolumeGroup#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#action ElasticSanVolumeGroup#action}. |

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#subnet_id ElasticSanVolumeGroup#subnet_id}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#action ElasticSanVolumeGroup#action}.

---

### ElasticSanVolumeGroupTimeouts <a name="ElasticSanVolumeGroupTimeouts" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import elastic_san_volume_group

elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#create ElasticSanVolumeGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#delete ElasticSanVolumeGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#read ElasticSanVolumeGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#update ElasticSanVolumeGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#create ElasticSanVolumeGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#delete ElasticSanVolumeGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#read ElasticSanVolumeGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/elastic_san_volume_group#update ElasticSanVolumeGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticSanVolumeGroupEncryptionOutputReference <a name="ElasticSanVolumeGroupEncryptionOutputReference" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import elastic_san_volume_group

elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.resetUserAssignedIdentityId">reset_user_assigned_identity_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_user_assigned_identity_id` <a name="reset_user_assigned_identity_id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.resetUserAssignedIdentityId"></a>

```python
def reset_user_assigned_identity_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.currentVersionedKeyExpirationTimestamp">current_versioned_key_expiration_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.currentVersionedKeyId">current_versioned_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.lastKeyRotationTimestamp">last_key_rotation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.keyVaultKeyIdInput">key_vault_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.userAssignedIdentityIdInput">user_assigned_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption">ElasticSanVolumeGroupEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_versioned_key_expiration_timestamp`<sup>Required</sup> <a name="current_versioned_key_expiration_timestamp" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.currentVersionedKeyExpirationTimestamp"></a>

```python
current_versioned_key_expiration_timestamp: str
```

- *Type:* str

---

##### `current_versioned_key_id`<sup>Required</sup> <a name="current_versioned_key_id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.currentVersionedKeyId"></a>

```python
current_versioned_key_id: str
```

- *Type:* str

---

##### `last_key_rotation_timestamp`<sup>Required</sup> <a name="last_key_rotation_timestamp" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.lastKeyRotationTimestamp"></a>

```python
last_key_rotation_timestamp: str
```

- *Type:* str

---

##### `key_vault_key_id_input`<sup>Optional</sup> <a name="key_vault_key_id_input" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.keyVaultKeyIdInput"></a>

```python
key_vault_key_id_input: str
```

- *Type:* str

---

##### `user_assigned_identity_id_input`<sup>Optional</sup> <a name="user_assigned_identity_id_input" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.userAssignedIdentityIdInput"></a>

```python
user_assigned_identity_id_input: str
```

- *Type:* str

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

---

##### `user_assigned_identity_id`<sup>Required</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: ElasticSanVolumeGroupEncryption
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption">ElasticSanVolumeGroupEncryption</a>

---


### ElasticSanVolumeGroupIdentityOutputReference <a name="ElasticSanVolumeGroupIdentityOutputReference" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import elastic_san_volume_group

elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity">ElasticSanVolumeGroupIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.internalValue"></a>

```python
internal_value: ElasticSanVolumeGroupIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity">ElasticSanVolumeGroupIdentity</a>

---


### ElasticSanVolumeGroupNetworkRuleList <a name="ElasticSanVolumeGroupNetworkRuleList" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import elastic_san_volume_group

elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticSanVolumeGroupNetworkRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule">ElasticSanVolumeGroupNetworkRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElasticSanVolumeGroupNetworkRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule">ElasticSanVolumeGroupNetworkRule</a>]]

---


### ElasticSanVolumeGroupNetworkRuleOutputReference <a name="ElasticSanVolumeGroupNetworkRuleOutputReference" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import elastic_san_volume_group

elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.resetAction">reset_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.resetAction"></a>

```python
def reset_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule">ElasticSanVolumeGroupNetworkRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElasticSanVolumeGroupNetworkRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule">ElasticSanVolumeGroupNetworkRule</a>]

---


### ElasticSanVolumeGroupTimeoutsOutputReference <a name="ElasticSanVolumeGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import elastic_san_volume_group

elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts">ElasticSanVolumeGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ElasticSanVolumeGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts">ElasticSanVolumeGroupTimeouts</a>]

---



