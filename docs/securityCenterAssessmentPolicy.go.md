# `securityCenterAssessmentPolicy` Submodule <a name="`securityCenterAssessmentPolicy` Submodule" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityCenterAssessmentPolicy <a name="SecurityCenterAssessmentPolicy" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy azurerm_security_center_assessment_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterassessmentpolicy"

securitycenterassessmentpolicy.NewSecurityCenterAssessmentPolicy(scope Construct, id *string, config SecurityCenterAssessmentPolicyConfig) SecurityCenterAssessmentPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig">SecurityCenterAssessmentPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig">SecurityCenterAssessmentPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetCategories">ResetCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetImplementationEffort">ResetImplementationEffort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetRemediationDescription">ResetRemediationDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetSeverity">ResetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetThreats">ResetThreats</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetUserImpact">ResetUserImpact</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.putTimeouts"></a>

```go
func PutTimeouts(value SecurityCenterAssessmentPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts">SecurityCenterAssessmentPolicyTimeouts</a>

---

##### `ResetCategories` <a name="ResetCategories" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetCategories"></a>

```go
func ResetCategories()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetImplementationEffort` <a name="ResetImplementationEffort" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetImplementationEffort"></a>

```go
func ResetImplementationEffort()
```

##### `ResetRemediationDescription` <a name="ResetRemediationDescription" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetRemediationDescription"></a>

```go
func ResetRemediationDescription()
```

##### `ResetSeverity` <a name="ResetSeverity" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetSeverity"></a>

```go
func ResetSeverity()
```

##### `ResetThreats` <a name="ResetThreats" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetThreats"></a>

```go
func ResetThreats()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserImpact` <a name="ResetUserImpact" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetUserImpact"></a>

```go
func ResetUserImpact()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityCenterAssessmentPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterassessmentpolicy"

securitycenterassessmentpolicy.SecurityCenterAssessmentPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterassessmentpolicy"

securitycenterassessmentpolicy.SecurityCenterAssessmentPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterassessmentpolicy"

securitycenterassessmentpolicy.SecurityCenterAssessmentPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterassessmentpolicy"

securitycenterassessmentpolicy.SecurityCenterAssessmentPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SecurityCenterAssessmentPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecurityCenterAssessmentPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecurityCenterAssessmentPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SecurityCenterAssessmentPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference">SecurityCenterAssessmentPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.categoriesInput">CategoriesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.implementationEffortInput">ImplementationEffortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.remediationDescriptionInput">RemediationDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.severityInput">SeverityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.threatsInput">ThreatsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.userImpactInput">UserImpactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.categories">Categories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.implementationEffort">ImplementationEffort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.remediationDescription">RemediationDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.threats">Threats</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.userImpact">UserImpact</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.timeouts"></a>

```go
func Timeouts() SecurityCenterAssessmentPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference">SecurityCenterAssessmentPolicyTimeoutsOutputReference</a>

---

##### `CategoriesInput`<sup>Optional</sup> <a name="CategoriesInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.categoriesInput"></a>

```go
func CategoriesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImplementationEffortInput`<sup>Optional</sup> <a name="ImplementationEffortInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.implementationEffortInput"></a>

```go
func ImplementationEffortInput() *string
```

- *Type:* *string

---

##### `RemediationDescriptionInput`<sup>Optional</sup> <a name="RemediationDescriptionInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.remediationDescriptionInput"></a>

```go
func RemediationDescriptionInput() *string
```

- *Type:* *string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.severityInput"></a>

```go
func SeverityInput() *string
```

- *Type:* *string

---

##### `ThreatsInput`<sup>Optional</sup> <a name="ThreatsInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.threatsInput"></a>

```go
func ThreatsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserImpactInput`<sup>Optional</sup> <a name="UserImpactInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.userImpactInput"></a>

```go
func UserImpactInput() *string
```

- *Type:* *string

---

##### `Categories`<sup>Required</sup> <a name="Categories" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.categories"></a>

```go
func Categories() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImplementationEffort`<sup>Required</sup> <a name="ImplementationEffort" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.implementationEffort"></a>

```go
func ImplementationEffort() *string
```

- *Type:* *string

---

##### `RemediationDescription`<sup>Required</sup> <a name="RemediationDescription" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.remediationDescription"></a>

```go
func RemediationDescription() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `Threats`<sup>Required</sup> <a name="Threats" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.threats"></a>

