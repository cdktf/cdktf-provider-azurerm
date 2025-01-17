# `servicebusNamespaceDisasterRecoveryConfig` Submodule <a name="`servicebusNamespaceDisasterRecoveryConfig` Submodule" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusNamespaceDisasterRecoveryConfig <a name="ServicebusNamespaceDisasterRecoveryConfig" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/servicebus_namespace_disaster_recovery_config azurerm_servicebus_namespace_disaster_recovery_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/servicebusnamespacedisasterrecoveryconfig"

servicebusnamespacedisasterrecoveryconfig.NewServicebusNamespaceDisasterRecoveryConfig(scope Construct, id *string, config ServicebusNamespaceDisasterRecoveryConfigConfig) ServicebusNamespaceDisasterRecoveryConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig">ServicebusNamespaceDisasterRecoveryConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig">ServicebusNamespaceDisasterRecoveryConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.resetAliasAuthorizationRuleId">ResetAliasAuthorizationRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.putTimeouts"></a>

```go
func PutTimeouts(value ServicebusNamespaceDisasterRecoveryConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts">ServicebusNamespaceDisasterRecoveryConfigTimeouts</a>

---

##### `ResetAliasAuthorizationRuleId` <a name="ResetAliasAuthorizationRuleId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.resetAliasAuthorizationRuleId"></a>

```go
func ResetAliasAuthorizationRuleId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServicebusNamespaceDisasterRecoveryConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/servicebusnamespacedisasterrecoveryconfig"

servicebusnamespacedisasterrecoveryconfig.ServicebusNamespaceDisasterRecoveryConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/servicebusnamespacedisasterrecoveryconfig"

servicebusnamespacedisasterrecoveryconfig.ServicebusNamespaceDisasterRecoveryConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/servicebusnamespacedisasterrecoveryconfig"

servicebusnamespacedisasterrecoveryconfig.ServicebusNamespaceDisasterRecoveryConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/servicebusnamespacedisasterrecoveryconfig"

servicebusnamespacedisasterrecoveryconfig.ServicebusNamespaceDisasterRecoveryConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ServicebusNamespaceDisasterRecoveryConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServicebusNamespaceDisasterRecoveryConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServicebusNamespaceDisasterRecoveryConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/servicebus_namespace_disaster_recovery_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ServicebusNamespaceDisasterRecoveryConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.defaultPrimaryKey">DefaultPrimaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.defaultSecondaryKey">DefaultSecondaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.primaryConnectionStringAlias">PrimaryConnectionStringAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.secondaryConnectionStringAlias">SecondaryConnectionStringAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference">ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.aliasAuthorizationRuleIdInput">AliasAuthorizationRuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.partnerNamespaceIdInput">PartnerNamespaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.primaryNamespaceIdInput">PrimaryNamespaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.aliasAuthorizationRuleId">AliasAuthorizationRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.partnerNamespaceId">PartnerNamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.primaryNamespaceId">PrimaryNamespaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultPrimaryKey`<sup>Required</sup> <a name="DefaultPrimaryKey" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.defaultPrimaryKey"></a>

```go
func DefaultPrimaryKey() *string
```

- *Type:* *string

---

##### `DefaultSecondaryKey`<sup>Required</sup> <a name="DefaultSecondaryKey" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.defaultSecondaryKey"></a>

```go
func DefaultSecondaryKey() *string
```

- *Type:* *string

---

##### `PrimaryConnectionStringAlias`<sup>Required</sup> <a name="PrimaryConnectionStringAlias" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.primaryConnectionStringAlias"></a>

```go
func PrimaryConnectionStringAlias() *string
```

- *Type:* *string

---

##### `SecondaryConnectionStringAlias`<sup>Required</sup> <a name="SecondaryConnectionStringAlias" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.secondaryConnectionStringAlias"></a>

```go
func SecondaryConnectionStringAlias() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.timeouts"></a>

```go
func Timeouts() ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference">ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference</a>

---

##### `AliasAuthorizationRuleIdInput`<sup>Optional</sup> <a name="AliasAuthorizationRuleIdInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.aliasAuthorizationRuleIdInput"></a>

```go
func AliasAuthorizationRuleIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PartnerNamespaceIdInput`<sup>Optional</sup> <a name="PartnerNamespaceIdInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.partnerNamespaceIdInput"></a>

```go
func PartnerNamespaceIdInput() *string
```

- *Type:* *string

---

##### `PrimaryNamespaceIdInput`<sup>Optional</sup> <a name="PrimaryNamespaceIdInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.primaryNamespaceIdInput"></a>

```go
func PrimaryNamespaceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AliasAuthorizationRuleId`<sup>Required</sup> <a name="AliasAuthorizationRuleId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.aliasAuthorizationRuleId"></a>

