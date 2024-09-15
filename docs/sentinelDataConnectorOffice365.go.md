# `sentinelDataConnectorOffice365` Submodule <a name="`sentinelDataConnectorOffice365` Submodule" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelDataConnectorOffice365 <a name="SentinelDataConnectorOffice365" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/sentinel_data_connector_office_365 azurerm_sentinel_data_connector_office_365}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sentineldataconnectoroffice365"

sentineldataconnectoroffice365.NewSentinelDataConnectorOffice365(scope Construct, id *string, config SentinelDataConnectorOffice365Config) SentinelDataConnectorOffice365
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config">SentinelDataConnectorOffice365Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config">SentinelDataConnectorOffice365Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetExchangeEnabled">ResetExchangeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetSharepointEnabled">ResetSharepointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetTeamsEnabled">ResetTeamsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.putTimeouts"></a>

```go
func PutTimeouts(value SentinelDataConnectorOffice365Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts">SentinelDataConnectorOffice365Timeouts</a>

---

##### `ResetExchangeEnabled` <a name="ResetExchangeEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetExchangeEnabled"></a>

```go
func ResetExchangeEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetId"></a>

```go
func ResetId()
```

##### `ResetSharepointEnabled` <a name="ResetSharepointEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetSharepointEnabled"></a>

```go
func ResetSharepointEnabled()
```

##### `ResetTeamsEnabled` <a name="ResetTeamsEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetTeamsEnabled"></a>

```go
func ResetTeamsEnabled()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetTenantId"></a>

```go
func ResetTenantId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelDataConnectorOffice365 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sentineldataconnectoroffice365"

sentineldataconnectoroffice365.SentinelDataConnectorOffice365_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sentineldataconnectoroffice365"

sentineldataconnectoroffice365.SentinelDataConnectorOffice365_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sentineldataconnectoroffice365"

sentineldataconnectoroffice365.SentinelDataConnectorOffice365_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sentineldataconnectoroffice365"

sentineldataconnectoroffice365.SentinelDataConnectorOffice365_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SentinelDataConnectorOffice365 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SentinelDataConnectorOffice365 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SentinelDataConnectorOffice365 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/sentinel_data_connector_office_365#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SentinelDataConnectorOffice365 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference">SentinelDataConnectorOffice365TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.exchangeEnabledInput">ExchangeEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.sharepointEnabledInput">SharepointEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.teamsEnabledInput">TeamsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.exchangeEnabled">ExchangeEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.sharepointEnabled">SharepointEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.teamsEnabled">TeamsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.timeouts"></a>

```go
func Timeouts() SentinelDataConnectorOffice365TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference">SentinelDataConnectorOffice365TimeoutsOutputReference</a>

---

##### `ExchangeEnabledInput`<sup>Optional</sup> <a name="ExchangeEnabledInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.exchangeEnabledInput"></a>

```go
func ExchangeEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.logAnalyticsWorkspaceIdInput"></a>

```go
func LogAnalyticsWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SharepointEnabledInput`<sup>Optional</sup> <a name="SharepointEnabledInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.sharepointEnabledInput"></a>

```go
func SharepointEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TeamsEnabledInput`<sup>Optional</sup> <a name="TeamsEnabledInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.teamsEnabledInput"></a>

```go
func TeamsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ExchangeEnabled`<sup>Required</sup> <a name="ExchangeEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.exchangeEnabled"></a>

