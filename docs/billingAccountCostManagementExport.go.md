# `billingAccountCostManagementExport` Submodule <a name="`billingAccountCostManagementExport` Submodule" id="@cdktf/provider-azurerm.billingAccountCostManagementExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingAccountCostManagementExport <a name="BillingAccountCostManagementExport" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export azurerm_billing_account_cost_management_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/billingaccountcostmanagementexport"

billingaccountcostmanagementexport.NewBillingAccountCostManagementExport(scope Construct, id *string, config BillingAccountCostManagementExportConfig) BillingAccountCostManagementExport
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig">BillingAccountCostManagementExportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig">BillingAccountCostManagementExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putExportDataOptions">PutExportDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putExportDataStorageLocation">PutExportDataStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExportDataOptions` <a name="PutExportDataOptions" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putExportDataOptions"></a>

```go
func PutExportDataOptions(value BillingAccountCostManagementExportExportDataOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putExportDataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a>

---

##### `PutExportDataStorageLocation` <a name="PutExportDataStorageLocation" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putExportDataStorageLocation"></a>

```go
func PutExportDataStorageLocation(value BillingAccountCostManagementExportExportDataStorageLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putExportDataStorageLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putTimeouts"></a>

```go
func PutTimeouts(value BillingAccountCostManagementExportTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a>

---

##### `ResetActive` <a name="ResetActive" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetActive"></a>

```go
func ResetActive()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BillingAccountCostManagementExport resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/billingaccountcostmanagementexport"

billingaccountcostmanagementexport.BillingAccountCostManagementExport_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/billingaccountcostmanagementexport"

billingaccountcostmanagementexport.BillingAccountCostManagementExport_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/billingaccountcostmanagementexport"

billingaccountcostmanagementexport.BillingAccountCostManagementExport_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/billingaccountcostmanagementexport"

billingaccountcostmanagementexport.BillingAccountCostManagementExport_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BillingAccountCostManagementExport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BillingAccountCostManagementExport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BillingAccountCostManagementExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BillingAccountCostManagementExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataOptions">ExportDataOptions</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference">BillingAccountCostManagementExportExportDataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataStorageLocation">ExportDataStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference">BillingAccountCostManagementExportExportDataStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference">BillingAccountCostManagementExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.activeInput">ActiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.billingAccountIdInput">BillingAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataOptionsInput">ExportDataOptionsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataStorageLocationInput">ExportDataStorageLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodEndDateInput">RecurrencePeriodEndDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodStartDateInput">RecurrencePeriodStartDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrenceTypeInput">RecurrenceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.active">Active</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.billingAccountId">BillingAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodEndDate">RecurrencePeriodEndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodStartDate">RecurrencePeriodStartDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrenceType">RecurrenceType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExportDataOptions`<sup>Required</sup> <a name="ExportDataOptions" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataOptions"></a>

```go
func ExportDataOptions() BillingAccountCostManagementExportExportDataOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference">BillingAccountCostManagementExportExportDataOptionsOutputReference</a>

---

##### `ExportDataStorageLocation`<sup>Required</sup> <a name="ExportDataStorageLocation" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataStorageLocation"></a>

```go
func ExportDataStorageLocation() BillingAccountCostManagementExportExportDataStorageLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference">BillingAccountCostManagementExportExportDataStorageLocationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.timeouts"></a>

```go
func Timeouts() BillingAccountCostManagementExportTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference">BillingAccountCostManagementExportTimeoutsOutputReference</a>

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.activeInput"></a>

```go
func ActiveInput() interface{}
```

- *Type:* interface{}

---

##### `BillingAccountIdInput`<sup>Optional</sup> <a name="BillingAccountIdInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.billingAccountIdInput"></a>

```go
func BillingAccountIdInput() *string
```

- *Type:* *string

---

##### `ExportDataOptionsInput`<sup>Optional</sup> <a name="ExportDataOptionsInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataOptionsInput"></a>

```go
func ExportDataOptionsInput() BillingAccountCostManagementExportExportDataOptions
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a>

---

##### `ExportDataStorageLocationInput`<sup>Optional</sup> <a name="ExportDataStorageLocationInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataStorageLocationInput"></a>

```go
func ExportDataStorageLocationInput() BillingAccountCostManagementExportExportDataStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RecurrencePeriodEndDateInput`<sup>Optional</sup> <a name="RecurrencePeriodEndDateInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodEndDateInput"></a>

```go
func RecurrencePeriodEndDateInput() *string
```

- *Type:* *string

---

##### `RecurrencePeriodStartDateInput`<sup>Optional</sup> <a name="RecurrencePeriodStartDateInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodStartDateInput"></a>

```go
func RecurrencePeriodStartDateInput() *string
```

- *Type:* *string

---

##### `RecurrenceTypeInput`<sup>Optional</sup> <a name="RecurrenceTypeInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrenceTypeInput"></a>

```go
func RecurrenceTypeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.active"></a>

```go
func Active() interface{}
```

- *Type:* interface{}

---

##### `BillingAccountId`<sup>Required</sup> <a name="BillingAccountId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.billingAccountId"></a>

```go
func BillingAccountId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RecurrencePeriodEndDate`<sup>Required</sup> <a name="RecurrencePeriodEndDate" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodEndDate"></a>

```go
func RecurrencePeriodEndDate() *string
```

- *Type:* *string

---

##### `RecurrencePeriodStartDate`<sup>Required</sup> <a name="RecurrencePeriodStartDate" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodStartDate"></a>

```go
func RecurrencePeriodStartDate() *string
```

- *Type:* *string

---

##### `RecurrenceType`<sup>Required</sup> <a name="RecurrenceType" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrenceType"></a>

```go
func RecurrenceType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BillingAccountCostManagementExportConfig <a name="BillingAccountCostManagementExportConfig" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/billingaccountcostmanagementexport"

&billingaccountcostmanagementexport.BillingAccountCostManagementExportConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BillingAccountId: *string,
	ExportDataOptions: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions,
	ExportDataStorageLocation: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation,
	Name: *string,
	RecurrencePeriodEndDate: *string,
	RecurrencePeriodStartDate: *string,
	RecurrenceType: *string,
	Active: interface{},
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.billingAccountId">BillingAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#billing_account_id BillingAccountCostManagementExport#billing_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.exportDataOptions">ExportDataOptions</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a></code> | export_data_options block. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.exportDataStorageLocation">ExportDataStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a></code> | export_data_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#name BillingAccountCostManagementExport#name}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.recurrencePeriodEndDate">RecurrencePeriodEndDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#recurrence_period_end_date BillingAccountCostManagementExport#recurrence_period_end_date}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.recurrencePeriodStartDate">RecurrencePeriodStartDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#recurrence_period_start_date BillingAccountCostManagementExport#recurrence_period_start_date}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.recurrenceType">RecurrenceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#recurrence_type BillingAccountCostManagementExport#recurrence_type}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.active">Active</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#active BillingAccountCostManagementExport#active}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#id BillingAccountCostManagementExport#id}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BillingAccountId`<sup>Required</sup> <a name="BillingAccountId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.billingAccountId"></a>

```go
BillingAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#billing_account_id BillingAccountCostManagementExport#billing_account_id}.

---

##### `ExportDataOptions`<sup>Required</sup> <a name="ExportDataOptions" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.exportDataOptions"></a>

```go
ExportDataOptions BillingAccountCostManagementExportExportDataOptions
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a>

export_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#export_data_options BillingAccountCostManagementExport#export_data_options}

---

##### `ExportDataStorageLocation`<sup>Required</sup> <a name="ExportDataStorageLocation" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.exportDataStorageLocation"></a>

```go
ExportDataStorageLocation BillingAccountCostManagementExportExportDataStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a>

export_data_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#export_data_storage_location BillingAccountCostManagementExport#export_data_storage_location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#name BillingAccountCostManagementExport#name}.

---

##### `RecurrencePeriodEndDate`<sup>Required</sup> <a name="RecurrencePeriodEndDate" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.recurrencePeriodEndDate"></a>

```go
RecurrencePeriodEndDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#recurrence_period_end_date BillingAccountCostManagementExport#recurrence_period_end_date}.

---

##### `RecurrencePeriodStartDate`<sup>Required</sup> <a name="RecurrencePeriodStartDate" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.recurrencePeriodStartDate"></a>

```go
RecurrencePeriodStartDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#recurrence_period_start_date BillingAccountCostManagementExport#recurrence_period_start_date}.

---

##### `RecurrenceType`<sup>Required</sup> <a name="RecurrenceType" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.recurrenceType"></a>

```go
RecurrenceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#recurrence_type BillingAccountCostManagementExport#recurrence_type}.

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.active"></a>

```go
Active interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#active BillingAccountCostManagementExport#active}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#id BillingAccountCostManagementExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.timeouts"></a>

```go
Timeouts BillingAccountCostManagementExportTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#timeouts BillingAccountCostManagementExport#timeouts}

---

### BillingAccountCostManagementExportExportDataOptions <a name="BillingAccountCostManagementExportExportDataOptions" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/billingaccountcostmanagementexport"

&billingaccountcostmanagementexport.BillingAccountCostManagementExportExportDataOptions {
	TimeFrame: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions.property.timeFrame">TimeFrame</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#time_frame BillingAccountCostManagementExport#time_frame}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#type BillingAccountCostManagementExport#type}. |

---

##### `TimeFrame`<sup>Required</sup> <a name="TimeFrame" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions.property.timeFrame"></a>

```go
TimeFrame *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#time_frame BillingAccountCostManagementExport#time_frame}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#type BillingAccountCostManagementExport#type}.

---

### BillingAccountCostManagementExportExportDataStorageLocation <a name="BillingAccountCostManagementExportExportDataStorageLocation" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/billingaccountcostmanagementexport"

&billingaccountcostmanagementexport.BillingAccountCostManagementExportExportDataStorageLocation {
	ContainerId: *string,
	RootFolderPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation.property.containerId">ContainerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#container_id BillingAccountCostManagementExport#container_id}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation.property.rootFolderPath">RootFolderPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#root_folder_path BillingAccountCostManagementExport#root_folder_path}. |

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation.property.containerId"></a>

```go
ContainerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#container_id BillingAccountCostManagementExport#container_id}.

---

##### `RootFolderPath`<sup>Required</sup> <a name="RootFolderPath" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation.property.rootFolderPath"></a>

```go
RootFolderPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#root_folder_path BillingAccountCostManagementExport#root_folder_path}.

---

### BillingAccountCostManagementExportTimeouts <a name="BillingAccountCostManagementExportTimeouts" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/billingaccountcostmanagementexport"

&billingaccountcostmanagementexport.BillingAccountCostManagementExportTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#create BillingAccountCostManagementExport#create}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#delete BillingAccountCostManagementExport#delete}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#read BillingAccountCostManagementExport#read}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#update BillingAccountCostManagementExport#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#create BillingAccountCostManagementExport#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#delete BillingAccountCostManagementExport#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#read BillingAccountCostManagementExport#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/billing_account_cost_management_export#update BillingAccountCostManagementExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BillingAccountCostManagementExportExportDataOptionsOutputReference <a name="BillingAccountCostManagementExportExportDataOptionsOutputReference" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/billingaccountcostmanagementexport"

billingaccountcostmanagementexport.NewBillingAccountCostManagementExportExportDataOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BillingAccountCostManagementExportExportDataOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.timeFrameInput">TimeFrameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.timeFrame">TimeFrame</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeFrameInput`<sup>Optional</sup> <a name="TimeFrameInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.timeFrameInput"></a>

```go
func TimeFrameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `TimeFrame`<sup>Required</sup> <a name="TimeFrame" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.timeFrame"></a>

```go
func TimeFrame() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() BillingAccountCostManagementExportExportDataOptions
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a>

---


### BillingAccountCostManagementExportExportDataStorageLocationOutputReference <a name="BillingAccountCostManagementExportExportDataStorageLocationOutputReference" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/billingaccountcostmanagementexport"

billingaccountcostmanagementexport.NewBillingAccountCostManagementExportExportDataStorageLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BillingAccountCostManagementExportExportDataStorageLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.containerIdInput">ContainerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPathInput">RootFolderPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.containerId">ContainerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPath">RootFolderPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerIdInput`<sup>Optional</sup> <a name="ContainerIdInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.containerIdInput"></a>

```go
func ContainerIdInput() *string
```

- *Type:* *string

---

##### `RootFolderPathInput`<sup>Optional</sup> <a name="RootFolderPathInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPathInput"></a>

```go
func RootFolderPathInput() *string
```

- *Type:* *string

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.containerId"></a>

```go
func ContainerId() *string
```

- *Type:* *string

---

##### `RootFolderPath`<sup>Required</sup> <a name="RootFolderPath" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPath"></a>

```go
func RootFolderPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() BillingAccountCostManagementExportExportDataStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a>

---


### BillingAccountCostManagementExportTimeoutsOutputReference <a name="BillingAccountCostManagementExportTimeoutsOutputReference" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/billingaccountcostmanagementexport"

billingaccountcostmanagementexport.NewBillingAccountCostManagementExportTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BillingAccountCostManagementExportTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



