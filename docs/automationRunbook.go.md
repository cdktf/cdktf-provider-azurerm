# `automationRunbook` Submodule <a name="`automationRunbook` Submodule" id="@cdktf/provider-azurerm.automationRunbook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRunbook <a name="AutomationRunbook" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook azurerm_automation_runbook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationrunbook"

automationrunbook.NewAutomationRunbook(scope Construct, id *string, config AutomationRunbookConfig) AutomationRunbook
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig">AutomationRunbookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig">AutomationRunbookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putDraft">PutDraft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putJobSchedule">PutJobSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putPublishContentLink">PutPublishContentLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetDraft">ResetDraft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetJobSchedule">ResetJobSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetLogActivityTraceLevel">ResetLogActivityTraceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetPublishContentLink">ResetPublishContentLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDraft` <a name="PutDraft" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putDraft"></a>

```go
func PutDraft(value AutomationRunbookDraft)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putDraft.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a>

---

##### `PutJobSchedule` <a name="PutJobSchedule" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putJobSchedule"></a>

```go
func PutJobSchedule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putJobSchedule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPublishContentLink` <a name="PutPublishContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putPublishContentLink"></a>

```go
func PutPublishContentLink(value AutomationRunbookPublishContentLink)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putPublishContentLink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putTimeouts"></a>

```go
func PutTimeouts(value AutomationRunbookTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a>

---

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetContent"></a>

```go
func ResetContent()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDraft` <a name="ResetDraft" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetDraft"></a>

```go
func ResetDraft()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetId"></a>

```go
func ResetId()
```

##### `ResetJobSchedule` <a name="ResetJobSchedule" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetJobSchedule"></a>

```go
func ResetJobSchedule()
```

##### `ResetLogActivityTraceLevel` <a name="ResetLogActivityTraceLevel" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetLogActivityTraceLevel"></a>

```go
func ResetLogActivityTraceLevel()
```

##### `ResetPublishContentLink` <a name="ResetPublishContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetPublishContentLink"></a>

```go
func ResetPublishContentLink()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AutomationRunbook resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationrunbook"

automationrunbook.AutomationRunbook_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationrunbook"

automationrunbook.AutomationRunbook_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationrunbook"

automationrunbook.AutomationRunbook_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationrunbook"

automationrunbook.AutomationRunbook_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AutomationRunbook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AutomationRunbook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AutomationRunbook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AutomationRunbook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.draft">Draft</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference">AutomationRunbookDraftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.jobSchedule">JobSchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList">AutomationRunbookJobScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.publishContentLink">PublishContentLink</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference">AutomationRunbookPublishContentLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference">AutomationRunbookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.automationAccountNameInput">AutomationAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.draftInput">DraftInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.jobScheduleInput">JobScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logActivityTraceLevelInput">LogActivityTraceLevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logProgressInput">LogProgressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logVerboseInput">LogVerboseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.publishContentLinkInput">PublishContentLinkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.runbookTypeInput">RunbookTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.automationAccountName">AutomationAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logActivityTraceLevel">LogActivityTraceLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logProgress">LogProgress</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logVerbose">LogVerbose</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.runbookType">RunbookType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Draft`<sup>Required</sup> <a name="Draft" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.draft"></a>

```go
func Draft() AutomationRunbookDraftOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference">AutomationRunbookDraftOutputReference</a>

---

##### `JobSchedule`<sup>Required</sup> <a name="JobSchedule" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.jobSchedule"></a>

```go
func JobSchedule() AutomationRunbookJobScheduleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList">AutomationRunbookJobScheduleList</a>

---

##### `PublishContentLink`<sup>Required</sup> <a name="PublishContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.publishContentLink"></a>

```go
func PublishContentLink() AutomationRunbookPublishContentLinkOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference">AutomationRunbookPublishContentLinkOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.timeouts"></a>

```go
func Timeouts() AutomationRunbookTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference">AutomationRunbookTimeoutsOutputReference</a>

---

##### `AutomationAccountNameInput`<sup>Optional</sup> <a name="AutomationAccountNameInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.automationAccountNameInput"></a>

```go
func AutomationAccountNameInput() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DraftInput`<sup>Optional</sup> <a name="DraftInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.draftInput"></a>