```go
func ExchangeEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.logAnalyticsWorkspaceId"></a>

```go
func LogAnalyticsWorkspaceId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SharepointEnabled`<sup>Required</sup> <a name="SharepointEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.sharepointEnabled"></a>

```go
func SharepointEnabled() interface{}
```

- *Type:* interface{}

---

##### `TeamsEnabled`<sup>Required</sup> <a name="TeamsEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.teamsEnabled"></a>

```go
func TeamsEnabled() interface{}
```

- *Type:* interface{}

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelDataConnectorOffice365Config <a name="SentinelDataConnectorOffice365Config" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sentineldataconnectoroffice365"

&sentineldataconnectoroffice365.SentinelDataConnectorOffice365Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LogAnalyticsWorkspaceId: *string,
	Name: *string,
	ExchangeEnabled: interface{},
	Id: *string,
	SharepointEnabled: interface{},
	TeamsEnabled: interface{},
	TenantId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/sentinel_data_connector_office_365#log_analytics_workspace_id SentinelDataConnectorOffice365#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/sentinel_data_connector_office_365#name SentinelDataConnectorOffice365#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.exchangeEnabled">ExchangeEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/sentinel_data_connector_office_365#exchange_enabled SentinelDataConnectorOffice365#exchange_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/sentinel_data_connector_office_365#id SentinelDataConnectorOffice365#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.sharepointEnabled">SharepointEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/sentinel_data_connector_office_365#sharepoint_enabled SentinelDataConnectorOffice365#sharepoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.teamsEnabled">TeamsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/sentinel_data_connector_office_365#teams_enabled SentinelDataConnectorOffice365#teams_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/sentinel_data_connector_office_365#tenant_id SentinelDataConnectorOffice365#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts">SentinelDataConnectorOffice365Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.logAnalyticsWorkspaceId"></a>

```go
LogAnalyticsWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/sentinel_data_connector_office_365#log_analytics_workspace_id SentinelDataConnectorOffice365#log_analytics_workspace_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/sentinel_data_connector_office_365#name SentinelDataConnectorOffice365#name}.

---

##### `ExchangeEnabled`<sup>Optional</sup> <a name="ExchangeEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.exchangeEnabled"></a>

```go
ExchangeEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/sentinel_data_connector_office_365#exchange_enabled SentinelDataConnectorOffice365#exchange_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/sentinel_data_connector_office_365#id SentinelDataConnectorOffice365#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SharepointEnabled`<sup>Optional</sup> <a name="SharepointEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.sharepointEnabled"></a>

```go
SharepointEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/sentinel_data_connector_office_365#sharepoint_enabled SentinelDataConnectorOffice365#sharepoint_enabled}.

---

##### `TeamsEnabled`<sup>Optional</sup> <a name="TeamsEnabled" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.teamsEnabled"></a>

```go
TeamsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/sentinel_data_connector_office_365#teams_enabled SentinelDataConnectorOffice365#teams_enabled}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/sentinel_data_connector_office_365#tenant_id SentinelDataConnectorOffice365#tenant_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Config.property.timeouts"></a>

```go
Timeouts SentinelDataConnectorOffice365Timeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts">SentinelDataConnectorOffice365Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/sentinel_data_connector_office_365#timeouts SentinelDataConnectorOffice365#timeouts}

---

### SentinelDataConnectorOffice365Timeouts <a name="SentinelDataConnectorOffice365Timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sentineldataconnectoroffice365"

&sentineldataconnectoroffice365.SentinelDataConnectorOffice365Timeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/sentinel_data_connector_office_365#create SentinelDataConnectorOffice365#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/sentinel_data_connector_office_365#delete SentinelDataConnectorOffice365#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/sentinel_data_connector_office_365#read SentinelDataConnectorOffice365#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/sentinel_data_connector_office_365#update SentinelDataConnectorOffice365#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/sentinel_data_connector_office_365#create SentinelDataConnectorOffice365#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/sentinel_data_connector_office_365#delete SentinelDataConnectorOffice365#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/sentinel_data_connector_office_365#read SentinelDataConnectorOffice365#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365Timeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/sentinel_data_connector_office_365#update SentinelDataConnectorOffice365#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelDataConnectorOffice365TimeoutsOutputReference <a name="SentinelDataConnectorOffice365TimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sentineldataconnectoroffice365"

sentineldataconnectoroffice365.NewSentinelDataConnectorOffice365TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SentinelDataConnectorOffice365TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelDataConnectorOffice365.SentinelDataConnectorOffice365TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