```go
func AliasAuthorizationRuleId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartnerNamespaceId`<sup>Required</sup> <a name="PartnerNamespaceId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.partnerNamespaceId"></a>

```go
func PartnerNamespaceId() *string
```

- *Type:* *string

---

##### `PrimaryNamespaceId`<sup>Required</sup> <a name="PrimaryNamespaceId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.primaryNamespaceId"></a>

```go
func PrimaryNamespaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusNamespaceDisasterRecoveryConfigConfig <a name="ServicebusNamespaceDisasterRecoveryConfigConfig" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/servicebusnamespacedisasterrecoveryconfig"

&servicebusnamespacedisasterrecoveryconfig.ServicebusNamespaceDisasterRecoveryConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	PartnerNamespaceId: *string,
	PrimaryNamespaceId: *string,
	AliasAuthorizationRuleId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/servicebus_namespace_disaster_recovery_config#name ServicebusNamespaceDisasterRecoveryConfig#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.partnerNamespaceId">PartnerNamespaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/servicebus_namespace_disaster_recovery_config#partner_namespace_id ServicebusNamespaceDisasterRecoveryConfig#partner_namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.primaryNamespaceId">PrimaryNamespaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/servicebus_namespace_disaster_recovery_config#primary_namespace_id ServicebusNamespaceDisasterRecoveryConfig#primary_namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.aliasAuthorizationRuleId">AliasAuthorizationRuleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/servicebus_namespace_disaster_recovery_config#alias_authorization_rule_id ServicebusNamespaceDisasterRecoveryConfig#alias_authorization_rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/servicebus_namespace_disaster_recovery_config#id ServicebusNamespaceDisasterRecoveryConfig#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts">ServicebusNamespaceDisasterRecoveryConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/servicebus_namespace_disaster_recovery_config#name ServicebusNamespaceDisasterRecoveryConfig#name}.

---

##### `PartnerNamespaceId`<sup>Required</sup> <a name="PartnerNamespaceId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.partnerNamespaceId"></a>

```go
PartnerNamespaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/servicebus_namespace_disaster_recovery_config#partner_namespace_id ServicebusNamespaceDisasterRecoveryConfig#partner_namespace_id}.

---

##### `PrimaryNamespaceId`<sup>Required</sup> <a name="PrimaryNamespaceId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.primaryNamespaceId"></a>

```go
PrimaryNamespaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/servicebus_namespace_disaster_recovery_config#primary_namespace_id ServicebusNamespaceDisasterRecoveryConfig#primary_namespace_id}.

---

##### `AliasAuthorizationRuleId`<sup>Optional</sup> <a name="AliasAuthorizationRuleId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.aliasAuthorizationRuleId"></a>

```go
AliasAuthorizationRuleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/servicebus_namespace_disaster_recovery_config#alias_authorization_rule_id ServicebusNamespaceDisasterRecoveryConfig#alias_authorization_rule_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/servicebus_namespace_disaster_recovery_config#id ServicebusNamespaceDisasterRecoveryConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.timeouts"></a>

```go
Timeouts ServicebusNamespaceDisasterRecoveryConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts">ServicebusNamespaceDisasterRecoveryConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/servicebus_namespace_disaster_recovery_config#timeouts ServicebusNamespaceDisasterRecoveryConfig#timeouts}

---

### ServicebusNamespaceDisasterRecoveryConfigTimeouts <a name="ServicebusNamespaceDisasterRecoveryConfigTimeouts" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/servicebusnamespacedisasterrecoveryconfig"

&servicebusnamespacedisasterrecoveryconfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/servicebus_namespace_disaster_recovery_config#create ServicebusNamespaceDisasterRecoveryConfig#create}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/servicebus_namespace_disaster_recovery_config#delete ServicebusNamespaceDisasterRecoveryConfig#delete}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/servicebus_namespace_disaster_recovery_config#read ServicebusNamespaceDisasterRecoveryConfig#read}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/servicebus_namespace_disaster_recovery_config#update ServicebusNamespaceDisasterRecoveryConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/servicebus_namespace_disaster_recovery_config#create ServicebusNamespaceDisasterRecoveryConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/servicebus_namespace_disaster_recovery_config#delete ServicebusNamespaceDisasterRecoveryConfig#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/servicebus_namespace_disaster_recovery_config#read ServicebusNamespaceDisasterRecoveryConfig#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/servicebus_namespace_disaster_recovery_config#update ServicebusNamespaceDisasterRecoveryConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference <a name="ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/servicebusnamespacedisasterrecoveryconfig"

servicebusnamespacedisasterrecoveryconfig.NewServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