```go
func DraftInput() AutomationRunbookDraft
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `JobScheduleInput`<sup>Optional</sup> <a name="JobScheduleInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.jobScheduleInput"></a>

```go
func JobScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `LogActivityTraceLevelInput`<sup>Optional</sup> <a name="LogActivityTraceLevelInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logActivityTraceLevelInput"></a>

```go
func LogActivityTraceLevelInput() *f64
```

- *Type:* *f64

---

##### `LogProgressInput`<sup>Optional</sup> <a name="LogProgressInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logProgressInput"></a>

```go
func LogProgressInput() interface{}
```

- *Type:* interface{}

---

##### `LogVerboseInput`<sup>Optional</sup> <a name="LogVerboseInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logVerboseInput"></a>

```go
func LogVerboseInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PublishContentLinkInput`<sup>Optional</sup> <a name="PublishContentLinkInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.publishContentLinkInput"></a>

```go
func PublishContentLinkInput() AutomationRunbookPublishContentLink
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `RunbookTypeInput`<sup>Optional</sup> <a name="RunbookTypeInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.runbookTypeInput"></a>

```go
func RunbookTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AutomationAccountName`<sup>Required</sup> <a name="AutomationAccountName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.automationAccountName"></a>

```go
func AutomationAccountName() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `LogActivityTraceLevel`<sup>Required</sup> <a name="LogActivityTraceLevel" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logActivityTraceLevel"></a>

```go
func LogActivityTraceLevel() *f64
```

- *Type:* *f64

---

##### `LogProgress`<sup>Required</sup> <a name="LogProgress" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logProgress"></a>

```go
func LogProgress() interface{}
```

- *Type:* interface{}

---

##### `LogVerbose`<sup>Required</sup> <a name="LogVerbose" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.logVerbose"></a>

```go
func LogVerbose() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `RunbookType`<sup>Required</sup> <a name="RunbookType" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.runbookType"></a>

```go
func RunbookType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbook.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRunbookConfig <a name="AutomationRunbookConfig" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationrunbook"

&automationrunbook.AutomationRunbookConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AutomationAccountName: *string,
	Location: *string,
	LogProgress: interface{},
	LogVerbose: interface{},
	Name: *string,
	ResourceGroupName: *string,
	RunbookType: *string,
	Content: *string,
	Description: *string,
	Draft: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.automationRunbook.AutomationRunbookDraft,
	Id: *string,
	JobSchedule: interface{},
	LogActivityTraceLevel: *f64,
	PublishContentLink: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.automationRunbook.AutomationRunbookPublishContentLink,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.automationRunbook.AutomationRunbookTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.automationAccountName">AutomationAccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#automation_account_name AutomationRunbook#automation_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#location AutomationRunbook#location}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.logProgress">LogProgress</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#log_progress AutomationRunbook#log_progress}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.logVerbose">LogVerbose</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#log_verbose AutomationRunbook#log_verbose}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#name AutomationRunbook#name}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#resource_group_name AutomationRunbook#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.runbookType">RunbookType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#runbook_type AutomationRunbook#runbook_type}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#content AutomationRunbook#content}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#description AutomationRunbook#description}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.draft">Draft</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a></code> | draft block. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#id AutomationRunbook#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.jobSchedule">JobSchedule</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#job_schedule AutomationRunbook#job_schedule}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.logActivityTraceLevel">LogActivityTraceLevel</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#log_activity_trace_level AutomationRunbook#log_activity_trace_level}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.publishContentLink">PublishContentLink</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a></code> | publish_content_link block. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#tags AutomationRunbook#tags}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutomationAccountName`<sup>Required</sup> <a name="AutomationAccountName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.automationAccountName"></a>

```go
AutomationAccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#automation_account_name AutomationRunbook#automation_account_name}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#location AutomationRunbook#location}.

---

##### `LogProgress`<sup>Required</sup> <a name="LogProgress" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.logProgress"></a>

```go
LogProgress interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#log_progress AutomationRunbook#log_progress}.

---

##### `LogVerbose`<sup>Required</sup> <a name="LogVerbose" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.logVerbose"></a>

```go
LogVerbose interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#log_verbose AutomationRunbook#log_verbose}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#name AutomationRunbook#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#resource_group_name AutomationRunbook#resource_group_name}.

---

##### `RunbookType`<sup>Required</sup> <a name="RunbookType" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.runbookType"></a>

```go
RunbookType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#runbook_type AutomationRunbook#runbook_type}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#content AutomationRunbook#content}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#description AutomationRunbook#description}.

