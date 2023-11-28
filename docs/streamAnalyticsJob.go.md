# `streamAnalyticsJob` Submodule <a name="`streamAnalyticsJob` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsJob <a name="StreamAnalyticsJob" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job azurerm_stream_analytics_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsjob"

streamanalyticsjob.NewStreamAnalyticsJob(scope Construct, id *string, config StreamAnalyticsJobConfig) StreamAnalyticsJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig">StreamAnalyticsJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig">StreamAnalyticsJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putJobStorageAccount">PutJobStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetCompatibilityLevel">ResetCompatibilityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetContentStoragePolicy">ResetContentStoragePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetDataLocale">ResetDataLocale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetEventsLateArrivalMaxDelayInSeconds">ResetEventsLateArrivalMaxDelayInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetEventsOutOfOrderMaxDelayInSeconds">ResetEventsOutOfOrderMaxDelayInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetEventsOutOfOrderPolicy">ResetEventsOutOfOrderPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetJobStorageAccount">ResetJobStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetOutputErrorPolicy">ResetOutputErrorPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetStreamAnalyticsClusterId">ResetStreamAnalyticsClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetStreamingUnits">ResetStreamingUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putIdentity"></a>

```go
func PutIdentity(value StreamAnalyticsJobIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity">StreamAnalyticsJobIdentity</a>

---

##### `PutJobStorageAccount` <a name="PutJobStorageAccount" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putJobStorageAccount"></a>

```go
func PutJobStorageAccount(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putJobStorageAccount.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putTimeouts"></a>

```go
func PutTimeouts(value StreamAnalyticsJobTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts">StreamAnalyticsJobTimeouts</a>

---

##### `ResetCompatibilityLevel` <a name="ResetCompatibilityLevel" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetCompatibilityLevel"></a>

```go
func ResetCompatibilityLevel()
```

##### `ResetContentStoragePolicy` <a name="ResetContentStoragePolicy" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetContentStoragePolicy"></a>

```go
func ResetContentStoragePolicy()
```

##### `ResetDataLocale` <a name="ResetDataLocale" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetDataLocale"></a>

```go
func ResetDataLocale()
```

##### `ResetEventsLateArrivalMaxDelayInSeconds` <a name="ResetEventsLateArrivalMaxDelayInSeconds" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetEventsLateArrivalMaxDelayInSeconds"></a>

```go
func ResetEventsLateArrivalMaxDelayInSeconds()
```

##### `ResetEventsOutOfOrderMaxDelayInSeconds` <a name="ResetEventsOutOfOrderMaxDelayInSeconds" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetEventsOutOfOrderMaxDelayInSeconds"></a>

```go
func ResetEventsOutOfOrderMaxDelayInSeconds()
```

##### `ResetEventsOutOfOrderPolicy` <a name="ResetEventsOutOfOrderPolicy" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetEventsOutOfOrderPolicy"></a>

```go
func ResetEventsOutOfOrderPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetJobStorageAccount` <a name="ResetJobStorageAccount" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetJobStorageAccount"></a>

```go
func ResetJobStorageAccount()
```

##### `ResetOutputErrorPolicy` <a name="ResetOutputErrorPolicy" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetOutputErrorPolicy"></a>

```go
func ResetOutputErrorPolicy()
```

##### `ResetStreamAnalyticsClusterId` <a name="ResetStreamAnalyticsClusterId" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetStreamAnalyticsClusterId"></a>

```go
func ResetStreamAnalyticsClusterId()
```

##### `ResetStreamingUnits` <a name="ResetStreamingUnits" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetStreamingUnits"></a>

```go
func ResetStreamingUnits()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StreamAnalyticsJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsjob"

streamanalyticsjob.StreamAnalyticsJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsjob"

streamanalyticsjob.StreamAnalyticsJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsjob"

streamanalyticsjob.StreamAnalyticsJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsjob"

streamanalyticsjob.StreamAnalyticsJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StreamAnalyticsJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StreamAnalyticsJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StreamAnalyticsJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference">StreamAnalyticsJobIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.jobId">JobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.jobStorageAccount">JobStorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList">StreamAnalyticsJobJobStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference">StreamAnalyticsJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.compatibilityLevelInput">CompatibilityLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.contentStoragePolicyInput">ContentStoragePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.dataLocaleInput">DataLocaleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsLateArrivalMaxDelayInSecondsInput">EventsLateArrivalMaxDelayInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsOutOfOrderMaxDelayInSecondsInput">EventsOutOfOrderMaxDelayInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsOutOfOrderPolicyInput">EventsOutOfOrderPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity">StreamAnalyticsJobIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.jobStorageAccountInput">JobStorageAccountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.outputErrorPolicyInput">OutputErrorPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.streamAnalyticsClusterIdInput">StreamAnalyticsClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.streamingUnitsInput">StreamingUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.transformationQueryInput">TransformationQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.compatibilityLevel">CompatibilityLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.contentStoragePolicy">ContentStoragePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.dataLocale">DataLocale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsLateArrivalMaxDelayInSeconds">EventsLateArrivalMaxDelayInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsOutOfOrderMaxDelayInSeconds">EventsOutOfOrderMaxDelayInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsOutOfOrderPolicy">EventsOutOfOrderPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.outputErrorPolicy">OutputErrorPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.streamAnalyticsClusterId">StreamAnalyticsClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.streamingUnits">StreamingUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.transformationQuery">TransformationQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.identity"></a>

```go
func Identity() StreamAnalyticsJobIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference">StreamAnalyticsJobIdentityOutputReference</a>

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.jobId"></a>

```go
func JobId() *string
```

- *Type:* *string

---

##### `JobStorageAccount`<sup>Required</sup> <a name="JobStorageAccount" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.jobStorageAccount"></a>

```go
func JobStorageAccount() StreamAnalyticsJobJobStorageAccountList
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList">StreamAnalyticsJobJobStorageAccountList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.timeouts"></a>

```go
func Timeouts() StreamAnalyticsJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference">StreamAnalyticsJobTimeoutsOutputReference</a>

---

##### `CompatibilityLevelInput`<sup>Optional</sup> <a name="CompatibilityLevelInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.compatibilityLevelInput"></a>

```go
func CompatibilityLevelInput() *string
```

- *Type:* *string

---

##### `ContentStoragePolicyInput`<sup>Optional</sup> <a name="ContentStoragePolicyInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.contentStoragePolicyInput"></a>

```go
func ContentStoragePolicyInput() *string
```

- *Type:* *string

---

##### `DataLocaleInput`<sup>Optional</sup> <a name="DataLocaleInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.dataLocaleInput"></a>

```go
func DataLocaleInput() *string
```

- *Type:* *string

---

##### `EventsLateArrivalMaxDelayInSecondsInput`<sup>Optional</sup> <a name="EventsLateArrivalMaxDelayInSecondsInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsLateArrivalMaxDelayInSecondsInput"></a>

```go
func EventsLateArrivalMaxDelayInSecondsInput() *f64
```

- *Type:* *f64

---

##### `EventsOutOfOrderMaxDelayInSecondsInput`<sup>Optional</sup> <a name="EventsOutOfOrderMaxDelayInSecondsInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsOutOfOrderMaxDelayInSecondsInput"></a>

```go
func EventsOutOfOrderMaxDelayInSecondsInput() *f64
```

- *Type:* *f64

---

##### `EventsOutOfOrderPolicyInput`<sup>Optional</sup> <a name="EventsOutOfOrderPolicyInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsOutOfOrderPolicyInput"></a>

```go
func EventsOutOfOrderPolicyInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.identityInput"></a>

```go
func IdentityInput() StreamAnalyticsJobIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity">StreamAnalyticsJobIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `JobStorageAccountInput`<sup>Optional</sup> <a name="JobStorageAccountInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.jobStorageAccountInput"></a>

```go
func JobStorageAccountInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OutputErrorPolicyInput`<sup>Optional</sup> <a name="OutputErrorPolicyInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.outputErrorPolicyInput"></a>

```go
func OutputErrorPolicyInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `StreamAnalyticsClusterIdInput`<sup>Optional</sup> <a name="StreamAnalyticsClusterIdInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.streamAnalyticsClusterIdInput"></a>

```go
func StreamAnalyticsClusterIdInput() *string
```

- *Type:* *string

---

##### `StreamingUnitsInput`<sup>Optional</sup> <a name="StreamingUnitsInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.streamingUnitsInput"></a>

```go
func StreamingUnitsInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TransformationQueryInput`<sup>Optional</sup> <a name="TransformationQueryInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.transformationQueryInput"></a>

```go
func TransformationQueryInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `CompatibilityLevel`<sup>Required</sup> <a name="CompatibilityLevel" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.compatibilityLevel"></a>

```go
func CompatibilityLevel() *string
```

- *Type:* *string

---

##### `ContentStoragePolicy`<sup>Required</sup> <a name="ContentStoragePolicy" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.contentStoragePolicy"></a>

```go
func ContentStoragePolicy() *string
```

- *Type:* *string

---

##### `DataLocale`<sup>Required</sup> <a name="DataLocale" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.dataLocale"></a>

```go
func DataLocale() *string
```

- *Type:* *string

---

##### `EventsLateArrivalMaxDelayInSeconds`<sup>Required</sup> <a name="EventsLateArrivalMaxDelayInSeconds" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsLateArrivalMaxDelayInSeconds"></a>

```go
func EventsLateArrivalMaxDelayInSeconds() *f64
```

- *Type:* *f64

---

##### `EventsOutOfOrderMaxDelayInSeconds`<sup>Required</sup> <a name="EventsOutOfOrderMaxDelayInSeconds" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsOutOfOrderMaxDelayInSeconds"></a>

```go
func EventsOutOfOrderMaxDelayInSeconds() *f64
```

- *Type:* *f64

---

##### `EventsOutOfOrderPolicy`<sup>Required</sup> <a name="EventsOutOfOrderPolicy" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsOutOfOrderPolicy"></a>

```go
func EventsOutOfOrderPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OutputErrorPolicy`<sup>Required</sup> <a name="OutputErrorPolicy" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.outputErrorPolicy"></a>

```go
func OutputErrorPolicy() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `StreamAnalyticsClusterId`<sup>Required</sup> <a name="StreamAnalyticsClusterId" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.streamAnalyticsClusterId"></a>

```go
func StreamAnalyticsClusterId() *string
```

- *Type:* *string

---

##### `StreamingUnits`<sup>Required</sup> <a name="StreamingUnits" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.streamingUnits"></a>

```go
func StreamingUnits() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TransformationQuery`<sup>Required</sup> <a name="TransformationQuery" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.transformationQuery"></a>

```go
func TransformationQuery() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsJobConfig <a name="StreamAnalyticsJobConfig" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsjob"

&streamanalyticsjob.StreamAnalyticsJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	TransformationQuery: *string,
	CompatibilityLevel: *string,
	ContentStoragePolicy: *string,
	DataLocale: *string,
	EventsLateArrivalMaxDelayInSeconds: *f64,
	EventsOutOfOrderMaxDelayInSeconds: *f64,
	EventsOutOfOrderPolicy: *string,
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity,
	JobStorageAccount: interface{},
	OutputErrorPolicy: *string,
	StreamAnalyticsClusterId: *string,
	StreamingUnits: *f64,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#location StreamAnalyticsJob#location}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#name StreamAnalyticsJob#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#resource_group_name StreamAnalyticsJob#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.transformationQuery">TransformationQuery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#transformation_query StreamAnalyticsJob#transformation_query}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.compatibilityLevel">CompatibilityLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#compatibility_level StreamAnalyticsJob#compatibility_level}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.contentStoragePolicy">ContentStoragePolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#content_storage_policy StreamAnalyticsJob#content_storage_policy}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.dataLocale">DataLocale</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#data_locale StreamAnalyticsJob#data_locale}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.eventsLateArrivalMaxDelayInSeconds">EventsLateArrivalMaxDelayInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#events_late_arrival_max_delay_in_seconds StreamAnalyticsJob#events_late_arrival_max_delay_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.eventsOutOfOrderMaxDelayInSeconds">EventsOutOfOrderMaxDelayInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#events_out_of_order_max_delay_in_seconds StreamAnalyticsJob#events_out_of_order_max_delay_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.eventsOutOfOrderPolicy">EventsOutOfOrderPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#events_out_of_order_policy StreamAnalyticsJob#events_out_of_order_policy}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#id StreamAnalyticsJob#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity">StreamAnalyticsJobIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.jobStorageAccount">JobStorageAccount</a></code> | <code>interface{}</code> | job_storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.outputErrorPolicy">OutputErrorPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#output_error_policy StreamAnalyticsJob#output_error_policy}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.streamAnalyticsClusterId">StreamAnalyticsClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#stream_analytics_cluster_id StreamAnalyticsJob#stream_analytics_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.streamingUnits">StreamingUnits</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#streaming_units StreamAnalyticsJob#streaming_units}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#tags StreamAnalyticsJob#tags}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts">StreamAnalyticsJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#type StreamAnalyticsJob#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#location StreamAnalyticsJob#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#name StreamAnalyticsJob#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#resource_group_name StreamAnalyticsJob#resource_group_name}.

---

##### `TransformationQuery`<sup>Required</sup> <a name="TransformationQuery" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.transformationQuery"></a>

```go
TransformationQuery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#transformation_query StreamAnalyticsJob#transformation_query}.

---

##### `CompatibilityLevel`<sup>Optional</sup> <a name="CompatibilityLevel" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.compatibilityLevel"></a>

```go
CompatibilityLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#compatibility_level StreamAnalyticsJob#compatibility_level}.

---

##### `ContentStoragePolicy`<sup>Optional</sup> <a name="ContentStoragePolicy" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.contentStoragePolicy"></a>

```go
ContentStoragePolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#content_storage_policy StreamAnalyticsJob#content_storage_policy}.

---

##### `DataLocale`<sup>Optional</sup> <a name="DataLocale" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.dataLocale"></a>

```go
DataLocale *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#data_locale StreamAnalyticsJob#data_locale}.

---

##### `EventsLateArrivalMaxDelayInSeconds`<sup>Optional</sup> <a name="EventsLateArrivalMaxDelayInSeconds" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.eventsLateArrivalMaxDelayInSeconds"></a>

```go
EventsLateArrivalMaxDelayInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#events_late_arrival_max_delay_in_seconds StreamAnalyticsJob#events_late_arrival_max_delay_in_seconds}.

---

##### `EventsOutOfOrderMaxDelayInSeconds`<sup>Optional</sup> <a name="EventsOutOfOrderMaxDelayInSeconds" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.eventsOutOfOrderMaxDelayInSeconds"></a>

```go
EventsOutOfOrderMaxDelayInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#events_out_of_order_max_delay_in_seconds StreamAnalyticsJob#events_out_of_order_max_delay_in_seconds}.

---

##### `EventsOutOfOrderPolicy`<sup>Optional</sup> <a name="EventsOutOfOrderPolicy" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.eventsOutOfOrderPolicy"></a>

```go
EventsOutOfOrderPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#events_out_of_order_policy StreamAnalyticsJob#events_out_of_order_policy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#id StreamAnalyticsJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.identity"></a>

```go
Identity StreamAnalyticsJobIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity">StreamAnalyticsJobIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#identity StreamAnalyticsJob#identity}

---

##### `JobStorageAccount`<sup>Optional</sup> <a name="JobStorageAccount" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.jobStorageAccount"></a>

```go
JobStorageAccount interface{}
```

- *Type:* interface{}

job_storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#job_storage_account StreamAnalyticsJob#job_storage_account}

---

##### `OutputErrorPolicy`<sup>Optional</sup> <a name="OutputErrorPolicy" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.outputErrorPolicy"></a>

```go
OutputErrorPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#output_error_policy StreamAnalyticsJob#output_error_policy}.

---

##### `StreamAnalyticsClusterId`<sup>Optional</sup> <a name="StreamAnalyticsClusterId" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.streamAnalyticsClusterId"></a>

```go
StreamAnalyticsClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#stream_analytics_cluster_id StreamAnalyticsJob#stream_analytics_cluster_id}.

---

##### `StreamingUnits`<sup>Optional</sup> <a name="StreamingUnits" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.streamingUnits"></a>

```go
StreamingUnits *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#streaming_units StreamAnalyticsJob#streaming_units}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#tags StreamAnalyticsJob#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.timeouts"></a>

```go
Timeouts StreamAnalyticsJobTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts">StreamAnalyticsJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#timeouts StreamAnalyticsJob#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#type StreamAnalyticsJob#type}.

---

### StreamAnalyticsJobIdentity <a name="StreamAnalyticsJobIdentity" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsjob"

&streamanalyticsjob.StreamAnalyticsJobIdentity {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#type StreamAnalyticsJob#type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#type StreamAnalyticsJob#type}.

---

### StreamAnalyticsJobJobStorageAccount <a name="StreamAnalyticsJobJobStorageAccount" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsjob"

&streamanalyticsjob.StreamAnalyticsJobJobStorageAccount {
	AccountKey: *string,
	AccountName: *string,
	AuthenticationMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount.property.accountKey">AccountKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#account_key StreamAnalyticsJob#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount.property.accountName">AccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#account_name StreamAnalyticsJob#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount.property.authenticationMode">AuthenticationMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#authentication_mode StreamAnalyticsJob#authentication_mode}. |

---

##### `AccountKey`<sup>Required</sup> <a name="AccountKey" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount.property.accountKey"></a>

```go
AccountKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#account_key StreamAnalyticsJob#account_key}.

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount.property.accountName"></a>

```go
AccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#account_name StreamAnalyticsJob#account_name}.

---

##### `AuthenticationMode`<sup>Optional</sup> <a name="AuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount.property.authenticationMode"></a>

```go
AuthenticationMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#authentication_mode StreamAnalyticsJob#authentication_mode}.

---

### StreamAnalyticsJobTimeouts <a name="StreamAnalyticsJobTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsjob"

&streamanalyticsjob.StreamAnalyticsJobTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#create StreamAnalyticsJob#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#delete StreamAnalyticsJob#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#read StreamAnalyticsJob#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#update StreamAnalyticsJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#create StreamAnalyticsJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#delete StreamAnalyticsJob#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#read StreamAnalyticsJob#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/stream_analytics_job#update StreamAnalyticsJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsJobIdentityOutputReference <a name="StreamAnalyticsJobIdentityOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsjob"

streamanalyticsjob.NewStreamAnalyticsJobIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamAnalyticsJobIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity">StreamAnalyticsJobIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() StreamAnalyticsJobIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity">StreamAnalyticsJobIdentity</a>

---


### StreamAnalyticsJobJobStorageAccountList <a name="StreamAnalyticsJobJobStorageAccountList" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsjob"

streamanalyticsjob.NewStreamAnalyticsJobJobStorageAccountList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StreamAnalyticsJobJobStorageAccountList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.get"></a>

```go
func Get(index *f64) StreamAnalyticsJobJobStorageAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StreamAnalyticsJobJobStorageAccountOutputReference <a name="StreamAnalyticsJobJobStorageAccountOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsjob"

streamanalyticsjob.NewStreamAnalyticsJobJobStorageAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StreamAnalyticsJobJobStorageAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.resetAuthenticationMode">ResetAuthenticationMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationMode` <a name="ResetAuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.resetAuthenticationMode"></a>

```go
func ResetAuthenticationMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.accountKeyInput">AccountKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.accountNameInput">AccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.authenticationModeInput">AuthenticationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.accountKey">AccountKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.accountName">AccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.authenticationMode">AuthenticationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountKeyInput`<sup>Optional</sup> <a name="AccountKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.accountKeyInput"></a>

```go
func AccountKeyInput() *string
```

- *Type:* *string

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.accountNameInput"></a>

```go
func AccountNameInput() *string
```

- *Type:* *string

---

##### `AuthenticationModeInput`<sup>Optional</sup> <a name="AuthenticationModeInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.authenticationModeInput"></a>

```go
func AuthenticationModeInput() *string
```

- *Type:* *string

---

##### `AccountKey`<sup>Required</sup> <a name="AccountKey" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.accountKey"></a>

```go
func AccountKey() *string
```

- *Type:* *string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.accountName"></a>

```go
func AccountName() *string
```

- *Type:* *string

---

##### `AuthenticationMode`<sup>Required</sup> <a name="AuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.authenticationMode"></a>

```go
func AuthenticationMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StreamAnalyticsJobTimeoutsOutputReference <a name="StreamAnalyticsJobTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsjob"

streamanalyticsjob.NewStreamAnalyticsJobTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamAnalyticsJobTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