```go
func Threats() *[]*string
```

- *Type:* *[]*string

---

##### `UserImpact`<sup>Required</sup> <a name="UserImpact" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.userImpact"></a>

```go
func UserImpact() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityCenterAssessmentPolicyConfig <a name="SecurityCenterAssessmentPolicyConfig" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterassessmentpolicy"

&securitycenterassessmentpolicy.SecurityCenterAssessmentPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	DisplayName: *string,
	Categories: *[]*string,
	Id: *string,
	ImplementationEffort: *string,
	RemediationDescription: *string,
	Severity: *string,
	Threats: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts,
	UserImpact: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#description SecurityCenterAssessmentPolicy#description}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#display_name SecurityCenterAssessmentPolicy#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.categories">Categories</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#categories SecurityCenterAssessmentPolicy#categories}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#id SecurityCenterAssessmentPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.implementationEffort">ImplementationEffort</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#implementation_effort SecurityCenterAssessmentPolicy#implementation_effort}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.remediationDescription">RemediationDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#remediation_description SecurityCenterAssessmentPolicy#remediation_description}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.severity">Severity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#severity SecurityCenterAssessmentPolicy#severity}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.threats">Threats</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#threats SecurityCenterAssessmentPolicy#threats}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts">SecurityCenterAssessmentPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.userImpact">UserImpact</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#user_impact SecurityCenterAssessmentPolicy#user_impact}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#description SecurityCenterAssessmentPolicy#description}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#display_name SecurityCenterAssessmentPolicy#display_name}.

---

##### `Categories`<sup>Optional</sup> <a name="Categories" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.categories"></a>

```go
Categories *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#categories SecurityCenterAssessmentPolicy#categories}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#id SecurityCenterAssessmentPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImplementationEffort`<sup>Optional</sup> <a name="ImplementationEffort" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.implementationEffort"></a>

```go
ImplementationEffort *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#implementation_effort SecurityCenterAssessmentPolicy#implementation_effort}.

---

##### `RemediationDescription`<sup>Optional</sup> <a name="RemediationDescription" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.remediationDescription"></a>

```go
RemediationDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#remediation_description SecurityCenterAssessmentPolicy#remediation_description}.

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.severity"></a>

```go
Severity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#severity SecurityCenterAssessmentPolicy#severity}.

---

##### `Threats`<sup>Optional</sup> <a name="Threats" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.threats"></a>

```go
Threats *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#threats SecurityCenterAssessmentPolicy#threats}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.timeouts"></a>

```go
Timeouts SecurityCenterAssessmentPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts">SecurityCenterAssessmentPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#timeouts SecurityCenterAssessmentPolicy#timeouts}

---

##### `UserImpact`<sup>Optional</sup> <a name="UserImpact" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.userImpact"></a>

```go
UserImpact *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#user_impact SecurityCenterAssessmentPolicy#user_impact}.

---

### SecurityCenterAssessmentPolicyTimeouts <a name="SecurityCenterAssessmentPolicyTimeouts" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterassessmentpolicy"

&securitycenterassessmentpolicy.SecurityCenterAssessmentPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#create SecurityCenterAssessmentPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#delete SecurityCenterAssessmentPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#read SecurityCenterAssessmentPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#update SecurityCenterAssessmentPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#create SecurityCenterAssessmentPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#delete SecurityCenterAssessmentPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#read SecurityCenterAssessmentPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment_policy#update SecurityCenterAssessmentPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityCenterAssessmentPolicyTimeoutsOutputReference <a name="SecurityCenterAssessmentPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterassessmentpolicy"

securitycenterassessmentpolicy.NewSecurityCenterAssessmentPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityCenterAssessmentPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



