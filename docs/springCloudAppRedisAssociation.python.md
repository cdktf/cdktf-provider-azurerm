# `azurerm_spring_cloud_app_redis_association`

Refer to the Terraform Registory for docs: [`azurerm_spring_cloud_app_redis_association`](https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association).

# `springCloudAppRedisAssociation` Submodule <a name="`springCloudAppRedisAssociation` Submodule" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudAppRedisAssociation <a name="SpringCloudAppRedisAssociation" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association azurerm_spring_cloud_app_redis_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app_redis_association

springCloudAppRedisAssociation.SpringCloudAppRedisAssociation(
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
  redis_access_key: str,
  redis_cache_id: str,
  spring_cloud_app_id: str,
  id: str = None,
  ssl_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: SpringCloudAppRedisAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#name SpringCloudAppRedisAssociation#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.redisAccessKey">redis_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#redis_access_key SpringCloudAppRedisAssociation#redis_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.redisCacheId">redis_cache_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#redis_cache_id SpringCloudAppRedisAssociation#redis_cache_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.springCloudAppId">spring_cloud_app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#spring_cloud_app_id SpringCloudAppRedisAssociation#spring_cloud_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#id SpringCloudAppRedisAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.sslEnabled">ssl_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#ssl_enabled SpringCloudAppRedisAssociation#ssl_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeouts">SpringCloudAppRedisAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#name SpringCloudAppRedisAssociation#name}.

---

##### `redis_access_key`<sup>Required</sup> <a name="redis_access_key" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.redisAccessKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#redis_access_key SpringCloudAppRedisAssociation#redis_access_key}.

---

##### `redis_cache_id`<sup>Required</sup> <a name="redis_cache_id" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.redisCacheId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#redis_cache_id SpringCloudAppRedisAssociation#redis_cache_id}.

---

##### `spring_cloud_app_id`<sup>Required</sup> <a name="spring_cloud_app_id" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.springCloudAppId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#spring_cloud_app_id SpringCloudAppRedisAssociation#spring_cloud_app_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#id SpringCloudAppRedisAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ssl_enabled`<sup>Optional</sup> <a name="ssl_enabled" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.sslEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#ssl_enabled SpringCloudAppRedisAssociation#ssl_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeouts">SpringCloudAppRedisAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#timeouts SpringCloudAppRedisAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.resetSslEnabled">reset_ssl_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#create SpringCloudAppRedisAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#delete SpringCloudAppRedisAssociation#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#read SpringCloudAppRedisAssociation#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#update SpringCloudAppRedisAssociation#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ssl_enabled` <a name="reset_ssl_enabled" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.resetSslEnabled"></a>

```python
def reset_ssl_enabled() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app_redis_association

springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app_redis_association

springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app_redis_association

springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference">SpringCloudAppRedisAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.redisAccessKeyInput">redis_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.redisCacheIdInput">redis_cache_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.springCloudAppIdInput">spring_cloud_app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.sslEnabledInput">ssl_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeouts">SpringCloudAppRedisAssociationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.redisAccessKey">redis_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.redisCacheId">redis_cache_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.springCloudAppId">spring_cloud_app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.sslEnabled">ssl_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.timeouts"></a>

```python
timeouts: SpringCloudAppRedisAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference">SpringCloudAppRedisAssociationTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `redis_access_key_input`<sup>Optional</sup> <a name="redis_access_key_input" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.redisAccessKeyInput"></a>

```python
redis_access_key_input: str
```

- *Type:* str

---

##### `redis_cache_id_input`<sup>Optional</sup> <a name="redis_cache_id_input" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.redisCacheIdInput"></a>

```python
redis_cache_id_input: str
```

- *Type:* str

---

##### `spring_cloud_app_id_input`<sup>Optional</sup> <a name="spring_cloud_app_id_input" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.springCloudAppIdInput"></a>

```python
spring_cloud_app_id_input: str
```

- *Type:* str

---

##### `ssl_enabled_input`<sup>Optional</sup> <a name="ssl_enabled_input" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.sslEnabledInput"></a>

```python
ssl_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SpringCloudAppRedisAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeouts">SpringCloudAppRedisAssociationTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `redis_access_key`<sup>Required</sup> <a name="redis_access_key" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.redisAccessKey"></a>

```python
redis_access_key: str
```

- *Type:* str

---

##### `redis_cache_id`<sup>Required</sup> <a name="redis_cache_id" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.redisCacheId"></a>

```python
redis_cache_id: str
```

- *Type:* str

---

##### `spring_cloud_app_id`<sup>Required</sup> <a name="spring_cloud_app_id" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.springCloudAppId"></a>

```python
spring_cloud_app_id: str
```

- *Type:* str

---

##### `ssl_enabled`<sup>Required</sup> <a name="ssl_enabled" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.sslEnabled"></a>

```python
ssl_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudAppRedisAssociationConfig <a name="SpringCloudAppRedisAssociationConfig" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app_redis_association

springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  redis_access_key: str,
  redis_cache_id: str,
  spring_cloud_app_id: str,
  id: str = None,
  ssl_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: SpringCloudAppRedisAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#name SpringCloudAppRedisAssociation#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.redisAccessKey">redis_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#redis_access_key SpringCloudAppRedisAssociation#redis_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.redisCacheId">redis_cache_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#redis_cache_id SpringCloudAppRedisAssociation#redis_cache_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.springCloudAppId">spring_cloud_app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#spring_cloud_app_id SpringCloudAppRedisAssociation#spring_cloud_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#id SpringCloudAppRedisAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.sslEnabled">ssl_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#ssl_enabled SpringCloudAppRedisAssociation#ssl_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeouts">SpringCloudAppRedisAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#name SpringCloudAppRedisAssociation#name}.

---

##### `redis_access_key`<sup>Required</sup> <a name="redis_access_key" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.redisAccessKey"></a>

```python
redis_access_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#redis_access_key SpringCloudAppRedisAssociation#redis_access_key}.

---

##### `redis_cache_id`<sup>Required</sup> <a name="redis_cache_id" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.redisCacheId"></a>

```python
redis_cache_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#redis_cache_id SpringCloudAppRedisAssociation#redis_cache_id}.

---

##### `spring_cloud_app_id`<sup>Required</sup> <a name="spring_cloud_app_id" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.springCloudAppId"></a>

```python
spring_cloud_app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#spring_cloud_app_id SpringCloudAppRedisAssociation#spring_cloud_app_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#id SpringCloudAppRedisAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ssl_enabled`<sup>Optional</sup> <a name="ssl_enabled" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.sslEnabled"></a>

```python
ssl_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#ssl_enabled SpringCloudAppRedisAssociation#ssl_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationConfig.property.timeouts"></a>

```python
timeouts: SpringCloudAppRedisAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeouts">SpringCloudAppRedisAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#timeouts SpringCloudAppRedisAssociation#timeouts}

---

### SpringCloudAppRedisAssociationTimeouts <a name="SpringCloudAppRedisAssociationTimeouts" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app_redis_association

springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#create SpringCloudAppRedisAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#delete SpringCloudAppRedisAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#read SpringCloudAppRedisAssociation#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#update SpringCloudAppRedisAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#create SpringCloudAppRedisAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#delete SpringCloudAppRedisAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#read SpringCloudAppRedisAssociation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/spring_cloud_app_redis_association#update SpringCloudAppRedisAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudAppRedisAssociationTimeoutsOutputReference <a name="SpringCloudAppRedisAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_app_redis_association

springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeouts">SpringCloudAppRedisAssociationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SpringCloudAppRedisAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudAppRedisAssociation.SpringCloudAppRedisAssociationTimeouts">SpringCloudAppRedisAssociationTimeouts</a>]

---



