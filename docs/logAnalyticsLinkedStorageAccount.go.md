# `logAnalyticsLinkedStorageAccount` Submodule <a name="`logAnalyticsLinkedStorageAccount` Submodule" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsLinkedStorageAccount <a name="LogAnalyticsLinkedStorageAccount" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/log_analytics_linked_storage_account azurerm_log_analytics_linked_storage_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/loganalyticslinkedstorageaccount"

loganalyticslinkedstorageaccount.NewLogAnalyticsLinkedStorageAccount(scope Construct, id *string, config LogAnalyticsLinkedStorageAccountConfig) LogAnalyticsLinkedStorageAccount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig">LogAnalyticsLinkedStorageAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig">LogAnalyticsLinkedStorageAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.resetWorkspaceResourceId">ResetWorkspaceResourceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.putTimeouts"></a>

```go
func PutTimeouts(value LogAnalyticsLinkedStorageAccountTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts">LogAnalyticsLinkedStorageAccountTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```

##### `ResetWorkspaceResourceId` <a name="ResetWorkspaceResourceId" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.resetWorkspaceResourceId"></a>

```go
func ResetWorkspaceResourceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LogAnalyticsLinkedStorageAccount resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/loganalyticslinkedstorageaccount"

loganalyticslinkedstorageaccount.LogAnalyticsLinkedStorageAccount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/loganalyticslinkedstorageaccount"

loganalyticslinkedstorageaccount.LogAnalyticsLinkedStorageAccount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/loganalyticslinkedstorageaccount"

loganalyticslinkedstorageaccount.LogAnalyticsLinkedStorageAccount_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/loganalyticslinkedstorageaccount"

loganalyticslinkedstorageaccount.LogAnalyticsLinkedStorageAccount_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LogAnalyticsLinkedStorageAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LogAnalyticsLinkedStorageAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LogAnalyticsLinkedStorageAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/log_analytics_linked_storage_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LogAnalyticsLinkedStorageAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference">LogAnalyticsLinkedStorageAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.dataSourceTypeInput">DataSourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.storageAccountIdsInput">StorageAccountIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.workspaceResourceIdInput">WorkspaceResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.dataSourceType">DataSourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.storageAccountIds">StorageAccountIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.workspaceResourceId">WorkspaceResourceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.timeouts"></a>

```go
func Timeouts() LogAnalyticsLinkedStorageAccountTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference">LogAnalyticsLinkedStorageAccountTimeoutsOutputReference</a>

---

##### `DataSourceTypeInput`<sup>Optional</sup> <a name="DataSourceTypeInput" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.dataSourceTypeInput"></a>

```go
func DataSourceTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `StorageAccountIdsInput`<sup>Optional</sup> <a name="StorageAccountIdsInput" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.storageAccountIdsInput"></a>

```go
func StorageAccountIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceResourceIdInput`<sup>Optional</sup> <a name="WorkspaceResourceIdInput" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.workspaceResourceIdInput"></a>

```go
func WorkspaceResourceIdInput() *string
```

- *Type:* *string

---

##### `DataSourceType`<sup>Required</sup> <a name="DataSourceType" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.dataSourceType"></a>

```go
func DataSourceType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `StorageAccountIds`<sup>Required</sup> <a name="StorageAccountIds" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.storageAccountIds"></a>

```go
func StorageAccountIds() *[]*string
```

- *Type:* *[]*string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `WorkspaceResourceId`<sup>Required</sup> <a name="WorkspaceResourceId" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.workspaceResourceId"></a>

```go
func WorkspaceResourceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsLinkedStorageAccountConfig <a name="LogAnalyticsLinkedStorageAccountConfig" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/loganalyticslinkedstorageaccount"

&loganalyticslinkedstorageaccount.LogAnalyticsLinkedStorageAccountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataSourceType: *string,
	ResourceGroupName: *string,
	StorageAccountIds: *[]*string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts,
	WorkspaceId: *string,
	WorkspaceResourceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.dataSourceType">DataSourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/log_analytics_linked_storage_account#data_source_type LogAnalyticsLinkedStorageAccount#data_source_type}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/log_analytics_linked_storage_account#resource_group_name LogAnalyticsLinkedStorageAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.storageAccountIds">StorageAccountIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/log_analytics_linked_storage_account#storage_account_ids LogAnalyticsLinkedStorageAccount#storage_account_ids}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/log_analytics_linked_storage_account#id LogAnalyticsLinkedStorageAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts">LogAnalyticsLinkedStorageAccountTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/log_analytics_linked_storage_account#workspace_id LogAnalyticsLinkedStorageAccount#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.workspaceResourceId">WorkspaceResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/log_analytics_linked_storage_account#workspace_resource_id LogAnalyticsLinkedStorageAccount#workspace_resource_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataSourceType`<sup>Required</sup> <a name="DataSourceType" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.dataSourceType"></a>

```go
DataSourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/log_analytics_linked_storage_account#data_source_type LogAnalyticsLinkedStorageAccount#data_source_type}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/log_analytics_linked_storage_account#resource_group_name LogAnalyticsLinkedStorageAccount#resource_group_name}.

---

##### `StorageAccountIds`<sup>Required</sup> <a name="StorageAccountIds" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.storageAccountIds"></a>

```go
StorageAccountIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/log_analytics_linked_storage_account#storage_account_ids LogAnalyticsLinkedStorageAccount#storage_account_ids}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/log_analytics_linked_storage_account#id LogAnalyticsLinkedStorageAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.timeouts"></a>

```go
Timeouts LogAnalyticsLinkedStorageAccountTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts">LogAnalyticsLinkedStorageAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/log_analytics_linked_storage_account#timeouts LogAnalyticsLinkedStorageAccount#timeouts}

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/log_analytics_linked_storage_account#workspace_id LogAnalyticsLinkedStorageAccount#workspace_id}.

---

##### `WorkspaceResourceId`<sup>Optional</sup> <a name="WorkspaceResourceId" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountConfig.property.workspaceResourceId"></a>

```go
WorkspaceResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/log_analytics_linked_storage_account#workspace_resource_id LogAnalyticsLinkedStorageAccount#workspace_resource_id}.

---

### LogAnalyticsLinkedStorageAccountTimeouts <a name="LogAnalyticsLinkedStorageAccountTimeouts" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/loganalyticslinkedstorageaccount"

&loganalyticslinkedstorageaccount.LogAnalyticsLinkedStorageAccountTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/log_analytics_linked_storage_account#create LogAnalyticsLinkedStorageAccount#create}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/log_analytics_linked_storage_account#delete LogAnalyticsLinkedStorageAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/log_analytics_linked_storage_account#read LogAnalyticsLinkedStorageAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/log_analytics_linked_storage_account#update LogAnalyticsLinkedStorageAccount#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/log_analytics_linked_storage_account#create LogAnalyticsLinkedStorageAccount#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/log_analytics_linked_storage_account#delete LogAnalyticsLinkedStorageAccount#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/log_analytics_linked_storage_account#read LogAnalyticsLinkedStorageAccount#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/log_analytics_linked_storage_account#update LogAnalyticsLinkedStorageAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsLinkedStorageAccountTimeoutsOutputReference <a name="LogAnalyticsLinkedStorageAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/loganalyticslinkedstorageaccount"

loganalyticslinkedstorageaccount.NewLogAnalyticsLinkedStorageAccountTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogAnalyticsLinkedStorageAccountTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logAnalyticsLinkedStorageAccount.LogAnalyticsLinkedStorageAccountTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



