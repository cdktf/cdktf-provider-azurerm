# `resourcePolicyAssignment` Submodule <a name="`resourcePolicyAssignment` Submodule" id="@cdktf/provider-azurerm.resourcePolicyAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourcePolicyAssignment <a name="ResourcePolicyAssignment" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment azurerm_resource_policy_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/resourcepolicyassignment"

resourcepolicyassignment.NewResourcePolicyAssignment(scope Construct, id *string, config ResourcePolicyAssignmentConfig) ResourcePolicyAssignment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig">ResourcePolicyAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig">ResourcePolicyAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putNonComplianceMessage">PutNonComplianceMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putOverrides">PutOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putResourceSelectors">PutResourceSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetEnforce">ResetEnforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetNonComplianceMessage">ResetNonComplianceMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetNotScopes">ResetNotScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetOverrides">ResetOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetResourceSelectors">ResetResourceSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putIdentity"></a>

```go
func PutIdentity(value ResourcePolicyAssignmentIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity">ResourcePolicyAssignmentIdentity</a>

---

##### `PutNonComplianceMessage` <a name="PutNonComplianceMessage" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putNonComplianceMessage"></a>

```go
func PutNonComplianceMessage(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putNonComplianceMessage.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOverrides` <a name="PutOverrides" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putOverrides"></a>

```go
func PutOverrides(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putOverrides.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResourceSelectors` <a name="PutResourceSelectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putResourceSelectors"></a>

```go
func PutResourceSelectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putResourceSelectors.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putTimeouts"></a>

```go
func PutTimeouts(value ResourcePolicyAssignmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts">ResourcePolicyAssignmentTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEnforce` <a name="ResetEnforce" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetEnforce"></a>

```go
func ResetEnforce()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetNonComplianceMessage` <a name="ResetNonComplianceMessage" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetNonComplianceMessage"></a>

```go
func ResetNonComplianceMessage()
```

##### `ResetNotScopes` <a name="ResetNotScopes" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetNotScopes"></a>

```go
func ResetNotScopes()
```

##### `ResetOverrides` <a name="ResetOverrides" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetOverrides"></a>

```go
func ResetOverrides()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetResourceSelectors` <a name="ResetResourceSelectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetResourceSelectors"></a>

```go
func ResetResourceSelectors()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ResourcePolicyAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/resourcepolicyassignment"

resourcepolicyassignment.ResourcePolicyAssignment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/resourcepolicyassignment"

resourcepolicyassignment.ResourcePolicyAssignment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/resourcepolicyassignment"

resourcepolicyassignment.ResourcePolicyAssignment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/resourcepolicyassignment"

resourcepolicyassignment.ResourcePolicyAssignment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ResourcePolicyAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ResourcePolicyAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ResourcePolicyAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ResourcePolicyAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference">ResourcePolicyAssignmentIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.nonComplianceMessage">NonComplianceMessage</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList">ResourcePolicyAssignmentNonComplianceMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.overrides">Overrides</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList">ResourcePolicyAssignmentOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.resourceSelectors">ResourceSelectors</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList">ResourcePolicyAssignmentResourceSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference">ResourcePolicyAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.enforceInput">EnforceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity">ResourcePolicyAssignmentIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.metadataInput">MetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.nonComplianceMessageInput">NonComplianceMessageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.notScopesInput">NotScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.overridesInput">OverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.parametersInput">ParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.policyDefinitionIdInput">PolicyDefinitionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.resourceSelectorsInput">ResourceSelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.enforce">Enforce</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.notScopes">NotScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.policyDefinitionId">PolicyDefinitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.identity"></a>

```go
func Identity() ResourcePolicyAssignmentIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference">ResourcePolicyAssignmentIdentityOutputReference</a>

---

##### `NonComplianceMessage`<sup>Required</sup> <a name="NonComplianceMessage" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.nonComplianceMessage"></a>

```go
func NonComplianceMessage() ResourcePolicyAssignmentNonComplianceMessageList
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList">ResourcePolicyAssignmentNonComplianceMessageList</a>

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.overrides"></a>

```go
func Overrides() ResourcePolicyAssignmentOverridesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList">ResourcePolicyAssignmentOverridesList</a>

---

##### `ResourceSelectors`<sup>Required</sup> <a name="ResourceSelectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.resourceSelectors"></a>

```go
func ResourceSelectors() ResourcePolicyAssignmentResourceSelectorsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList">ResourcePolicyAssignmentResourceSelectorsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.timeouts"></a>

```go
func Timeouts() ResourcePolicyAssignmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference">ResourcePolicyAssignmentTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnforceInput`<sup>Optional</sup> <a name="EnforceInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.enforceInput"></a>

```go
func EnforceInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.identityInput"></a>

```go
func IdentityInput() ResourcePolicyAssignmentIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity">ResourcePolicyAssignmentIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.metadataInput"></a>

```go
func MetadataInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NonComplianceMessageInput`<sup>Optional</sup> <a name="NonComplianceMessageInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.nonComplianceMessageInput"></a>

```go
func NonComplianceMessageInput() interface{}
```

- *Type:* interface{}

---

##### `NotScopesInput`<sup>Optional</sup> <a name="NotScopesInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.notScopesInput"></a>

```go
func NotScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `OverridesInput`<sup>Optional</sup> <a name="OverridesInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.overridesInput"></a>

```go
func OverridesInput() interface{}
```

- *Type:* interface{}

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.parametersInput"></a>

```go
func ParametersInput() *string
```

- *Type:* *string

---

##### `PolicyDefinitionIdInput`<sup>Optional</sup> <a name="PolicyDefinitionIdInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.policyDefinitionIdInput"></a>

```go
func PolicyDefinitionIdInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `ResourceSelectorsInput`<sup>Optional</sup> <a name="ResourceSelectorsInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.resourceSelectorsInput"></a>

```go
func ResourceSelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Enforce`<sup>Required</sup> <a name="Enforce" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.enforce"></a>

```go
func Enforce() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NotScopes`<sup>Required</sup> <a name="NotScopes" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.notScopes"></a>

```go
func NotScopes() *[]*string
```

- *Type:* *[]*string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

##### `PolicyDefinitionId`<sup>Required</sup> <a name="PolicyDefinitionId" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.policyDefinitionId"></a>

```go
func PolicyDefinitionId() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourcePolicyAssignmentConfig <a name="ResourcePolicyAssignmentConfig" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/resourcepolicyassignment"

&resourcepolicyassignment.ResourcePolicyAssignmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	PolicyDefinitionId: *string,
	ResourceId: *string,
	Description: *string,
	DisplayName: *string,
	Enforce: interface{},
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity,
	Location: *string,
	Metadata: *string,
	NonComplianceMessage: interface{},
	NotScopes: *[]*string,
	Overrides: interface{},
	Parameters: *string,
	ResourceSelectors: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#name ResourcePolicyAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.policyDefinitionId">PolicyDefinitionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#policy_definition_id ResourcePolicyAssignment#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#resource_id ResourcePolicyAssignment#resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#description ResourcePolicyAssignment#description}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#display_name ResourcePolicyAssignment#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.enforce">Enforce</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#enforce ResourcePolicyAssignment#enforce}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#id ResourcePolicyAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity">ResourcePolicyAssignmentIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#location ResourcePolicyAssignment#location}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.metadata">Metadata</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#metadata ResourcePolicyAssignment#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.nonComplianceMessage">NonComplianceMessage</a></code> | <code>interface{}</code> | non_compliance_message block. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.notScopes">NotScopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#not_scopes ResourcePolicyAssignment#not_scopes}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.overrides">Overrides</a></code> | <code>interface{}</code> | overrides block. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.parameters">Parameters</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#parameters ResourcePolicyAssignment#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.resourceSelectors">ResourceSelectors</a></code> | <code>interface{}</code> | resource_selectors block. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts">ResourcePolicyAssignmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#name ResourcePolicyAssignment#name}.

---

##### `PolicyDefinitionId`<sup>Required</sup> <a name="PolicyDefinitionId" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.policyDefinitionId"></a>

```go
PolicyDefinitionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#policy_definition_id ResourcePolicyAssignment#policy_definition_id}.

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#resource_id ResourcePolicyAssignment#resource_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#description ResourcePolicyAssignment#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#display_name ResourcePolicyAssignment#display_name}.

---

##### `Enforce`<sup>Optional</sup> <a name="Enforce" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.enforce"></a>

```go
Enforce interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#enforce ResourcePolicyAssignment#enforce}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#id ResourcePolicyAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.identity"></a>

```go
Identity ResourcePolicyAssignmentIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity">ResourcePolicyAssignmentIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#identity ResourcePolicyAssignment#identity}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#location ResourcePolicyAssignment#location}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.metadata"></a>

```go
Metadata *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#metadata ResourcePolicyAssignment#metadata}.

---

##### `NonComplianceMessage`<sup>Optional</sup> <a name="NonComplianceMessage" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.nonComplianceMessage"></a>

```go
NonComplianceMessage interface{}
```

- *Type:* interface{}

non_compliance_message block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#non_compliance_message ResourcePolicyAssignment#non_compliance_message}

---

##### `NotScopes`<sup>Optional</sup> <a name="NotScopes" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.notScopes"></a>

```go
NotScopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#not_scopes ResourcePolicyAssignment#not_scopes}.

---

##### `Overrides`<sup>Optional</sup> <a name="Overrides" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.overrides"></a>

```go
Overrides interface{}
```

- *Type:* interface{}

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#overrides ResourcePolicyAssignment#overrides}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.parameters"></a>

```go
Parameters *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#parameters ResourcePolicyAssignment#parameters}.

---

##### `ResourceSelectors`<sup>Optional</sup> <a name="ResourceSelectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.resourceSelectors"></a>

```go
ResourceSelectors interface{}
```

- *Type:* interface{}

resource_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#resource_selectors ResourcePolicyAssignment#resource_selectors}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.timeouts"></a>

```go
Timeouts ResourcePolicyAssignmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts">ResourcePolicyAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#timeouts ResourcePolicyAssignment#timeouts}

---

### ResourcePolicyAssignmentIdentity <a name="ResourcePolicyAssignmentIdentity" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/resourcepolicyassignment"

&resourcepolicyassignment.ResourcePolicyAssignmentIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#type ResourcePolicyAssignment#type}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#identity_ids ResourcePolicyAssignment#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#type ResourcePolicyAssignment#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#identity_ids ResourcePolicyAssignment#identity_ids}.

---

### ResourcePolicyAssignmentNonComplianceMessage <a name="ResourcePolicyAssignmentNonComplianceMessage" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/resourcepolicyassignment"

&resourcepolicyassignment.ResourcePolicyAssignmentNonComplianceMessage {
	Content: *string,
	PolicyDefinitionReferenceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessage.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#content ResourcePolicyAssignment#content}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessage.property.policyDefinitionReferenceId">PolicyDefinitionReferenceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#policy_definition_reference_id ResourcePolicyAssignment#policy_definition_reference_id}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessage.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#content ResourcePolicyAssignment#content}.

---

##### `PolicyDefinitionReferenceId`<sup>Optional</sup> <a name="PolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessage.property.policyDefinitionReferenceId"></a>

```go
PolicyDefinitionReferenceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#policy_definition_reference_id ResourcePolicyAssignment#policy_definition_reference_id}.

---

### ResourcePolicyAssignmentOverrides <a name="ResourcePolicyAssignmentOverrides" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverrides.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/resourcepolicyassignment"

&resourcepolicyassignment.ResourcePolicyAssignmentOverrides {
	Value: *string,
	Selectors: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverrides.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#value ResourcePolicyAssignment#value}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverrides.property.selectors">Selectors</a></code> | <code>interface{}</code> | selectors block. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverrides.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#value ResourcePolicyAssignment#value}.

---

##### `Selectors`<sup>Optional</sup> <a name="Selectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverrides.property.selectors"></a>

```go
Selectors interface{}
```

- *Type:* interface{}

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#selectors ResourcePolicyAssignment#selectors}

---

### ResourcePolicyAssignmentOverridesSelectors <a name="ResourcePolicyAssignmentOverridesSelectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/resourcepolicyassignment"

&resourcepolicyassignment.ResourcePolicyAssignmentOverridesSelectors {
	In: *[]*string,
	NotIn: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectors.property.in">In</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#in ResourcePolicyAssignment#in}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectors.property.notIn">NotIn</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#not_in ResourcePolicyAssignment#not_in}. |

---

##### `In`<sup>Optional</sup> <a name="In" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectors.property.in"></a>

```go
In *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#in ResourcePolicyAssignment#in}.

---

##### `NotIn`<sup>Optional</sup> <a name="NotIn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectors.property.notIn"></a>

```go
NotIn *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#not_in ResourcePolicyAssignment#not_in}.

---

### ResourcePolicyAssignmentResourceSelectors <a name="ResourcePolicyAssignmentResourceSelectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/resourcepolicyassignment"

&resourcepolicyassignment.ResourcePolicyAssignmentResourceSelectors {
	Selectors: interface{},
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectors.property.selectors">Selectors</a></code> | <code>interface{}</code> | selectors block. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectors.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#name ResourcePolicyAssignment#name}. |

---

##### `Selectors`<sup>Required</sup> <a name="Selectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectors.property.selectors"></a>

```go
Selectors interface{}
```

- *Type:* interface{}

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#selectors ResourcePolicyAssignment#selectors}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectors.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#name ResourcePolicyAssignment#name}.

---

### ResourcePolicyAssignmentResourceSelectorsSelectors <a name="ResourcePolicyAssignmentResourceSelectorsSelectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/resourcepolicyassignment"

&resourcepolicyassignment.ResourcePolicyAssignmentResourceSelectorsSelectors {
	Kind: *string,
	In: *[]*string,
	NotIn: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectors.property.kind">Kind</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#kind ResourcePolicyAssignment#kind}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectors.property.in">In</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#in ResourcePolicyAssignment#in}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectors.property.notIn">NotIn</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#not_in ResourcePolicyAssignment#not_in}. |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectors.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#kind ResourcePolicyAssignment#kind}.

---

##### `In`<sup>Optional</sup> <a name="In" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectors.property.in"></a>

```go
In *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#in ResourcePolicyAssignment#in}.

---

##### `NotIn`<sup>Optional</sup> <a name="NotIn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectors.property.notIn"></a>

```go
NotIn *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#not_in ResourcePolicyAssignment#not_in}.

---

### ResourcePolicyAssignmentTimeouts <a name="ResourcePolicyAssignmentTimeouts" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/resourcepolicyassignment"

&resourcepolicyassignment.ResourcePolicyAssignmentTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#create ResourcePolicyAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#delete ResourcePolicyAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#read ResourcePolicyAssignment#read}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#update ResourcePolicyAssignment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#create ResourcePolicyAssignment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#delete ResourcePolicyAssignment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#read ResourcePolicyAssignment#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_policy_assignment#update ResourcePolicyAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourcePolicyAssignmentIdentityOutputReference <a name="ResourcePolicyAssignmentIdentityOutputReference" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/resourcepolicyassignment"

resourcepolicyassignment.NewResourcePolicyAssignmentIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourcePolicyAssignmentIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity">ResourcePolicyAssignmentIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() ResourcePolicyAssignmentIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity">ResourcePolicyAssignmentIdentity</a>

---


### ResourcePolicyAssignmentNonComplianceMessageList <a name="ResourcePolicyAssignmentNonComplianceMessageList" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/resourcepolicyassignment"

resourcepolicyassignment.NewResourcePolicyAssignmentNonComplianceMessageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ResourcePolicyAssignmentNonComplianceMessageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.get"></a>

```go
func Get(index *f64) ResourcePolicyAssignmentNonComplianceMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResourcePolicyAssignmentNonComplianceMessageOutputReference <a name="ResourcePolicyAssignmentNonComplianceMessageOutputReference" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/resourcepolicyassignment"

resourcepolicyassignment.NewResourcePolicyAssignmentNonComplianceMessageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ResourcePolicyAssignmentNonComplianceMessageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.resetPolicyDefinitionReferenceId">ResetPolicyDefinitionReferenceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPolicyDefinitionReferenceId` <a name="ResetPolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.resetPolicyDefinitionReferenceId"></a>

```go
func ResetPolicyDefinitionReferenceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceIdInput">PolicyDefinitionReferenceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceId">PolicyDefinitionReferenceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `PolicyDefinitionReferenceIdInput`<sup>Optional</sup> <a name="PolicyDefinitionReferenceIdInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceIdInput"></a>

```go
func PolicyDefinitionReferenceIdInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `PolicyDefinitionReferenceId`<sup>Required</sup> <a name="PolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceId"></a>

```go
func PolicyDefinitionReferenceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResourcePolicyAssignmentOverridesList <a name="ResourcePolicyAssignmentOverridesList" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/resourcepolicyassignment"

resourcepolicyassignment.NewResourcePolicyAssignmentOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ResourcePolicyAssignmentOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.get"></a>

```go
func Get(index *f64) ResourcePolicyAssignmentOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResourcePolicyAssignmentOverridesOutputReference <a name="ResourcePolicyAssignmentOverridesOutputReference" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/resourcepolicyassignment"

resourcepolicyassignment.NewResourcePolicyAssignmentOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ResourcePolicyAssignmentOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.putSelectors">PutSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.resetSelectors">ResetSelectors</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelectors` <a name="PutSelectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.putSelectors"></a>

```go
func PutSelectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.putSelectors.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSelectors` <a name="ResetSelectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.resetSelectors"></a>

```go
func ResetSelectors()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.selectors">Selectors</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList">ResourcePolicyAssignmentOverridesSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.selectorsInput">SelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Selectors`<sup>Required</sup> <a name="Selectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.selectors"></a>

```go
func Selectors() ResourcePolicyAssignmentOverridesSelectorsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList">ResourcePolicyAssignmentOverridesSelectorsList</a>

---

##### `SelectorsInput`<sup>Optional</sup> <a name="SelectorsInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.selectorsInput"></a>

```go
func SelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResourcePolicyAssignmentOverridesSelectorsList <a name="ResourcePolicyAssignmentOverridesSelectorsList" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/resourcepolicyassignment"

resourcepolicyassignment.NewResourcePolicyAssignmentOverridesSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ResourcePolicyAssignmentOverridesSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.get"></a>

```go
func Get(index *f64) ResourcePolicyAssignmentOverridesSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResourcePolicyAssignmentOverridesSelectorsOutputReference <a name="ResourcePolicyAssignmentOverridesSelectorsOutputReference" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/resourcepolicyassignment"

resourcepolicyassignment.NewResourcePolicyAssignmentOverridesSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ResourcePolicyAssignmentOverridesSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.resetIn">ResetIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.resetNotIn">ResetNotIn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIn` <a name="ResetIn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.resetIn"></a>

```go
func ResetIn()
```

##### `ResetNotIn` <a name="ResetNotIn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.resetNotIn"></a>

```go
func ResetNotIn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.inInput">InInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.notInInput">NotInInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.in">In</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.notIn">NotIn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `InInput`<sup>Optional</sup> <a name="InInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.inInput"></a>

```go
func InInput() *[]*string
```

- *Type:* *[]*string

---

##### `NotInInput`<sup>Optional</sup> <a name="NotInInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.notInInput"></a>

```go
func NotInInput() *[]*string
```

- *Type:* *[]*string

---

##### `In`<sup>Required</sup> <a name="In" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.in"></a>

```go
func In() *[]*string
```

- *Type:* *[]*string

---

##### `NotIn`<sup>Required</sup> <a name="NotIn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.notIn"></a>

```go
func NotIn() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResourcePolicyAssignmentResourceSelectorsList <a name="ResourcePolicyAssignmentResourceSelectorsList" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/resourcepolicyassignment"

resourcepolicyassignment.NewResourcePolicyAssignmentResourceSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ResourcePolicyAssignmentResourceSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.get"></a>

```go
func Get(index *f64) ResourcePolicyAssignmentResourceSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResourcePolicyAssignmentResourceSelectorsOutputReference <a name="ResourcePolicyAssignmentResourceSelectorsOutputReference" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/resourcepolicyassignment"

resourcepolicyassignment.NewResourcePolicyAssignmentResourceSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ResourcePolicyAssignmentResourceSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.putSelectors">PutSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelectors` <a name="PutSelectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.putSelectors"></a>

```go
func PutSelectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.putSelectors.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.selectors">Selectors</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList">ResourcePolicyAssignmentResourceSelectorsSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.selectorsInput">SelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Selectors`<sup>Required</sup> <a name="Selectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.selectors"></a>

```go
func Selectors() ResourcePolicyAssignmentResourceSelectorsSelectorsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList">ResourcePolicyAssignmentResourceSelectorsSelectorsList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SelectorsInput`<sup>Optional</sup> <a name="SelectorsInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.selectorsInput"></a>

```go
func SelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResourcePolicyAssignmentResourceSelectorsSelectorsList <a name="ResourcePolicyAssignmentResourceSelectorsSelectorsList" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/resourcepolicyassignment"

resourcepolicyassignment.NewResourcePolicyAssignmentResourceSelectorsSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ResourcePolicyAssignmentResourceSelectorsSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.get"></a>

```go
func Get(index *f64) ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference <a name="ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/resourcepolicyassignment"

resourcepolicyassignment.NewResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.resetIn">ResetIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.resetNotIn">ResetNotIn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIn` <a name="ResetIn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.resetIn"></a>

```go
func ResetIn()
```

##### `ResetNotIn` <a name="ResetNotIn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.resetNotIn"></a>

```go
func ResetNotIn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.inInput">InInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.notInInput">NotInInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.in">In</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.notIn">NotIn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InInput`<sup>Optional</sup> <a name="InInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.inInput"></a>

```go
func InInput() *[]*string
```

- *Type:* *[]*string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `NotInInput`<sup>Optional</sup> <a name="NotInInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.notInInput"></a>

```go
func NotInInput() *[]*string
```

- *Type:* *[]*string

---

##### `In`<sup>Required</sup> <a name="In" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.in"></a>

```go
func In() *[]*string
```

- *Type:* *[]*string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `NotIn`<sup>Required</sup> <a name="NotIn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.notIn"></a>

```go
func NotIn() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResourcePolicyAssignmentTimeoutsOutputReference <a name="ResourcePolicyAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/resourcepolicyassignment"

resourcepolicyassignment.NewResourcePolicyAssignmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourcePolicyAssignmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



