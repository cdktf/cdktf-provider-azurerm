# `azurerm_sentinel_data_connector_aws_cloud_trail`

Refer to the Terraform Registory for docs: [`azurerm_sentinel_data_connector_aws_cloud_trail`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail).

# `sentinelDataConnectorAwsCloudTrail` Submodule <a name="`sentinelDataConnectorAwsCloudTrail` Submodule" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelDataConnectorAwsCloudTrail <a name="SentinelDataConnectorAwsCloudTrail" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail azurerm_sentinel_data_connector_aws_cloud_trail}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_aws_cloud_trail

sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws_role_arn: str,
  log_analytics_workspace_id: str,
  name: str,
  id: str = None,
  timeouts: SentinelDataConnectorAwsCloudTrailTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.awsRoleArn">aws_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#aws_role_arn SentinelDataConnectorAwsCloudTrail#aws_role_arn}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#log_analytics_workspace_id SentinelDataConnectorAwsCloudTrail#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#name SentinelDataConnectorAwsCloudTrail#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#id SentinelDataConnectorAwsCloudTrail#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts">SentinelDataConnectorAwsCloudTrailTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_role_arn`<sup>Required</sup> <a name="aws_role_arn" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.awsRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#aws_role_arn SentinelDataConnectorAwsCloudTrail#aws_role_arn}.

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#log_analytics_workspace_id SentinelDataConnectorAwsCloudTrail#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#name SentinelDataConnectorAwsCloudTrail#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#id SentinelDataConnectorAwsCloudTrail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts">SentinelDataConnectorAwsCloudTrailTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#timeouts SentinelDataConnectorAwsCloudTrail#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#create SentinelDataConnectorAwsCloudTrail#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#delete SentinelDataConnectorAwsCloudTrail#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#read SentinelDataConnectorAwsCloudTrail#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#update SentinelDataConnectorAwsCloudTrail#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_aws_cloud_trail

sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_aws_cloud_trail

sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_aws_cloud_trail

sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference">SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.awsRoleArnInput">aws_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.logAnalyticsWorkspaceIdInput">log_analytics_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts">SentinelDataConnectorAwsCloudTrailTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.awsRoleArn">aws_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.timeouts"></a>

```python
timeouts: SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference">SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference</a>

---

##### `aws_role_arn_input`<sup>Optional</sup> <a name="aws_role_arn_input" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.awsRoleArnInput"></a>

```python
aws_role_arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_analytics_workspace_id_input`<sup>Optional</sup> <a name="log_analytics_workspace_id_input" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.logAnalyticsWorkspaceIdInput"></a>

```python
log_analytics_workspace_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SentinelDataConnectorAwsCloudTrailTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts">SentinelDataConnectorAwsCloudTrailTimeouts</a>]

---

##### `aws_role_arn`<sup>Required</sup> <a name="aws_role_arn" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.awsRoleArn"></a>

```python
aws_role_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelDataConnectorAwsCloudTrailConfig <a name="SentinelDataConnectorAwsCloudTrailConfig" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_aws_cloud_trail

sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws_role_arn: str,
  log_analytics_workspace_id: str,
  name: str,
  id: str = None,
  timeouts: SentinelDataConnectorAwsCloudTrailTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.awsRoleArn">aws_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#aws_role_arn SentinelDataConnectorAwsCloudTrail#aws_role_arn}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#log_analytics_workspace_id SentinelDataConnectorAwsCloudTrail#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#name SentinelDataConnectorAwsCloudTrail#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#id SentinelDataConnectorAwsCloudTrail#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts">SentinelDataConnectorAwsCloudTrailTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_role_arn`<sup>Required</sup> <a name="aws_role_arn" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.awsRoleArn"></a>

```python
aws_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#aws_role_arn SentinelDataConnectorAwsCloudTrail#aws_role_arn}.

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#log_analytics_workspace_id SentinelDataConnectorAwsCloudTrail#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#name SentinelDataConnectorAwsCloudTrail#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#id SentinelDataConnectorAwsCloudTrail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.timeouts"></a>

```python
timeouts: SentinelDataConnectorAwsCloudTrailTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts">SentinelDataConnectorAwsCloudTrailTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#timeouts SentinelDataConnectorAwsCloudTrail#timeouts}

---

### SentinelDataConnectorAwsCloudTrailTimeouts <a name="SentinelDataConnectorAwsCloudTrailTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_aws_cloud_trail

sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#create SentinelDataConnectorAwsCloudTrail#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#delete SentinelDataConnectorAwsCloudTrail#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#read SentinelDataConnectorAwsCloudTrail#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#update SentinelDataConnectorAwsCloudTrail#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#create SentinelDataConnectorAwsCloudTrail#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#delete SentinelDataConnectorAwsCloudTrail#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#read SentinelDataConnectorAwsCloudTrail#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_data_connector_aws_cloud_trail#update SentinelDataConnectorAwsCloudTrail#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference <a name="SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_aws_cloud_trail

sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts">SentinelDataConnectorAwsCloudTrailTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SentinelDataConnectorAwsCloudTrailTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts">SentinelDataConnectorAwsCloudTrailTimeouts</a>]

---



