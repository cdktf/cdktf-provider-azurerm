# `azurerm_sentinel_data_connector_office_365_project`

Refer to the Terraform Registory for docs: [`azurerm_sentinel_data_connector_office_365_project`](https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/sentinel_data_connector_office_365_project).

# `sentinelDataConnectorOffice365Project` Submodule <a name="`sentinelDataConnectorOffice365Project` Submodule" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelDataConnectorOffice365Project <a name="SentinelDataConnectorOffice365Project" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/sentinel_data_connector_office_365_project azurerm_sentinel_data_connector_office_365_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/sentineldataconnectoroffice365project"

sentineldataconnectoroffice365project.NewSentinelDataConnectorOffice365Project(scope Construct, id *string, config SentinelDataConnectorOffice365ProjectConfig) SentinelDataConnectorOffice365Project
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig">SentinelDataConnectorOffice365ProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig">SentinelDataConnectorOffice365ProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.putTimeouts"></a>

```go
func PutTimeouts(value SentinelDataConnectorOffice365ProjectTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeouts">SentinelDataConnectorOffice365ProjectTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.resetId"></a>

```go
func ResetId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.resetTenantId"></a>

```go
func ResetTenantId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/sentineldataconnectoroffice365project"

sentineldataconnectoroffice365project.SentinelDataConnectorOffice365Project_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/sentineldataconnectoroffice365project"

sentineldataconnectoroffice365project.SentinelDataConnectorOffice365Project_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/sentineldataconnectoroffice365project"

sentineldataconnectoroffice365project.SentinelDataConnectorOffice365Project_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference">SentinelDataConnectorOffice365ProjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.timeouts"></a>

```go
func Timeouts() SentinelDataConnectorOffice365ProjectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference">SentinelDataConnectorOffice365ProjectTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.logAnalyticsWorkspaceIdInput"></a>

```go
func LogAnalyticsWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.logAnalyticsWorkspaceId"></a>

```go
func LogAnalyticsWorkspaceId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365Project.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelDataConnectorOffice365ProjectConfig <a name="SentinelDataConnectorOffice365ProjectConfig" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/sentineldataconnectoroffice365project"

&sentineldataconnectoroffice365project.SentinelDataConnectorOffice365ProjectConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LogAnalyticsWorkspaceId: *string,
	Name: *string,
	Id: *string,
	TenantId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/sentinel_data_connector_office_365_project#log_analytics_workspace_id SentinelDataConnectorOffice365Project#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/sentinel_data_connector_office_365_project#name SentinelDataConnectorOffice365Project#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/sentinel_data_connector_office_365_project#id SentinelDataConnectorOffice365Project#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/sentinel_data_connector_office_365_project#tenant_id SentinelDataConnectorOffice365Project#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeouts">SentinelDataConnectorOffice365ProjectTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig.property.logAnalyticsWorkspaceId"></a>

```go
LogAnalyticsWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/sentinel_data_connector_office_365_project#log_analytics_workspace_id SentinelDataConnectorOffice365Project#log_analytics_workspace_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/sentinel_data_connector_office_365_project#name SentinelDataConnectorOffice365Project#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/sentinel_data_connector_office_365_project#id SentinelDataConnectorOffice365Project#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/sentinel_data_connector_office_365_project#tenant_id SentinelDataConnectorOffice365Project#tenant_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectConfig.property.timeouts"></a>

```go
Timeouts SentinelDataConnectorOffice365ProjectTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeouts">SentinelDataConnectorOffice365ProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/sentinel_data_connector_office_365_project#timeouts SentinelDataConnectorOffice365Project#timeouts}

---

### SentinelDataConnectorOffice365ProjectTimeouts <a name="SentinelDataConnectorOffice365ProjectTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/sentineldataconnectoroffice365project"

&sentineldataconnectoroffice365project.SentinelDataConnectorOffice365ProjectTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/sentinel_data_connector_office_365_project#create SentinelDataConnectorOffice365Project#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/sentinel_data_connector_office_365_project#delete SentinelDataConnectorOffice365Project#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/sentinel_data_connector_office_365_project#read SentinelDataConnectorOffice365Project#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/sentinel_data_connector_office_365_project#create SentinelDataConnectorOffice365Project#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/sentinel_data_connector_office_365_project#delete SentinelDataConnectorOffice365Project#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/sentinel_data_connector_office_365_project#read SentinelDataConnectorOffice365Project#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelDataConnectorOffice365ProjectTimeoutsOutputReference <a name="SentinelDataConnectorOffice365ProjectTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/sentineldataconnectoroffice365project"

sentineldataconnectoroffice365project.NewSentinelDataConnectorOffice365ProjectTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SentinelDataConnectorOffice365ProjectTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365Project.SentinelDataConnectorOffice365ProjectTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



