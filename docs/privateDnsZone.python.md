# `azurerm_private_dns_zone`

Refer to the Terraform Registory for docs: [`azurerm_private_dns_zone`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone).

# `privateDnsZone` Submodule <a name="`privateDnsZone` Submodule" id="@cdktf/provider-azurerm.privateDnsZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateDnsZone <a name="PrivateDnsZone" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone azurerm_private_dns_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_zone

privateDnsZone.PrivateDnsZone(
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
  resource_group_name: str,
  id: str = None,
  soa_record: PrivateDnsZoneSoaRecord = None,
  tags: typing.Mapping[str] = None,
  timeouts: PrivateDnsZoneTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#name PrivateDnsZone#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#resource_group_name PrivateDnsZone#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#id PrivateDnsZone#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.soaRecord">soa_record</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecord">PrivateDnsZoneSoaRecord</a></code> | soa_record block. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#tags PrivateDnsZone#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeouts">PrivateDnsZoneTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#name PrivateDnsZone#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#resource_group_name PrivateDnsZone#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#id PrivateDnsZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `soa_record`<sup>Optional</sup> <a name="soa_record" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.soaRecord"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecord">PrivateDnsZoneSoaRecord</a>

soa_record block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#soa_record PrivateDnsZone#soa_record}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#tags PrivateDnsZone#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeouts">PrivateDnsZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#timeouts PrivateDnsZone#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.putSoaRecord">put_soa_record</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.resetSoaRecord">reset_soa_record</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_soa_record` <a name="put_soa_record" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.putSoaRecord"></a>

```python
def put_soa_record(
  email: str,
  expire_time: typing.Union[int, float] = None,
  minimum_ttl: typing.Union[int, float] = None,
  refresh_time: typing.Union[int, float] = None,
  retry_time: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  ttl: typing.Union[int, float] = None
) -> None
```

###### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.putSoaRecord.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#email PrivateDnsZone#email}.

---

###### `expire_time`<sup>Optional</sup> <a name="expire_time" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.putSoaRecord.parameter.expireTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#expire_time PrivateDnsZone#expire_time}.

---

###### `minimum_ttl`<sup>Optional</sup> <a name="minimum_ttl" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.putSoaRecord.parameter.minimumTtl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#minimum_ttl PrivateDnsZone#minimum_ttl}.

---

###### `refresh_time`<sup>Optional</sup> <a name="refresh_time" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.putSoaRecord.parameter.refreshTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#refresh_time PrivateDnsZone#refresh_time}.

---

###### `retry_time`<sup>Optional</sup> <a name="retry_time" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.putSoaRecord.parameter.retryTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#retry_time PrivateDnsZone#retry_time}.

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.putSoaRecord.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#tags PrivateDnsZone#tags}.

---

###### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.putSoaRecord.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#ttl PrivateDnsZone#ttl}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#create PrivateDnsZone#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#delete PrivateDnsZone#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#read PrivateDnsZone#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#update PrivateDnsZone#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_soa_record` <a name="reset_soa_record" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.resetSoaRecord"></a>

```python
def reset_soa_record() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_zone

privateDnsZone.PrivateDnsZone.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_zone

privateDnsZone.PrivateDnsZone.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_zone

privateDnsZone.PrivateDnsZone.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.maxNumberOfRecordSets">max_number_of_record_sets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.maxNumberOfVirtualNetworkLinks">max_number_of_virtual_network_links</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.maxNumberOfVirtualNetworkLinksWithRegistration">max_number_of_virtual_network_links_with_registration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.numberOfRecordSets">number_of_record_sets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.soaRecord">soa_record</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference">PrivateDnsZoneSoaRecordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference">PrivateDnsZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.soaRecordInput">soa_record_input</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecord">PrivateDnsZoneSoaRecord</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeouts">PrivateDnsZoneTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `max_number_of_record_sets`<sup>Required</sup> <a name="max_number_of_record_sets" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.maxNumberOfRecordSets"></a>

```python
max_number_of_record_sets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_number_of_virtual_network_links`<sup>Required</sup> <a name="max_number_of_virtual_network_links" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.maxNumberOfVirtualNetworkLinks"></a>

```python
max_number_of_virtual_network_links: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_number_of_virtual_network_links_with_registration`<sup>Required</sup> <a name="max_number_of_virtual_network_links_with_registration" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.maxNumberOfVirtualNetworkLinksWithRegistration"></a>

```python
max_number_of_virtual_network_links_with_registration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_record_sets`<sup>Required</sup> <a name="number_of_record_sets" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.numberOfRecordSets"></a>

```python
number_of_record_sets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `soa_record`<sup>Required</sup> <a name="soa_record" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.soaRecord"></a>

```python
soa_record: PrivateDnsZoneSoaRecordOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference">PrivateDnsZoneSoaRecordOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.timeouts"></a>

```python
timeouts: PrivateDnsZoneTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference">PrivateDnsZoneTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `soa_record_input`<sup>Optional</sup> <a name="soa_record_input" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.soaRecordInput"></a>

```python
soa_record_input: PrivateDnsZoneSoaRecord
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecord">PrivateDnsZoneSoaRecord</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[PrivateDnsZoneTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeouts">PrivateDnsZoneTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZone.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateDnsZoneConfig <a name="PrivateDnsZoneConfig" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_zone

privateDnsZone.PrivateDnsZoneConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  id: str = None,
  soa_record: PrivateDnsZoneSoaRecord = None,
  tags: typing.Mapping[str] = None,
  timeouts: PrivateDnsZoneTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#name PrivateDnsZone#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#resource_group_name PrivateDnsZone#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#id PrivateDnsZone#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.property.soaRecord">soa_record</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecord">PrivateDnsZoneSoaRecord</a></code> | soa_record block. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#tags PrivateDnsZone#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeouts">PrivateDnsZoneTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#name PrivateDnsZone#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#resource_group_name PrivateDnsZone#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#id PrivateDnsZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `soa_record`<sup>Optional</sup> <a name="soa_record" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.property.soaRecord"></a>

```python
soa_record: PrivateDnsZoneSoaRecord
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecord">PrivateDnsZoneSoaRecord</a>

soa_record block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#soa_record PrivateDnsZone#soa_record}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#tags PrivateDnsZone#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneConfig.property.timeouts"></a>

```python
timeouts: PrivateDnsZoneTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeouts">PrivateDnsZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#timeouts PrivateDnsZone#timeouts}

---

### PrivateDnsZoneSoaRecord <a name="PrivateDnsZoneSoaRecord" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecord"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecord.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_zone

privateDnsZone.PrivateDnsZoneSoaRecord(
  email: str,
  expire_time: typing.Union[int, float] = None,
  minimum_ttl: typing.Union[int, float] = None,
  refresh_time: typing.Union[int, float] = None,
  retry_time: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecord.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#email PrivateDnsZone#email}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecord.property.expireTime">expire_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#expire_time PrivateDnsZone#expire_time}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecord.property.minimumTtl">minimum_ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#minimum_ttl PrivateDnsZone#minimum_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecord.property.refreshTime">refresh_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#refresh_time PrivateDnsZone#refresh_time}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecord.property.retryTime">retry_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#retry_time PrivateDnsZone#retry_time}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecord.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#tags PrivateDnsZone#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecord.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#ttl PrivateDnsZone#ttl}. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecord.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#email PrivateDnsZone#email}.

---

##### `expire_time`<sup>Optional</sup> <a name="expire_time" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecord.property.expireTime"></a>

```python
expire_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#expire_time PrivateDnsZone#expire_time}.

---

##### `minimum_ttl`<sup>Optional</sup> <a name="minimum_ttl" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecord.property.minimumTtl"></a>

```python
minimum_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#minimum_ttl PrivateDnsZone#minimum_ttl}.

---

##### `refresh_time`<sup>Optional</sup> <a name="refresh_time" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecord.property.refreshTime"></a>

```python
refresh_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#refresh_time PrivateDnsZone#refresh_time}.

---

##### `retry_time`<sup>Optional</sup> <a name="retry_time" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecord.property.retryTime"></a>

```python
retry_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#retry_time PrivateDnsZone#retry_time}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecord.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#tags PrivateDnsZone#tags}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecord.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#ttl PrivateDnsZone#ttl}.

---

### PrivateDnsZoneTimeouts <a name="PrivateDnsZoneTimeouts" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_zone

privateDnsZone.PrivateDnsZoneTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#create PrivateDnsZone#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#delete PrivateDnsZone#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#read PrivateDnsZone#read}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#update PrivateDnsZone#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#create PrivateDnsZone#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#delete PrivateDnsZone#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#read PrivateDnsZone#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_zone#update PrivateDnsZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateDnsZoneSoaRecordOutputReference <a name="PrivateDnsZoneSoaRecordOutputReference" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_zone

privateDnsZone.PrivateDnsZoneSoaRecordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.resetExpireTime">reset_expire_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.resetMinimumTtl">reset_minimum_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.resetRefreshTime">reset_refresh_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.resetRetryTime">reset_retry_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expire_time` <a name="reset_expire_time" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.resetExpireTime"></a>

```python
def reset_expire_time() -> None
```

##### `reset_minimum_ttl` <a name="reset_minimum_ttl" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.resetMinimumTtl"></a>

```python
def reset_minimum_ttl() -> None
```

##### `reset_refresh_time` <a name="reset_refresh_time" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.resetRefreshTime"></a>

```python
def reset_refresh_time() -> None
```

##### `reset_retry_time` <a name="reset_retry_time" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.resetRetryTime"></a>

```python
def reset_retry_time() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.resetTtl"></a>

```python
def reset_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.serialNumber">serial_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.expireTimeInput">expire_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.minimumTtlInput">minimum_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.refreshTimeInput">refresh_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.retryTimeInput">retry_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.expireTime">expire_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.minimumTtl">minimum_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.refreshTime">refresh_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.retryTime">retry_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecord">PrivateDnsZoneSoaRecord</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.serialNumber"></a>

```python
serial_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `expire_time_input`<sup>Optional</sup> <a name="expire_time_input" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.expireTimeInput"></a>

```python
expire_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_ttl_input`<sup>Optional</sup> <a name="minimum_ttl_input" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.minimumTtlInput"></a>

```python
minimum_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `refresh_time_input`<sup>Optional</sup> <a name="refresh_time_input" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.refreshTimeInput"></a>

```python
refresh_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_time_input`<sup>Optional</sup> <a name="retry_time_input" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.retryTimeInput"></a>

```python
retry_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.expireTime"></a>

```python
expire_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_ttl`<sup>Required</sup> <a name="minimum_ttl" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.minimumTtl"></a>

```python
minimum_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `refresh_time`<sup>Required</sup> <a name="refresh_time" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.refreshTime"></a>

```python
refresh_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_time`<sup>Required</sup> <a name="retry_time" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.retryTime"></a>

```python
retry_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecordOutputReference.property.internalValue"></a>

```python
internal_value: PrivateDnsZoneSoaRecord
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneSoaRecord">PrivateDnsZoneSoaRecord</a>

---


### PrivateDnsZoneTimeoutsOutputReference <a name="PrivateDnsZoneTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_zone

privateDnsZone.PrivateDnsZoneTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeouts">PrivateDnsZoneTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[PrivateDnsZoneTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.privateDnsZone.PrivateDnsZoneTimeouts">PrivateDnsZoneTimeouts</a>, cdktf.IResolvable]

---