---

##### `Draft`<sup>Optional</sup> <a name="Draft" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.draft"></a>

```go
Draft AutomationRunbookDraft
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a>

draft block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#draft AutomationRunbook#draft}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#id AutomationRunbook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JobSchedule`<sup>Optional</sup> <a name="JobSchedule" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.jobSchedule"></a>

```go
JobSchedule interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#job_schedule AutomationRunbook#job_schedule}.

---

##### `LogActivityTraceLevel`<sup>Optional</sup> <a name="LogActivityTraceLevel" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.logActivityTraceLevel"></a>

```go
LogActivityTraceLevel *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#log_activity_trace_level AutomationRunbook#log_activity_trace_level}.

---

##### `PublishContentLink`<sup>Optional</sup> <a name="PublishContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.publishContentLink"></a>

```go
PublishContentLink AutomationRunbookPublishContentLink
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a>

publish_content_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#publish_content_link AutomationRunbook#publish_content_link}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#tags AutomationRunbook#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookConfig.property.timeouts"></a>

```go
Timeouts AutomationRunbookTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts">AutomationRunbookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#timeouts AutomationRunbook#timeouts}

---

### AutomationRunbookDraft <a name="AutomationRunbookDraft" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationrunbook"

&automationrunbook.AutomationRunbookDraft {
	ContentLink: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.automationRunbook.AutomationRunbookDraftContentLink,
	EditModeEnabled: interface{},
	OutputTypes: *[]*string,
	Parameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.contentLink">ContentLink</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a></code> | content_link block. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.editModeEnabled">EditModeEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#edit_mode_enabled AutomationRunbook#edit_mode_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.outputTypes">OutputTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#output_types AutomationRunbook#output_types}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.parameters">Parameters</a></code> | <code>interface{}</code> | parameters block. |

---

##### `ContentLink`<sup>Optional</sup> <a name="ContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.contentLink"></a>

```go
ContentLink AutomationRunbookDraftContentLink
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a>

content_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#content_link AutomationRunbook#content_link}

---

##### `EditModeEnabled`<sup>Optional</sup> <a name="EditModeEnabled" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.editModeEnabled"></a>

```go
EditModeEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#edit_mode_enabled AutomationRunbook#edit_mode_enabled}.

---

##### `OutputTypes`<sup>Optional</sup> <a name="OutputTypes" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.outputTypes"></a>

```go
OutputTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#output_types AutomationRunbook#output_types}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft.property.parameters"></a>

```go
Parameters interface{}
```

- *Type:* interface{}

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#parameters AutomationRunbook#parameters}

---

### AutomationRunbookDraftContentLink <a name="AutomationRunbookDraftContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationrunbook"

&automationrunbook.AutomationRunbookDraftContentLink {
	Uri: *string,
	Hash: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.automationRunbook.AutomationRunbookDraftContentLinkHash,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.property.uri">Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#uri AutomationRunbook#uri}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.property.hash">Hash</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a></code> | hash block. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#version AutomationRunbook#version}. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#uri AutomationRunbook#uri}.

---

##### `Hash`<sup>Optional</sup> <a name="Hash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.property.hash"></a>

```go
Hash AutomationRunbookDraftContentLinkHash
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a>

hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#hash AutomationRunbook#hash}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#version AutomationRunbook#version}.

---

### AutomationRunbookDraftContentLinkHash <a name="AutomationRunbookDraftContentLinkHash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationrunbook"

&automationrunbook.AutomationRunbookDraftContentLinkHash {
	Algorithm: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash.property.algorithm">Algorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#algorithm AutomationRunbook#algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#value AutomationRunbook#value}. |

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#algorithm AutomationRunbook#algorithm}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#value AutomationRunbook#value}.

---

### AutomationRunbookDraftParameters <a name="AutomationRunbookDraftParameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationrunbook"

&automationrunbook.AutomationRunbookDraftParameters {
	Key: *string,
	Type: *string,
	DefaultValue: *string,
	Mandatory: interface{},
	Position: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#key AutomationRunbook#key}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#type AutomationRunbook#type}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#default_value AutomationRunbook#default_value}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.mandatory">Mandatory</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#mandatory AutomationRunbook#mandatory}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.position">Position</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#position AutomationRunbook#position}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#key AutomationRunbook#key}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#type AutomationRunbook#type}.

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.defaultValue"></a>

```go
DefaultValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#default_value AutomationRunbook#default_value}.

---

##### `Mandatory`<sup>Optional</sup> <a name="Mandatory" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.mandatory"></a>

```go
Mandatory interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#mandatory AutomationRunbook#mandatory}.

---

##### `Position`<sup>Optional</sup> <a name="Position" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParameters.property.position"></a>

```go
Position *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#position AutomationRunbook#position}.

---

### AutomationRunbookJobSchedule <a name="AutomationRunbookJobSchedule" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationrunbook"

&automationrunbook.AutomationRunbookJobSchedule {
	JobScheduleId: *string,
	Parameters: *map[string]*string,
	RunOn: *string,
	ScheduleName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.jobScheduleId">JobScheduleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#job_schedule_id AutomationRunbook#job_schedule_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#parameters AutomationRunbook#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.runOn">RunOn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#run_on AutomationRunbook#run_on}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.scheduleName">ScheduleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#schedule_name AutomationRunbook#schedule_name}. |

---

##### `JobScheduleId`<sup>Optional</sup> <a name="JobScheduleId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.jobScheduleId"></a>

```go
JobScheduleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#job_schedule_id AutomationRunbook#job_schedule_id}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#parameters AutomationRunbook#parameters}.

---

##### `RunOn`<sup>Optional</sup> <a name="RunOn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.runOn"></a>

```go
RunOn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#run_on AutomationRunbook#run_on}.

---

##### `ScheduleName`<sup>Optional</sup> <a name="ScheduleName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobSchedule.property.scheduleName"></a>

```go
ScheduleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#schedule_name AutomationRunbook#schedule_name}.

---

### AutomationRunbookPublishContentLink <a name="AutomationRunbookPublishContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationrunbook"

&automationrunbook.AutomationRunbookPublishContentLink {
	Uri: *string,
	Hash: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.automationRunbook.AutomationRunbookPublishContentLinkHash,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.property.uri">Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#uri AutomationRunbook#uri}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.property.hash">Hash</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a></code> | hash block. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#version AutomationRunbook#version}. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#uri AutomationRunbook#uri}.

---

##### `Hash`<sup>Optional</sup> <a name="Hash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.property.hash"></a>

```go
Hash AutomationRunbookPublishContentLinkHash
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a>

hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#hash AutomationRunbook#hash}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#version AutomationRunbook#version}.

---

### AutomationRunbookPublishContentLinkHash <a name="AutomationRunbookPublishContentLinkHash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationrunbook"

&automationrunbook.AutomationRunbookPublishContentLinkHash {
	Algorithm: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash.property.algorithm">Algorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#algorithm AutomationRunbook#algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#value AutomationRunbook#value}. |

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#algorithm AutomationRunbook#algorithm}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#value AutomationRunbook#value}.

---

### AutomationRunbookTimeouts <a name="AutomationRunbookTimeouts" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationrunbook"

&automationrunbook.AutomationRunbookTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#create AutomationRunbook#create}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#delete AutomationRunbook#delete}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#read AutomationRunbook#read}. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#update AutomationRunbook#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#create AutomationRunbook#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#delete AutomationRunbook#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#read AutomationRunbook#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/automation_runbook#update AutomationRunbook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationRunbookDraftContentLinkHashOutputReference <a name="AutomationRunbookDraftContentLinkHashOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationrunbook"

automationrunbook.NewAutomationRunbookDraftContentLinkHashOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomationRunbookDraftContentLinkHashOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference.property.internalValue"></a>

```go
func InternalValue() AutomationRunbookDraftContentLinkHash
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a>

---


### AutomationRunbookDraftContentLinkOutputReference <a name="AutomationRunbookDraftContentLinkOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationrunbook"

automationrunbook.NewAutomationRunbookDraftContentLinkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomationRunbookDraftContentLinkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.putHash">PutHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resetHash">ResetHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHash` <a name="PutHash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.putHash"></a>

```go
func PutHash(value AutomationRunbookDraftContentLinkHash)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.putHash.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a>

---

##### `ResetHash` <a name="ResetHash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resetHash"></a>

```go
func ResetHash()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.hash">Hash</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference">AutomationRunbookDraftContentLinkHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.hashInput">HashInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.hash"></a>

```go
func Hash() AutomationRunbookDraftContentLinkHashOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHashOutputReference">AutomationRunbookDraftContentLinkHashOutputReference</a>

---

##### `HashInput`<sup>Optional</sup> <a name="HashInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.hashInput"></a>

```go
func HashInput() AutomationRunbookDraftContentLinkHash
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkHash">AutomationRunbookDraftContentLinkHash</a>

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference.property.internalValue"></a>

```go
func InternalValue() AutomationRunbookDraftContentLink
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a>

---


### AutomationRunbookDraftOutputReference <a name="AutomationRunbookDraftOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationrunbook"

automationrunbook.NewAutomationRunbookDraftOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomationRunbookDraftOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.putContentLink">PutContentLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetContentLink">ResetContentLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetEditModeEnabled">ResetEditModeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetOutputTypes">ResetOutputTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContentLink` <a name="PutContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.putContentLink"></a>

```go
func PutContentLink(value AutomationRunbookDraftContentLink)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.putContentLink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a>

---

##### `PutParameters` <a name="PutParameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.putParameters"></a>

```go
func PutParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.putParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetContentLink` <a name="ResetContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetContentLink"></a>

```go
func ResetContentLink()
```

##### `ResetEditModeEnabled` <a name="ResetEditModeEnabled" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetEditModeEnabled"></a>

```go
func ResetEditModeEnabled()
```

##### `ResetOutputTypes` <a name="ResetOutputTypes" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetOutputTypes"></a>

```go
func ResetOutputTypes()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.contentLink">ContentLink</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference">AutomationRunbookDraftContentLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList">AutomationRunbookDraftParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.contentLinkInput">ContentLinkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.editModeEnabledInput">EditModeEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.outputTypesInput">OutputTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.editModeEnabled">EditModeEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.outputTypes">OutputTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentLink`<sup>Required</sup> <a name="ContentLink" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.contentLink"></a>

```go
func ContentLink() AutomationRunbookDraftContentLinkOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLinkOutputReference">AutomationRunbookDraftContentLinkOutputReference</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.parameters"></a>

```go
func Parameters() AutomationRunbookDraftParametersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList">AutomationRunbookDraftParametersList</a>

---

##### `ContentLinkInput`<sup>Optional</sup> <a name="ContentLinkInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.contentLinkInput"></a>

```go
func ContentLinkInput() AutomationRunbookDraftContentLink
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftContentLink">AutomationRunbookDraftContentLink</a>

---

##### `EditModeEnabledInput`<sup>Optional</sup> <a name="EditModeEnabledInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.editModeEnabledInput"></a>

```go
func EditModeEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OutputTypesInput`<sup>Optional</sup> <a name="OutputTypesInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.outputTypesInput"></a>

```go
func OutputTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `EditModeEnabled`<sup>Required</sup> <a name="EditModeEnabled" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.editModeEnabled"></a>

```go
func EditModeEnabled() interface{}
```

- *Type:* interface{}

---

##### `OutputTypes`<sup>Required</sup> <a name="OutputTypes" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.outputTypes"></a>

```go
func OutputTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftOutputReference.property.internalValue"></a>

```go
func InternalValue() AutomationRunbookDraft
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraft">AutomationRunbookDraft</a>

---


### AutomationRunbookDraftParametersList <a name="AutomationRunbookDraftParametersList" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationrunbook"

automationrunbook.NewAutomationRunbookDraftParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AutomationRunbookDraftParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.get"></a>

```go
func Get(index *f64) AutomationRunbookDraftParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AutomationRunbookDraftParametersOutputReference <a name="AutomationRunbookDraftParametersOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationrunbook"

automationrunbook.NewAutomationRunbookDraftParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AutomationRunbookDraftParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resetMandatory">ResetMandatory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resetPosition">ResetPosition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resetDefaultValue"></a>

```go
func ResetDefaultValue()
```

##### `ResetMandatory` <a name="ResetMandatory" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resetMandatory"></a>

```go
func ResetMandatory()
```

##### `ResetPosition` <a name="ResetPosition" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.resetPosition"></a>

```go
func ResetPosition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.mandatoryInput">MandatoryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.positionInput">PositionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.mandatory">Mandatory</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.position">Position</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.defaultValueInput"></a>

```go
func DefaultValueInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MandatoryInput`<sup>Optional</sup> <a name="MandatoryInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.mandatoryInput"></a>

```go
func MandatoryInput() interface{}
```

- *Type:* interface{}

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.positionInput"></a>

```go
func PositionInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Mandatory`<sup>Required</sup> <a name="Mandatory" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.mandatory"></a>

```go
func Mandatory() interface{}
```

- *Type:* interface{}

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.position"></a>

```go
func Position() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookDraftParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AutomationRunbookJobScheduleList <a name="AutomationRunbookJobScheduleList" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationrunbook"

automationrunbook.NewAutomationRunbookJobScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AutomationRunbookJobScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.get"></a>

```go
func Get(index *f64) AutomationRunbookJobScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AutomationRunbookJobScheduleOutputReference <a name="AutomationRunbookJobScheduleOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationrunbook"

automationrunbook.NewAutomationRunbookJobScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AutomationRunbookJobScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetJobScheduleId">ResetJobScheduleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetRunOn">ResetRunOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetScheduleName">ResetScheduleName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJobScheduleId` <a name="ResetJobScheduleId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetJobScheduleId"></a>

```go
func ResetJobScheduleId()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetRunOn` <a name="ResetRunOn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetRunOn"></a>

```go
func ResetRunOn()
```

##### `ResetScheduleName` <a name="ResetScheduleName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.resetScheduleName"></a>

```go
func ResetScheduleName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.jobScheduleIdInput">JobScheduleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.runOnInput">RunOnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.scheduleNameInput">ScheduleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.jobScheduleId">JobScheduleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.runOn">RunOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.scheduleName">ScheduleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JobScheduleIdInput`<sup>Optional</sup> <a name="JobScheduleIdInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.jobScheduleIdInput"></a>

```go
func JobScheduleIdInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RunOnInput`<sup>Optional</sup> <a name="RunOnInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.runOnInput"></a>

```go
func RunOnInput() *string
```

- *Type:* *string

---

##### `ScheduleNameInput`<sup>Optional</sup> <a name="ScheduleNameInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.scheduleNameInput"></a>

```go
func ScheduleNameInput() *string
```

- *Type:* *string

---

##### `JobScheduleId`<sup>Required</sup> <a name="JobScheduleId" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.jobScheduleId"></a>

```go
func JobScheduleId() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RunOn`<sup>Required</sup> <a name="RunOn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.runOn"></a>

```go
func RunOn() *string
```

- *Type:* *string

---

##### `ScheduleName`<sup>Required</sup> <a name="ScheduleName" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.scheduleName"></a>

```go
func ScheduleName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookJobScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AutomationRunbookPublishContentLinkHashOutputReference <a name="AutomationRunbookPublishContentLinkHashOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationrunbook"

automationrunbook.NewAutomationRunbookPublishContentLinkHashOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomationRunbookPublishContentLinkHashOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference.property.internalValue"></a>

```go
func InternalValue() AutomationRunbookPublishContentLinkHash
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a>

---


### AutomationRunbookPublishContentLinkOutputReference <a name="AutomationRunbookPublishContentLinkOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationrunbook"

automationrunbook.NewAutomationRunbookPublishContentLinkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomationRunbookPublishContentLinkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.putHash">PutHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resetHash">ResetHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHash` <a name="PutHash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.putHash"></a>

```go
func PutHash(value AutomationRunbookPublishContentLinkHash)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.putHash.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a>

---

##### `ResetHash` <a name="ResetHash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resetHash"></a>

```go
func ResetHash()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.hash">Hash</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference">AutomationRunbookPublishContentLinkHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.hashInput">HashInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.hash"></a>

```go
func Hash() AutomationRunbookPublishContentLinkHashOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHashOutputReference">AutomationRunbookPublishContentLinkHashOutputReference</a>

---

##### `HashInput`<sup>Optional</sup> <a name="HashInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.hashInput"></a>

```go
func HashInput() AutomationRunbookPublishContentLinkHash
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkHash">AutomationRunbookPublishContentLinkHash</a>

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLinkOutputReference.property.internalValue"></a>

```go
func InternalValue() AutomationRunbookPublishContentLink
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookPublishContentLink">AutomationRunbookPublishContentLink</a>

---


### AutomationRunbookTimeoutsOutputReference <a name="AutomationRunbookTimeoutsOutputReference" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationrunbook"

automationrunbook.NewAutomationRunbookTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomationRunbookTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationRunbook.AutomationRunbookTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



