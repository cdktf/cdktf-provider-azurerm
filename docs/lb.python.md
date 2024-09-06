# `lb` Submodule <a name="`lb` Submodule" id="@cdktf/provider-azurerm.lb"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Lb <a name="Lb" id="@cdktf/provider-azurerm.lb.Lb"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb azurerm_lb}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lb.Lb.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb

lb.Lb(
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
  edge_zone: str = None,
  frontend_ip_configuration: typing.Union[IResolvable, typing.List[LbFrontendIpConfiguration]] = None,
  id: str = None,
  sku: str = None,
  sku_tier: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: LbTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#location Lb#location}. |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#name Lb#name}. |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#resource_group_name Lb#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.edgeZone">edge_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#edge_zone Lb#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.frontendIpConfiguration">frontend_ip_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration">LbFrontendIpConfiguration</a>]]</code> | frontend_ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#id Lb#id}. |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#sku Lb#sku}. |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.skuTier">sku_tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#sku_tier Lb#sku_tier}. |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#tags Lb#tags}. |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lb.LbTimeouts">LbTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#location Lb#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#name Lb#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#resource_group_name Lb#resource_group_name}.

---

##### `edge_zone`<sup>Optional</sup> <a name="edge_zone" id="@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.edgeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#edge_zone Lb#edge_zone}.

---

##### `frontend_ip_configuration`<sup>Optional</sup> <a name="frontend_ip_configuration" id="@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.frontendIpConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration">LbFrontendIpConfiguration</a>]]

frontend_ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#frontend_ip_configuration Lb#frontend_ip_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#id Lb#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#sku Lb#sku}.

---

##### `sku_tier`<sup>Optional</sup> <a name="sku_tier" id="@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.skuTier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#sku_tier Lb#sku_tier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#tags Lb#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.lb.Lb.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lb.LbTimeouts">LbTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#timeouts Lb#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.putFrontendIpConfiguration">put_frontend_ip_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.resetEdgeZone">reset_edge_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.resetFrontendIpConfiguration">reset_frontend_ip_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.resetSku">reset_sku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.resetSkuTier">reset_sku_tier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.lb.Lb.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.lb.Lb.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.lb.Lb.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lb.Lb.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.lb.Lb.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.lb.Lb.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.lb.Lb.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.lb.Lb.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.lb.Lb.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.lb.Lb.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.lb.Lb.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.lb.Lb.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.lb.Lb.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.Lb.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.lb.Lb.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.Lb.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.lb.Lb.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.Lb.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.lb.Lb.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.Lb.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.lb.Lb.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.Lb.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.lb.Lb.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.Lb.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.lb.Lb.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.Lb.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.lb.Lb.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.Lb.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.lb.Lb.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.Lb.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.lb.Lb.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.lb.Lb.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lb.Lb.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lb.Lb.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.lb.Lb.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.Lb.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.lb.Lb.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lb.Lb.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.lb.Lb.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.lb.Lb.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.lb.Lb.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.lb.Lb.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lb.Lb.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_frontend_ip_configuration` <a name="put_frontend_ip_configuration" id="@cdktf/provider-azurerm.lb.Lb.putFrontendIpConfiguration"></a>

```python
def put_frontend_ip_configuration(
  value: typing.Union[IResolvable, typing.List[LbFrontendIpConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lb.Lb.putFrontendIpConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration">LbFrontendIpConfiguration</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.lb.Lb.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.lb.Lb.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#create Lb#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.lb.Lb.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#delete Lb#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.lb.Lb.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#read Lb#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.lb.Lb.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#update Lb#update}.

---

##### `reset_edge_zone` <a name="reset_edge_zone" id="@cdktf/provider-azurerm.lb.Lb.resetEdgeZone"></a>

```python
def reset_edge_zone() -> None
```

##### `reset_frontend_ip_configuration` <a name="reset_frontend_ip_configuration" id="@cdktf/provider-azurerm.lb.Lb.resetFrontendIpConfiguration"></a>

```python
def reset_frontend_ip_configuration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.lb.Lb.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_sku` <a name="reset_sku" id="@cdktf/provider-azurerm.lb.Lb.resetSku"></a>

```python
def reset_sku() -> None
```

##### `reset_sku_tier` <a name="reset_sku_tier" id="@cdktf/provider-azurerm.lb.Lb.resetSkuTier"></a>

```python
def reset_sku_tier() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.lb.Lb.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.lb.Lb.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Lb resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.lb.Lb.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import lb

lb.Lb.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lb.Lb.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.lb.Lb.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import lb

lb.Lb.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lb.Lb.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.lb.Lb.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import lb

lb.Lb.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lb.Lb.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.lb.Lb.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import lb

lb.Lb.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Lb resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.lb.Lb.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.lb.Lb.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Lb to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.lb.Lb.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Lb that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lb.Lb.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Lb to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.frontendIpConfiguration">frontend_ip_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList">LbFrontendIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.privateIpAddresses">private_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference">LbTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.edgeZoneInput">edge_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.frontendIpConfigurationInput">frontend_ip_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration">LbFrontendIpConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.skuTierInput">sku_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lb.LbTimeouts">LbTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.edgeZone">edge_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.skuTier">sku_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.lb.Lb.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.lb.Lb.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lb.Lb.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.lb.Lb.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.lb.Lb.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.lb.Lb.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.lb.Lb.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.lb.Lb.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.lb.Lb.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.lb.Lb.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.lb.Lb.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.lb.Lb.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lb.Lb.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.lb.Lb.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `frontend_ip_configuration`<sup>Required</sup> <a name="frontend_ip_configuration" id="@cdktf/provider-azurerm.lb.Lb.property.frontendIpConfiguration"></a>

```python
frontend_ip_configuration: LbFrontendIpConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList">LbFrontendIpConfigurationList</a>

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktf/provider-azurerm.lb.Lb.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `private_ip_addresses`<sup>Required</sup> <a name="private_ip_addresses" id="@cdktf/provider-azurerm.lb.Lb.property.privateIpAddresses"></a>

```python
private_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.lb.Lb.property.timeouts"></a>

```python
timeouts: LbTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference">LbTimeoutsOutputReference</a>

---

##### `edge_zone_input`<sup>Optional</sup> <a name="edge_zone_input" id="@cdktf/provider-azurerm.lb.Lb.property.edgeZoneInput"></a>

```python
edge_zone_input: str
```

- *Type:* str

---

##### `frontend_ip_configuration_input`<sup>Optional</sup> <a name="frontend_ip_configuration_input" id="@cdktf/provider-azurerm.lb.Lb.property.frontendIpConfigurationInput"></a>

```python
frontend_ip_configuration_input: typing.Union[IResolvable, typing.List[LbFrontendIpConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration">LbFrontendIpConfiguration</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.lb.Lb.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.lb.Lb.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.lb.Lb.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.lb.Lb.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.lb.Lb.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `sku_tier_input`<sup>Optional</sup> <a name="sku_tier_input" id="@cdktf/provider-azurerm.lb.Lb.property.skuTierInput"></a>

```python
sku_tier_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.lb.Lb.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.lb.Lb.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LbTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lb.LbTimeouts">LbTimeouts</a>]

---

##### `edge_zone`<sup>Required</sup> <a name="edge_zone" id="@cdktf/provider-azurerm.lb.Lb.property.edgeZone"></a>

```python
edge_zone: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lb.Lb.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.lb.Lb.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lb.Lb.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.lb.Lb.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.lb.Lb.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `sku_tier`<sup>Required</sup> <a name="sku_tier" id="@cdktf/provider-azurerm.lb.Lb.property.skuTier"></a>

```python
sku_tier: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.lb.Lb.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lb.Lb.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.lb.Lb.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LbConfig <a name="LbConfig" id="@cdktf/provider-azurerm.lb.LbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lb.LbConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb

lb.LbConfig(
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
  edge_zone: str = None,
  frontend_ip_configuration: typing.Union[IResolvable, typing.List[LbFrontendIpConfiguration]] = None,
  id: str = None,
  sku: str = None,
  sku_tier: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: LbTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lb.LbConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#location Lb#location}. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#name Lb#name}. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#resource_group_name Lb#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbConfig.property.edgeZone">edge_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#edge_zone Lb#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbConfig.property.frontendIpConfiguration">frontend_ip_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration">LbFrontendIpConfiguration</a>]]</code> | frontend_ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#id Lb#id}. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbConfig.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#sku Lb#sku}. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbConfig.property.skuTier">sku_tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#sku_tier Lb#sku_tier}. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#tags Lb#tags}. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lb.LbTimeouts">LbTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.lb.LbConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.lb.LbConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.lb.LbConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.lb.LbConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.lb.LbConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lb.LbConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.lb.LbConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.lb.LbConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#location Lb#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lb.LbConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#name Lb#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.lb.LbConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#resource_group_name Lb#resource_group_name}.

---

##### `edge_zone`<sup>Optional</sup> <a name="edge_zone" id="@cdktf/provider-azurerm.lb.LbConfig.property.edgeZone"></a>

```python
edge_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#edge_zone Lb#edge_zone}.

---

##### `frontend_ip_configuration`<sup>Optional</sup> <a name="frontend_ip_configuration" id="@cdktf/provider-azurerm.lb.LbConfig.property.frontendIpConfiguration"></a>

```python
frontend_ip_configuration: typing.Union[IResolvable, typing.List[LbFrontendIpConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration">LbFrontendIpConfiguration</a>]]

frontend_ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#frontend_ip_configuration Lb#frontend_ip_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.lb.LbConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#id Lb#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.lb.LbConfig.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#sku Lb#sku}.

---

##### `sku_tier`<sup>Optional</sup> <a name="sku_tier" id="@cdktf/provider-azurerm.lb.LbConfig.property.skuTier"></a>

```python
sku_tier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#sku_tier Lb#sku_tier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.lb.LbConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#tags Lb#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.lb.LbConfig.property.timeouts"></a>

```python
timeouts: LbTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.lb.LbTimeouts">LbTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#timeouts Lb#timeouts}

---

### LbFrontendIpConfiguration <a name="LbFrontendIpConfiguration" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb

lb.LbFrontendIpConfiguration(
  name: str,
  gateway_load_balancer_frontend_ip_configuration_id: str = None,
  private_ip_address: str = None,
  private_ip_address_allocation: str = None,
  private_ip_address_version: str = None,
  public_ip_address_id: str = None,
  public_ip_prefix_id: str = None,
  subnet_id: str = None,
  zones: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#name Lb#name}. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration.property.gatewayLoadBalancerFrontendIpConfigurationId">gateway_load_balancer_frontend_ip_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#gateway_load_balancer_frontend_ip_configuration_id Lb#gateway_load_balancer_frontend_ip_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#private_ip_address Lb#private_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration.property.privateIpAddressAllocation">private_ip_address_allocation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#private_ip_address_allocation Lb#private_ip_address_allocation}. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration.property.privateIpAddressVersion">private_ip_address_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#private_ip_address_version Lb#private_ip_address_version}. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration.property.publicIpAddressId">public_ip_address_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#public_ip_address_id Lb#public_ip_address_id}. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration.property.publicIpPrefixId">public_ip_prefix_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#public_ip_prefix_id Lb#public_ip_prefix_id}. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#subnet_id Lb#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration.property.zones">zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#zones Lb#zones}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#name Lb#name}.

---

##### `gateway_load_balancer_frontend_ip_configuration_id`<sup>Optional</sup> <a name="gateway_load_balancer_frontend_ip_configuration_id" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration.property.gatewayLoadBalancerFrontendIpConfigurationId"></a>

```python
gateway_load_balancer_frontend_ip_configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#gateway_load_balancer_frontend_ip_configuration_id Lb#gateway_load_balancer_frontend_ip_configuration_id}.

---

##### `private_ip_address`<sup>Optional</sup> <a name="private_ip_address" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#private_ip_address Lb#private_ip_address}.

---

##### `private_ip_address_allocation`<sup>Optional</sup> <a name="private_ip_address_allocation" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration.property.privateIpAddressAllocation"></a>

```python
private_ip_address_allocation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#private_ip_address_allocation Lb#private_ip_address_allocation}.

---

##### `private_ip_address_version`<sup>Optional</sup> <a name="private_ip_address_version" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration.property.privateIpAddressVersion"></a>

```python
private_ip_address_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#private_ip_address_version Lb#private_ip_address_version}.

---

##### `public_ip_address_id`<sup>Optional</sup> <a name="public_ip_address_id" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration.property.publicIpAddressId"></a>

```python
public_ip_address_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#public_ip_address_id Lb#public_ip_address_id}.

---

##### `public_ip_prefix_id`<sup>Optional</sup> <a name="public_ip_prefix_id" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration.property.publicIpPrefixId"></a>

```python
public_ip_prefix_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#public_ip_prefix_id Lb#public_ip_prefix_id}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#subnet_id Lb#subnet_id}.

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#zones Lb#zones}.

---

### LbTimeouts <a name="LbTimeouts" id="@cdktf/provider-azurerm.lb.LbTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lb.LbTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb

lb.LbTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#create Lb#create}. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#delete Lb#delete}. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#read Lb#read}. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#update Lb#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.lb.LbTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#create Lb#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.lb.LbTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#delete Lb#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.lb.LbTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#read Lb#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.lb.LbTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/lb#update Lb#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbFrontendIpConfigurationList <a name="LbFrontendIpConfigurationList" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb

lb.LbFrontendIpConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LbFrontendIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration">LbFrontendIpConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LbFrontendIpConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration">LbFrontendIpConfiguration</a>]]

---


### LbFrontendIpConfigurationOutputReference <a name="LbFrontendIpConfigurationOutputReference" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb

lb.LbFrontendIpConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.resetGatewayLoadBalancerFrontendIpConfigurationId">reset_gateway_load_balancer_frontend_ip_configuration_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.resetPrivateIpAddress">reset_private_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.resetPrivateIpAddressAllocation">reset_private_ip_address_allocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.resetPrivateIpAddressVersion">reset_private_ip_address_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.resetPublicIpAddressId">reset_public_ip_address_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.resetPublicIpPrefixId">reset_public_ip_prefix_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.resetZones">reset_zones</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_gateway_load_balancer_frontend_ip_configuration_id` <a name="reset_gateway_load_balancer_frontend_ip_configuration_id" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.resetGatewayLoadBalancerFrontendIpConfigurationId"></a>

```python
def reset_gateway_load_balancer_frontend_ip_configuration_id() -> None
```

##### `reset_private_ip_address` <a name="reset_private_ip_address" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.resetPrivateIpAddress"></a>

```python
def reset_private_ip_address() -> None
```

##### `reset_private_ip_address_allocation` <a name="reset_private_ip_address_allocation" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.resetPrivateIpAddressAllocation"></a>

```python
def reset_private_ip_address_allocation() -> None
```

##### `reset_private_ip_address_version` <a name="reset_private_ip_address_version" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.resetPrivateIpAddressVersion"></a>

```python
def reset_private_ip_address_version() -> None
```

##### `reset_public_ip_address_id` <a name="reset_public_ip_address_id" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.resetPublicIpAddressId"></a>

```python
def reset_public_ip_address_id() -> None
```

##### `reset_public_ip_prefix_id` <a name="reset_public_ip_prefix_id" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.resetPublicIpPrefixId"></a>

```python
def reset_public_ip_prefix_id() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_zones` <a name="reset_zones" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.resetZones"></a>

```python
def reset_zones() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.inboundNatRules">inbound_nat_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.loadBalancerRules">load_balancer_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.outboundRules">outbound_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.gatewayLoadBalancerFrontendIpConfigurationIdInput">gateway_load_balancer_frontend_ip_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.privateIpAddressAllocationInput">private_ip_address_allocation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.privateIpAddressInput">private_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.privateIpAddressVersionInput">private_ip_address_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.publicIpAddressIdInput">public_ip_address_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.publicIpPrefixIdInput">public_ip_prefix_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.zonesInput">zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.gatewayLoadBalancerFrontendIpConfigurationId">gateway_load_balancer_frontend_ip_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.privateIpAddressAllocation">private_ip_address_allocation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.privateIpAddressVersion">private_ip_address_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.publicIpAddressId">public_ip_address_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.publicIpPrefixId">public_ip_prefix_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.zones">zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration">LbFrontendIpConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inbound_nat_rules`<sup>Required</sup> <a name="inbound_nat_rules" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.inboundNatRules"></a>

```python
inbound_nat_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `load_balancer_rules`<sup>Required</sup> <a name="load_balancer_rules" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.loadBalancerRules"></a>

```python
load_balancer_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `outbound_rules`<sup>Required</sup> <a name="outbound_rules" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.outboundRules"></a>

```python
outbound_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `gateway_load_balancer_frontend_ip_configuration_id_input`<sup>Optional</sup> <a name="gateway_load_balancer_frontend_ip_configuration_id_input" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.gatewayLoadBalancerFrontendIpConfigurationIdInput"></a>

```python
gateway_load_balancer_frontend_ip_configuration_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `private_ip_address_allocation_input`<sup>Optional</sup> <a name="private_ip_address_allocation_input" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.privateIpAddressAllocationInput"></a>

```python
private_ip_address_allocation_input: str
```

- *Type:* str

---

##### `private_ip_address_input`<sup>Optional</sup> <a name="private_ip_address_input" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.privateIpAddressInput"></a>

```python
private_ip_address_input: str
```

- *Type:* str

---

##### `private_ip_address_version_input`<sup>Optional</sup> <a name="private_ip_address_version_input" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.privateIpAddressVersionInput"></a>

```python
private_ip_address_version_input: str
```

- *Type:* str

---

##### `public_ip_address_id_input`<sup>Optional</sup> <a name="public_ip_address_id_input" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.publicIpAddressIdInput"></a>

```python
public_ip_address_id_input: str
```

- *Type:* str

---

##### `public_ip_prefix_id_input`<sup>Optional</sup> <a name="public_ip_prefix_id_input" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.publicIpPrefixIdInput"></a>

```python
public_ip_prefix_id_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `zones_input`<sup>Optional</sup> <a name="zones_input" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.zonesInput"></a>

```python
zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `gateway_load_balancer_frontend_ip_configuration_id`<sup>Required</sup> <a name="gateway_load_balancer_frontend_ip_configuration_id" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.gatewayLoadBalancerFrontendIpConfigurationId"></a>

```python
gateway_load_balancer_frontend_ip_configuration_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `private_ip_address_allocation`<sup>Required</sup> <a name="private_ip_address_allocation" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.privateIpAddressAllocation"></a>

```python
private_ip_address_allocation: str
```

- *Type:* str

---

##### `private_ip_address_version`<sup>Required</sup> <a name="private_ip_address_version" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.privateIpAddressVersion"></a>

```python
private_ip_address_version: str
```

- *Type:* str

---

##### `public_ip_address_id`<sup>Required</sup> <a name="public_ip_address_id" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.publicIpAddressId"></a>

```python
public_ip_address_id: str
```

- *Type:* str

---

##### `public_ip_prefix_id`<sup>Required</sup> <a name="public_ip_prefix_id" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.publicIpPrefixId"></a>

```python
public_ip_prefix_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.lb.LbFrontendIpConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LbFrontendIpConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lb.LbFrontendIpConfiguration">LbFrontendIpConfiguration</a>]

---


### LbTimeoutsOutputReference <a name="LbTimeoutsOutputReference" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb

lb.LbTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lb.LbTimeouts">LbTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.lb.LbTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LbTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lb.LbTimeouts">LbTimeouts</a>]

---



