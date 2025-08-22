# `automationSourceControl` Submodule <a name="`automationSourceControl` Submodule" id="@cdktf/provider-azurerm.automationSourceControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationSourceControl <a name="AutomationSourceControl" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control azurerm_automation_source_control}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationsourcecontrol"

automationsourcecontrol.NewAutomationSourceControl(scope Construct, id *string, config AutomationSourceControlConfig) AutomationSourceControl
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig">AutomationSourceControlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig">AutomationSourceControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.putSecurity">PutSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.resetAutomaticSync">ResetAutomaticSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.resetPublishRunbookEnabled">ResetPublishRunbookEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSecurity` <a name="PutSecurity" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.putSecurity"></a>

```go
func PutSecurity(value AutomationSourceControlSecurity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.putSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurity">AutomationSourceControlSecurity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.putTimeouts"></a>

```go
func PutTimeouts(value AutomationSourceControlTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeouts">AutomationSourceControlTimeouts</a>

---

##### `ResetAutomaticSync` <a name="ResetAutomaticSync" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.resetAutomaticSync"></a>

```go
func ResetAutomaticSync()
```

##### `ResetBranch` <a name="ResetBranch" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.resetBranch"></a>

```go
func ResetBranch()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.resetId"></a>

```go
func ResetId()
```

##### `ResetPublishRunbookEnabled` <a name="ResetPublishRunbookEnabled" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.resetPublishRunbookEnabled"></a>

```go
func ResetPublishRunbookEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AutomationSourceControl resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationsourcecontrol"

automationsourcecontrol.AutomationSourceControl_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationsourcecontrol"

automationsourcecontrol.AutomationSourceControl_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationsourcecontrol"

automationsourcecontrol.AutomationSourceControl_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationsourcecontrol"

automationsourcecontrol.AutomationSourceControl_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AutomationSourceControl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AutomationSourceControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AutomationSourceControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AutomationSourceControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.security">Security</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference">AutomationSourceControlSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference">AutomationSourceControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.automaticSyncInput">AutomaticSyncInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.automationAccountIdInput">AutomationAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.folderPathInput">FolderPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.publishRunbookEnabledInput">PublishRunbookEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.repositoryUrlInput">RepositoryUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.securityInput">SecurityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurity">AutomationSourceControlSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.sourceControlTypeInput">SourceControlTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.automaticSync">AutomaticSync</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.automationAccountId">AutomationAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.folderPath">FolderPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.publishRunbookEnabled">PublishRunbookEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.repositoryUrl">RepositoryUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.sourceControlType">SourceControlType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Security`<sup>Required</sup> <a name="Security" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.security"></a>

```go
func Security() AutomationSourceControlSecurityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference">AutomationSourceControlSecurityOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.timeouts"></a>

```go
func Timeouts() AutomationSourceControlTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference">AutomationSourceControlTimeoutsOutputReference</a>

---

##### `AutomaticSyncInput`<sup>Optional</sup> <a name="AutomaticSyncInput" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.automaticSyncInput"></a>

```go
func AutomaticSyncInput() interface{}
```

- *Type:* interface{}

---

##### `AutomationAccountIdInput`<sup>Optional</sup> <a name="AutomationAccountIdInput" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.automationAccountIdInput"></a>

```go
func AutomationAccountIdInput() *string
```

- *Type:* *string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FolderPathInput`<sup>Optional</sup> <a name="FolderPathInput" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.folderPathInput"></a>

```go
func FolderPathInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PublishRunbookEnabledInput`<sup>Optional</sup> <a name="PublishRunbookEnabledInput" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.publishRunbookEnabledInput"></a>

```go
func PublishRunbookEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RepositoryUrlInput`<sup>Optional</sup> <a name="RepositoryUrlInput" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.repositoryUrlInput"></a>

```go
func RepositoryUrlInput() *string
```

- *Type:* *string

---

##### `SecurityInput`<sup>Optional</sup> <a name="SecurityInput" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.securityInput"></a>

```go
func SecurityInput() AutomationSourceControlSecurity
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurity">AutomationSourceControlSecurity</a>

---

##### `SourceControlTypeInput`<sup>Optional</sup> <a name="SourceControlTypeInput" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.sourceControlTypeInput"></a>

```go
func SourceControlTypeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AutomaticSync`<sup>Required</sup> <a name="AutomaticSync" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.automaticSync"></a>

```go
func AutomaticSync() interface{}
```

- *Type:* interface{}

---

##### `AutomationAccountId`<sup>Required</sup> <a name="AutomationAccountId" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.automationAccountId"></a>

```go
func AutomationAccountId() *string
```

- *Type:* *string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FolderPath`<sup>Required</sup> <a name="FolderPath" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.folderPath"></a>

```go
func FolderPath() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublishRunbookEnabled`<sup>Required</sup> <a name="PublishRunbookEnabled" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.publishRunbookEnabled"></a>

```go
func PublishRunbookEnabled() interface{}
```

- *Type:* interface{}

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.repositoryUrl"></a>

```go
func RepositoryUrl() *string
```

- *Type:* *string

---

##### `SourceControlType`<sup>Required</sup> <a name="SourceControlType" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.sourceControlType"></a>

```go
func SourceControlType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControl.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationSourceControlConfig <a name="AutomationSourceControlConfig" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationsourcecontrol"

&automationsourcecontrol.AutomationSourceControlConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AutomationAccountId: *string,
	FolderPath: *string,
	Name: *string,
	RepositoryUrl: *string,
	Security: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.automationSourceControl.AutomationSourceControlSecurity,
	SourceControlType: *string,
	AutomaticSync: interface{},
	Branch: *string,
	Description: *string,
	Id: *string,
	PublishRunbookEnabled: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.automationSourceControl.AutomationSourceControlTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.automationAccountId">AutomationAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#automation_account_id AutomationSourceControl#automation_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.folderPath">FolderPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#folder_path AutomationSourceControl#folder_path}. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#name AutomationSourceControl#name}. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.repositoryUrl">RepositoryUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#repository_url AutomationSourceControl#repository_url}. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.security">Security</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurity">AutomationSourceControlSecurity</a></code> | security block. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.sourceControlType">SourceControlType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#source_control_type AutomationSourceControl#source_control_type}. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.automaticSync">AutomaticSync</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#automatic_sync AutomationSourceControl#automatic_sync}. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.branch">Branch</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#branch AutomationSourceControl#branch}. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#description AutomationSourceControl#description}. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#id AutomationSourceControl#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.publishRunbookEnabled">PublishRunbookEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#publish_runbook_enabled AutomationSourceControl#publish_runbook_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeouts">AutomationSourceControlTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutomationAccountId`<sup>Required</sup> <a name="AutomationAccountId" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.automationAccountId"></a>

```go
AutomationAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#automation_account_id AutomationSourceControl#automation_account_id}.

---

##### `FolderPath`<sup>Required</sup> <a name="FolderPath" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.folderPath"></a>

```go
FolderPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#folder_path AutomationSourceControl#folder_path}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#name AutomationSourceControl#name}.

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.repositoryUrl"></a>

```go
RepositoryUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#repository_url AutomationSourceControl#repository_url}.

---

##### `Security`<sup>Required</sup> <a name="Security" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.security"></a>

```go
Security AutomationSourceControlSecurity
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurity">AutomationSourceControlSecurity</a>

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#security AutomationSourceControl#security}

---

##### `SourceControlType`<sup>Required</sup> <a name="SourceControlType" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.sourceControlType"></a>

```go
SourceControlType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#source_control_type AutomationSourceControl#source_control_type}.

---

##### `AutomaticSync`<sup>Optional</sup> <a name="AutomaticSync" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.automaticSync"></a>

```go
AutomaticSync interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#automatic_sync AutomationSourceControl#automatic_sync}.

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#branch AutomationSourceControl#branch}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#description AutomationSourceControl#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#id AutomationSourceControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PublishRunbookEnabled`<sup>Optional</sup> <a name="PublishRunbookEnabled" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.publishRunbookEnabled"></a>

```go
PublishRunbookEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#publish_runbook_enabled AutomationSourceControl#publish_runbook_enabled}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlConfig.property.timeouts"></a>

```go
Timeouts AutomationSourceControlTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeouts">AutomationSourceControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#timeouts AutomationSourceControl#timeouts}

---

### AutomationSourceControlSecurity <a name="AutomationSourceControlSecurity" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationsourcecontrol"

&automationsourcecontrol.AutomationSourceControlSecurity {
	Token: *string,
	TokenType: *string,
	RefreshToken: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurity.property.token">Token</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#token AutomationSourceControl#token}. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurity.property.tokenType">TokenType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#token_type AutomationSourceControl#token_type}. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurity.property.refreshToken">RefreshToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#refresh_token AutomationSourceControl#refresh_token}. |

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurity.property.token"></a>

```go
Token *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#token AutomationSourceControl#token}.

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurity.property.tokenType"></a>

```go
TokenType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#token_type AutomationSourceControl#token_type}.

---

##### `RefreshToken`<sup>Optional</sup> <a name="RefreshToken" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurity.property.refreshToken"></a>

```go
RefreshToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#refresh_token AutomationSourceControl#refresh_token}.

---

### AutomationSourceControlTimeouts <a name="AutomationSourceControlTimeouts" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationsourcecontrol"

&automationsourcecontrol.AutomationSourceControlTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#create AutomationSourceControl#create}. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#delete AutomationSourceControl#delete}. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#read AutomationSourceControl#read}. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#update AutomationSourceControl#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#create AutomationSourceControl#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#delete AutomationSourceControl#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#read AutomationSourceControl#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/automation_source_control#update AutomationSourceControl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationSourceControlSecurityOutputReference <a name="AutomationSourceControlSecurityOutputReference" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationsourcecontrol"

automationsourcecontrol.NewAutomationSourceControlSecurityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomationSourceControlSecurityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.resetRefreshToken">ResetRefreshToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRefreshToken` <a name="ResetRefreshToken" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.resetRefreshToken"></a>

```go
func ResetRefreshToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.property.refreshTokenInput">RefreshTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.property.tokenTypeInput">TokenTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.property.refreshToken">RefreshToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.property.tokenType">TokenType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurity">AutomationSourceControlSecurity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RefreshTokenInput`<sup>Optional</sup> <a name="RefreshTokenInput" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.property.refreshTokenInput"></a>

```go
func RefreshTokenInput() *string
```

- *Type:* *string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.property.tokenTypeInput"></a>

```go
func TokenTypeInput() *string
```

- *Type:* *string

---

##### `RefreshToken`<sup>Required</sup> <a name="RefreshToken" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.property.refreshToken"></a>

```go
func RefreshToken() *string
```

- *Type:* *string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.property.tokenType"></a>

```go
func TokenType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurityOutputReference.property.internalValue"></a>

```go
func InternalValue() AutomationSourceControlSecurity
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlSecurity">AutomationSourceControlSecurity</a>

---


### AutomationSourceControlTimeoutsOutputReference <a name="AutomationSourceControlTimeoutsOutputReference" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationsourcecontrol"

automationsourcecontrol.NewAutomationSourceControlTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomationSourceControlTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationSourceControl.AutomationSourceControlTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



