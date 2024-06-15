# `logAnalyticsClusterCustomerManagedKey` Submodule <a name="`logAnalyticsClusterCustomerManagedKey` Submodule" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsClusterCustomerManagedKey <a name="LogAnalyticsClusterCustomerManagedKey" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/log_analytics_cluster_customer_managed_key azurerm_log_analytics_cluster_customer_managed_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/loganalyticsclustercustomermanagedkey"

loganalyticsclustercustomermanagedkey.NewLogAnalyticsClusterCustomerManagedKey(scope Construct, id *string, config LogAnalyticsClusterCustomerManagedKeyConfig) LogAnalyticsClusterCustomerManagedKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig">LogAnalyticsClusterCustomerManagedKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig">LogAnalyticsClusterCustomerManagedKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.putTimeouts"></a>

```go
func PutTimeouts(value LogAnalyticsClusterCustomerManagedKeyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts">LogAnalyticsClusterCustomerManagedKeyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LogAnalyticsClusterCustomerManagedKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/loganalyticsclustercustomermanagedkey"

loganalyticsclustercustomermanagedkey.LogAnalyticsClusterCustomerManagedKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/loganalyticsclustercustomermanagedkey"

loganalyticsclustercustomermanagedkey.LogAnalyticsClusterCustomerManagedKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/loganalyticsclustercustomermanagedkey"

loganalyticsclustercustomermanagedkey.LogAnalyticsClusterCustomerManagedKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/loganalyticsclustercustomermanagedkey"

loganalyticsclustercustomermanagedkey.LogAnalyticsClusterCustomerManagedKey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LogAnalyticsClusterCustomerManagedKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LogAnalyticsClusterCustomerManagedKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LogAnalyticsClusterCustomerManagedKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/log_analytics_cluster_customer_managed_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LogAnalyticsClusterCustomerManagedKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference">LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.logAnalyticsClusterIdInput">LogAnalyticsClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.logAnalyticsClusterId">LogAnalyticsClusterId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.timeouts"></a>

```go
func Timeouts() LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference">LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.keyVaultKeyIdInput"></a>

```go
func KeyVaultKeyIdInput() *string
```

- *Type:* *string

---

##### `LogAnalyticsClusterIdInput`<sup>Optional</sup> <a name="LogAnalyticsClusterIdInput" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.logAnalyticsClusterIdInput"></a>

```go
func LogAnalyticsClusterIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.keyVaultKeyId"></a>

```go
func KeyVaultKeyId() *string
```

- *Type:* *string

---

##### `LogAnalyticsClusterId`<sup>Required</sup> <a name="LogAnalyticsClusterId" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.logAnalyticsClusterId"></a>

```go
func LogAnalyticsClusterId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsClusterCustomerManagedKeyConfig <a name="LogAnalyticsClusterCustomerManagedKeyConfig" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/loganalyticsclustercustomermanagedkey"

&loganalyticsclustercustomermanagedkey.LogAnalyticsClusterCustomerManagedKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KeyVaultKeyId: *string,
	LogAnalyticsClusterId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/log_analytics_cluster_customer_managed_key#key_vault_key_id LogAnalyticsClusterCustomerManagedKey#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.logAnalyticsClusterId">LogAnalyticsClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/log_analytics_cluster_customer_managed_key#log_analytics_cluster_id LogAnalyticsClusterCustomerManagedKey#log_analytics_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/log_analytics_cluster_customer_managed_key#id LogAnalyticsClusterCustomerManagedKey#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts">LogAnalyticsClusterCustomerManagedKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.keyVaultKeyId"></a>

```go
KeyVaultKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/log_analytics_cluster_customer_managed_key#key_vault_key_id LogAnalyticsClusterCustomerManagedKey#key_vault_key_id}.

---

##### `LogAnalyticsClusterId`<sup>Required</sup> <a name="LogAnalyticsClusterId" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.logAnalyticsClusterId"></a>

```go
LogAnalyticsClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/log_analytics_cluster_customer_managed_key#log_analytics_cluster_id LogAnalyticsClusterCustomerManagedKey#log_analytics_cluster_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/log_analytics_cluster_customer_managed_key#id LogAnalyticsClusterCustomerManagedKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyConfig.property.timeouts"></a>

```go
Timeouts LogAnalyticsClusterCustomerManagedKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts">LogAnalyticsClusterCustomerManagedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/log_analytics_cluster_customer_managed_key#timeouts LogAnalyticsClusterCustomerManagedKey#timeouts}

---

### LogAnalyticsClusterCustomerManagedKeyTimeouts <a name="LogAnalyticsClusterCustomerManagedKeyTimeouts" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/loganalyticsclustercustomermanagedkey"

&loganalyticsclustercustomermanagedkey.LogAnalyticsClusterCustomerManagedKeyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/log_analytics_cluster_customer_managed_key#create LogAnalyticsClusterCustomerManagedKey#create}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/log_analytics_cluster_customer_managed_key#delete LogAnalyticsClusterCustomerManagedKey#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/log_analytics_cluster_customer_managed_key#read LogAnalyticsClusterCustomerManagedKey#read}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/log_analytics_cluster_customer_managed_key#update LogAnalyticsClusterCustomerManagedKey#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/log_analytics_cluster_customer_managed_key#create LogAnalyticsClusterCustomerManagedKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/log_analytics_cluster_customer_managed_key#delete LogAnalyticsClusterCustomerManagedKey#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/log_analytics_cluster_customer_managed_key#read LogAnalyticsClusterCustomerManagedKey#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/log_analytics_cluster_customer_managed_key#update LogAnalyticsClusterCustomerManagedKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference <a name="LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/loganalyticsclustercustomermanagedkey"

loganalyticsclustercustomermanagedkey.NewLogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logAnalyticsClusterCustomerManagedKey.LogAnalyticsClusterCustomerManagedKeyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



