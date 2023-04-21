# `azurerm_log_analytics_datasource_windows_event`

Refer to the Terraform Registory for docs: [`azurerm_log_analytics_datasource_windows_event`](https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/log_analytics_datasource_windows_event).

# `logAnalyticsDatasourceWindowsEvent` Submodule <a name="`logAnalyticsDatasourceWindowsEvent` Submodule" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsDatasourceWindowsEvent <a name="LogAnalyticsDatasourceWindowsEvent" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/log_analytics_datasource_windows_event azurerm_log_analytics_datasource_windows_event}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/loganalyticsdatasourcewindowsevent"

loganalyticsdatasourcewindowsevent.NewLogAnalyticsDatasourceWindowsEvent(scope Construct, id *string, config LogAnalyticsDatasourceWindowsEventConfig) LogAnalyticsDatasourceWindowsEvent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig">LogAnalyticsDatasourceWindowsEventConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig">LogAnalyticsDatasourceWindowsEventConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.putTimeouts"></a>

```go
func PutTimeouts(value LogAnalyticsDatasourceWindowsEventTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeouts">LogAnalyticsDatasourceWindowsEventTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/loganalyticsdatasourcewindowsevent"

loganalyticsdatasourcewindowsevent.LogAnalyticsDatasourceWindowsEvent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/loganalyticsdatasourcewindowsevent"

loganalyticsdatasourcewindowsevent.LogAnalyticsDatasourceWindowsEvent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/loganalyticsdatasourcewindowsevent"

loganalyticsdatasourcewindowsevent.LogAnalyticsDatasourceWindowsEvent_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference">LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.eventLogNameInput">EventLogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.eventTypesInput">EventTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.workspaceNameInput">WorkspaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.eventLogName">EventLogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.eventTypes">EventTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.workspaceName">WorkspaceName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.timeouts"></a>

```go
func Timeouts() LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference">LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference</a>

---

##### `EventLogNameInput`<sup>Optional</sup> <a name="EventLogNameInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.eventLogNameInput"></a>

```go
func EventLogNameInput() *string
```

- *Type:* *string

---

##### `EventTypesInput`<sup>Optional</sup> <a name="EventTypesInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.eventTypesInput"></a>

```go
func EventTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceNameInput`<sup>Optional</sup> <a name="WorkspaceNameInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.workspaceNameInput"></a>

```go
func WorkspaceNameInput() *string
```

- *Type:* *string

---

##### `EventLogName`<sup>Required</sup> <a name="EventLogName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.eventLogName"></a>

```go
func EventLogName() *string
```

- *Type:* *string

---

##### `EventTypes`<sup>Required</sup> <a name="EventTypes" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.eventTypes"></a>

```go
func EventTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `WorkspaceName`<sup>Required</sup> <a name="WorkspaceName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.workspaceName"></a>

```go
func WorkspaceName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEvent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsDatasourceWindowsEventConfig <a name="LogAnalyticsDatasourceWindowsEventConfig" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/loganalyticsdatasourcewindowsevent"

&loganalyticsdatasourcewindowsevent.LogAnalyticsDatasourceWindowsEventConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EventLogName: *string,
	EventTypes: *[]*string,
	Name: *string,
	ResourceGroupName: *string,
	WorkspaceName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.eventLogName">EventLogName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/log_analytics_datasource_windows_event#event_log_name LogAnalyticsDatasourceWindowsEvent#event_log_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.eventTypes">EventTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/log_analytics_datasource_windows_event#event_types LogAnalyticsDatasourceWindowsEvent#event_types}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/log_analytics_datasource_windows_event#name LogAnalyticsDatasourceWindowsEvent#name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/log_analytics_datasource_windows_event#resource_group_name LogAnalyticsDatasourceWindowsEvent#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.workspaceName">WorkspaceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/log_analytics_datasource_windows_event#workspace_name LogAnalyticsDatasourceWindowsEvent#workspace_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/log_analytics_datasource_windows_event#id LogAnalyticsDatasourceWindowsEvent#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeouts">LogAnalyticsDatasourceWindowsEventTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EventLogName`<sup>Required</sup> <a name="EventLogName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.eventLogName"></a>

```go
EventLogName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/log_analytics_datasource_windows_event#event_log_name LogAnalyticsDatasourceWindowsEvent#event_log_name}.

---

##### `EventTypes`<sup>Required</sup> <a name="EventTypes" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.eventTypes"></a>

```go
EventTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/log_analytics_datasource_windows_event#event_types LogAnalyticsDatasourceWindowsEvent#event_types}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/log_analytics_datasource_windows_event#name LogAnalyticsDatasourceWindowsEvent#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/log_analytics_datasource_windows_event#resource_group_name LogAnalyticsDatasourceWindowsEvent#resource_group_name}.

---

##### `WorkspaceName`<sup>Required</sup> <a name="WorkspaceName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.workspaceName"></a>

```go
WorkspaceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/log_analytics_datasource_windows_event#workspace_name LogAnalyticsDatasourceWindowsEvent#workspace_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/log_analytics_datasource_windows_event#id LogAnalyticsDatasourceWindowsEvent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventConfig.property.timeouts"></a>

```go
Timeouts LogAnalyticsDatasourceWindowsEventTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeouts">LogAnalyticsDatasourceWindowsEventTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/log_analytics_datasource_windows_event#timeouts LogAnalyticsDatasourceWindowsEvent#timeouts}

---

### LogAnalyticsDatasourceWindowsEventTimeouts <a name="LogAnalyticsDatasourceWindowsEventTimeouts" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/loganalyticsdatasourcewindowsevent"

&loganalyticsdatasourcewindowsevent.LogAnalyticsDatasourceWindowsEventTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/log_analytics_datasource_windows_event#create LogAnalyticsDatasourceWindowsEvent#create}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/log_analytics_datasource_windows_event#delete LogAnalyticsDatasourceWindowsEvent#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/log_analytics_datasource_windows_event#read LogAnalyticsDatasourceWindowsEvent#read}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/log_analytics_datasource_windows_event#update LogAnalyticsDatasourceWindowsEvent#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/log_analytics_datasource_windows_event#create LogAnalyticsDatasourceWindowsEvent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/log_analytics_datasource_windows_event#delete LogAnalyticsDatasourceWindowsEvent#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/log_analytics_datasource_windows_event#read LogAnalyticsDatasourceWindowsEvent#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/log_analytics_datasource_windows_event#update LogAnalyticsDatasourceWindowsEvent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference <a name="LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/loganalyticsdatasourcewindowsevent"

loganalyticsdatasourcewindowsevent.NewLogAnalyticsDatasourceWindowsEventTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsEvent.LogAnalyticsDatasourceWindowsEventTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



