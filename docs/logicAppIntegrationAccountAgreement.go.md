# `logicAppIntegrationAccountAgreement` Submodule <a name="`logicAppIntegrationAccountAgreement` Submodule" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogicAppIntegrationAccountAgreement <a name="LogicAppIntegrationAccountAgreement" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement azurerm_logic_app_integration_account_agreement}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/logicappintegrationaccountagreement"

logicappintegrationaccountagreement.NewLogicAppIntegrationAccountAgreement(scope Construct, id *string, config LogicAppIntegrationAccountAgreementConfig) LogicAppIntegrationAccountAgreement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig">LogicAppIntegrationAccountAgreementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig">LogicAppIntegrationAccountAgreementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.putGuestIdentity">PutGuestIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.putHostIdentity">PutHostIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGuestIdentity` <a name="PutGuestIdentity" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.putGuestIdentity"></a>

```go
func PutGuestIdentity(value LogicAppIntegrationAccountAgreementGuestIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.putGuestIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity">LogicAppIntegrationAccountAgreementGuestIdentity</a>

---

##### `PutHostIdentity` <a name="PutHostIdentity" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.putHostIdentity"></a>

```go
func PutHostIdentity(value LogicAppIntegrationAccountAgreementHostIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.putHostIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity">LogicAppIntegrationAccountAgreementHostIdentity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.putTimeouts"></a>

```go
func PutTimeouts(value LogicAppIntegrationAccountAgreementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts">LogicAppIntegrationAccountAgreementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.resetId"></a>

```go
func ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LogicAppIntegrationAccountAgreement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/logicappintegrationaccountagreement"

logicappintegrationaccountagreement.LogicAppIntegrationAccountAgreement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/logicappintegrationaccountagreement"

logicappintegrationaccountagreement.LogicAppIntegrationAccountAgreement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/logicappintegrationaccountagreement"

logicappintegrationaccountagreement.LogicAppIntegrationAccountAgreement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/logicappintegrationaccountagreement"

logicappintegrationaccountagreement.LogicAppIntegrationAccountAgreement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LogicAppIntegrationAccountAgreement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LogicAppIntegrationAccountAgreement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LogicAppIntegrationAccountAgreement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LogicAppIntegrationAccountAgreement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.guestIdentity">GuestIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference">LogicAppIntegrationAccountAgreementGuestIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.hostIdentity">HostIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference">LogicAppIntegrationAccountAgreementHostIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference">LogicAppIntegrationAccountAgreementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.agreementTypeInput">AgreementTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.guestIdentityInput">GuestIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity">LogicAppIntegrationAccountAgreementGuestIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.guestPartnerNameInput">GuestPartnerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.hostIdentityInput">HostIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity">LogicAppIntegrationAccountAgreementHostIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.hostPartnerNameInput">HostPartnerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.integrationAccountNameInput">IntegrationAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.agreementType">AgreementType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.guestPartnerName">GuestPartnerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.hostPartnerName">HostPartnerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.integrationAccountName">IntegrationAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GuestIdentity`<sup>Required</sup> <a name="GuestIdentity" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.guestIdentity"></a>

```go
func GuestIdentity() LogicAppIntegrationAccountAgreementGuestIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference">LogicAppIntegrationAccountAgreementGuestIdentityOutputReference</a>

---

##### `HostIdentity`<sup>Required</sup> <a name="HostIdentity" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.hostIdentity"></a>

```go
func HostIdentity() LogicAppIntegrationAccountAgreementHostIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference">LogicAppIntegrationAccountAgreementHostIdentityOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.timeouts"></a>

```go
func Timeouts() LogicAppIntegrationAccountAgreementTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference">LogicAppIntegrationAccountAgreementTimeoutsOutputReference</a>

---

##### `AgreementTypeInput`<sup>Optional</sup> <a name="AgreementTypeInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.agreementTypeInput"></a>

```go
func AgreementTypeInput() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `GuestIdentityInput`<sup>Optional</sup> <a name="GuestIdentityInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.guestIdentityInput"></a>

```go
func GuestIdentityInput() LogicAppIntegrationAccountAgreementGuestIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity">LogicAppIntegrationAccountAgreementGuestIdentity</a>

---

##### `GuestPartnerNameInput`<sup>Optional</sup> <a name="GuestPartnerNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.guestPartnerNameInput"></a>

```go
func GuestPartnerNameInput() *string
```

- *Type:* *string

---

##### `HostIdentityInput`<sup>Optional</sup> <a name="HostIdentityInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.hostIdentityInput"></a>

```go
func HostIdentityInput() LogicAppIntegrationAccountAgreementHostIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity">LogicAppIntegrationAccountAgreementHostIdentity</a>

---

##### `HostPartnerNameInput`<sup>Optional</sup> <a name="HostPartnerNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.hostPartnerNameInput"></a>

```go
func HostPartnerNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntegrationAccountNameInput`<sup>Optional</sup> <a name="IntegrationAccountNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.integrationAccountNameInput"></a>

```go
func IntegrationAccountNameInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AgreementType`<sup>Required</sup> <a name="AgreementType" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.agreementType"></a>

```go
func AgreementType() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `GuestPartnerName`<sup>Required</sup> <a name="GuestPartnerName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.guestPartnerName"></a>

```go
func GuestPartnerName() *string
```

- *Type:* *string

---

##### `HostPartnerName`<sup>Required</sup> <a name="HostPartnerName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.hostPartnerName"></a>

```go
func HostPartnerName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IntegrationAccountName`<sup>Required</sup> <a name="IntegrationAccountName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.integrationAccountName"></a>

```go
func IntegrationAccountName() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LogicAppIntegrationAccountAgreementConfig <a name="LogicAppIntegrationAccountAgreementConfig" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/logicappintegrationaccountagreement"

&logicappintegrationaccountagreement.LogicAppIntegrationAccountAgreementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AgreementType: *string,
	Content: *string,
	GuestIdentity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity,
	GuestPartnerName: *string,
	HostIdentity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity,
	HostPartnerName: *string,
	IntegrationAccountName: *string,
	Name: *string,
	ResourceGroupName: *string,
	Id: *string,
	Metadata: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.agreementType">AgreementType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#agreement_type LogicAppIntegrationAccountAgreement#agreement_type}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#content LogicAppIntegrationAccountAgreement#content}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.guestIdentity">GuestIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity">LogicAppIntegrationAccountAgreementGuestIdentity</a></code> | guest_identity block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.guestPartnerName">GuestPartnerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#guest_partner_name LogicAppIntegrationAccountAgreement#guest_partner_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.hostIdentity">HostIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity">LogicAppIntegrationAccountAgreementHostIdentity</a></code> | host_identity block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.hostPartnerName">HostPartnerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#host_partner_name LogicAppIntegrationAccountAgreement#host_partner_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.integrationAccountName">IntegrationAccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#integration_account_name LogicAppIntegrationAccountAgreement#integration_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#name LogicAppIntegrationAccountAgreement#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#resource_group_name LogicAppIntegrationAccountAgreement#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#id LogicAppIntegrationAccountAgreement#id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#metadata LogicAppIntegrationAccountAgreement#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts">LogicAppIntegrationAccountAgreementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgreementType`<sup>Required</sup> <a name="AgreementType" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.agreementType"></a>

```go
AgreementType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#agreement_type LogicAppIntegrationAccountAgreement#agreement_type}.

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#content LogicAppIntegrationAccountAgreement#content}.

---

##### `GuestIdentity`<sup>Required</sup> <a name="GuestIdentity" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.guestIdentity"></a>

```go
GuestIdentity LogicAppIntegrationAccountAgreementGuestIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity">LogicAppIntegrationAccountAgreementGuestIdentity</a>

guest_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#guest_identity LogicAppIntegrationAccountAgreement#guest_identity}

---

##### `GuestPartnerName`<sup>Required</sup> <a name="GuestPartnerName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.guestPartnerName"></a>

```go
GuestPartnerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#guest_partner_name LogicAppIntegrationAccountAgreement#guest_partner_name}.

---

##### `HostIdentity`<sup>Required</sup> <a name="HostIdentity" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.hostIdentity"></a>

```go
HostIdentity LogicAppIntegrationAccountAgreementHostIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity">LogicAppIntegrationAccountAgreementHostIdentity</a>

host_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#host_identity LogicAppIntegrationAccountAgreement#host_identity}

---

##### `HostPartnerName`<sup>Required</sup> <a name="HostPartnerName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.hostPartnerName"></a>

```go
HostPartnerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#host_partner_name LogicAppIntegrationAccountAgreement#host_partner_name}.

---

##### `IntegrationAccountName`<sup>Required</sup> <a name="IntegrationAccountName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.integrationAccountName"></a>

```go
IntegrationAccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#integration_account_name LogicAppIntegrationAccountAgreement#integration_account_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#name LogicAppIntegrationAccountAgreement#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#resource_group_name LogicAppIntegrationAccountAgreement#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#id LogicAppIntegrationAccountAgreement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#metadata LogicAppIntegrationAccountAgreement#metadata}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementConfig.property.timeouts"></a>

```go
Timeouts LogicAppIntegrationAccountAgreementTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts">LogicAppIntegrationAccountAgreementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#timeouts LogicAppIntegrationAccountAgreement#timeouts}

---

### LogicAppIntegrationAccountAgreementGuestIdentity <a name="LogicAppIntegrationAccountAgreementGuestIdentity" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/logicappintegrationaccountagreement"

&logicappintegrationaccountagreement.LogicAppIntegrationAccountAgreementGuestIdentity {
	Qualifier: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity.property.qualifier">Qualifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#qualifier LogicAppIntegrationAccountAgreement#qualifier}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#value LogicAppIntegrationAccountAgreement#value}. |

---

##### `Qualifier`<sup>Required</sup> <a name="Qualifier" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity.property.qualifier"></a>

```go
Qualifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#qualifier LogicAppIntegrationAccountAgreement#qualifier}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#value LogicAppIntegrationAccountAgreement#value}.

---

### LogicAppIntegrationAccountAgreementHostIdentity <a name="LogicAppIntegrationAccountAgreementHostIdentity" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/logicappintegrationaccountagreement"

&logicappintegrationaccountagreement.LogicAppIntegrationAccountAgreementHostIdentity {
	Qualifier: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity.property.qualifier">Qualifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#qualifier LogicAppIntegrationAccountAgreement#qualifier}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#value LogicAppIntegrationAccountAgreement#value}. |

---

##### `Qualifier`<sup>Required</sup> <a name="Qualifier" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity.property.qualifier"></a>

```go
Qualifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#qualifier LogicAppIntegrationAccountAgreement#qualifier}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#value LogicAppIntegrationAccountAgreement#value}.

---

### LogicAppIntegrationAccountAgreementTimeouts <a name="LogicAppIntegrationAccountAgreementTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/logicappintegrationaccountagreement"

&logicappintegrationaccountagreement.LogicAppIntegrationAccountAgreementTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#create LogicAppIntegrationAccountAgreement#create}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#delete LogicAppIntegrationAccountAgreement#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#read LogicAppIntegrationAccountAgreement#read}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#update LogicAppIntegrationAccountAgreement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#create LogicAppIntegrationAccountAgreement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#delete LogicAppIntegrationAccountAgreement#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#read LogicAppIntegrationAccountAgreement#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/logic_app_integration_account_agreement#update LogicAppIntegrationAccountAgreement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogicAppIntegrationAccountAgreementGuestIdentityOutputReference <a name="LogicAppIntegrationAccountAgreementGuestIdentityOutputReference" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/logicappintegrationaccountagreement"

logicappintegrationaccountagreement.NewLogicAppIntegrationAccountAgreementGuestIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogicAppIntegrationAccountAgreementGuestIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.qualifierInput">QualifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.qualifier">Qualifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity">LogicAppIntegrationAccountAgreementGuestIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QualifierInput`<sup>Optional</sup> <a name="QualifierInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.qualifierInput"></a>

```go
func QualifierInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Qualifier`<sup>Required</sup> <a name="Qualifier" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.qualifier"></a>

```go
func Qualifier() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() LogicAppIntegrationAccountAgreementGuestIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementGuestIdentity">LogicAppIntegrationAccountAgreementGuestIdentity</a>

---


### LogicAppIntegrationAccountAgreementHostIdentityOutputReference <a name="LogicAppIntegrationAccountAgreementHostIdentityOutputReference" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/logicappintegrationaccountagreement"

logicappintegrationaccountagreement.NewLogicAppIntegrationAccountAgreementHostIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogicAppIntegrationAccountAgreementHostIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.qualifierInput">QualifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.qualifier">Qualifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity">LogicAppIntegrationAccountAgreementHostIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QualifierInput`<sup>Optional</sup> <a name="QualifierInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.qualifierInput"></a>

```go
func QualifierInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Qualifier`<sup>Required</sup> <a name="Qualifier" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.qualifier"></a>

```go
func Qualifier() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() LogicAppIntegrationAccountAgreementHostIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementHostIdentity">LogicAppIntegrationAccountAgreementHostIdentity</a>

---


### LogicAppIntegrationAccountAgreementTimeoutsOutputReference <a name="LogicAppIntegrationAccountAgreementTimeoutsOutputReference" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/logicappintegrationaccountagreement"

logicappintegrationaccountagreement.NewLogicAppIntegrationAccountAgreementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogicAppIntegrationAccountAgreementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppIntegrationAccountAgreement.LogicAppIntegrationAccountAgreementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



