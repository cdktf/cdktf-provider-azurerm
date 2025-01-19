# `sentinelDataConnectorAwsCloudTrail` Submodule <a name="`sentinelDataConnectorAwsCloudTrail` Submodule" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelDataConnectorAwsCloudTrail <a name="SentinelDataConnectorAwsCloudTrail" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/sentinel_data_connector_aws_cloud_trail azurerm_sentinel_data_connector_aws_cloud_trail}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sentineldataconnectorawscloudtrail"

sentineldataconnectorawscloudtrail.NewSentinelDataConnectorAwsCloudTrail(scope Construct, id *string, config SentinelDataConnectorAwsCloudTrailConfig) SentinelDataConnectorAwsCloudTrail
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig">SentinelDataConnectorAwsCloudTrailConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig">SentinelDataConnectorAwsCloudTrailConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.putTimeouts"></a>

```go
func PutTimeouts(value SentinelDataConnectorAwsCloudTrailTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts">SentinelDataConnectorAwsCloudTrailTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelDataConnectorAwsCloudTrail resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sentineldataconnectorawscloudtrail"

sentineldataconnectorawscloudtrail.SentinelDataConnectorAwsCloudTrail_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sentineldataconnectorawscloudtrail"

sentineldataconnectorawscloudtrail.SentinelDataConnectorAwsCloudTrail_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sentineldataconnectorawscloudtrail"

sentineldataconnectorawscloudtrail.SentinelDataConnectorAwsCloudTrail_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sentineldataconnectorawscloudtrail"

sentineldataconnectorawscloudtrail.SentinelDataConnectorAwsCloudTrail_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SentinelDataConnectorAwsCloudTrail resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SentinelDataConnectorAwsCloudTrail to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SentinelDataConnectorAwsCloudTrail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/sentinel_data_connector_aws_cloud_trail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SentinelDataConnectorAwsCloudTrail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference">SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.awsRoleArnInput">AwsRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.awsRoleArn">AwsRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.timeouts"></a>

```go
func Timeouts() SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference">SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference</a>

---

##### `AwsRoleArnInput`<sup>Optional</sup> <a name="AwsRoleArnInput" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.awsRoleArnInput"></a>

```go
func AwsRoleArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.logAnalyticsWorkspaceIdInput"></a>

```go
func LogAnalyticsWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AwsRoleArn`<sup>Required</sup> <a name="AwsRoleArn" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.awsRoleArn"></a>

```go
func AwsRoleArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.logAnalyticsWorkspaceId"></a>

```go
func LogAnalyticsWorkspaceId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrail.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelDataConnectorAwsCloudTrailConfig <a name="SentinelDataConnectorAwsCloudTrailConfig" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sentineldataconnectorawscloudtrail"

&sentineldataconnectorawscloudtrail.SentinelDataConnectorAwsCloudTrailConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AwsRoleArn: *string,
	LogAnalyticsWorkspaceId: *string,
	Name: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.awsRoleArn">AwsRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/sentinel_data_connector_aws_cloud_trail#aws_role_arn SentinelDataConnectorAwsCloudTrail#aws_role_arn}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/sentinel_data_connector_aws_cloud_trail#log_analytics_workspace_id SentinelDataConnectorAwsCloudTrail#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/sentinel_data_connector_aws_cloud_trail#name SentinelDataConnectorAwsCloudTrail#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/sentinel_data_connector_aws_cloud_trail#id SentinelDataConnectorAwsCloudTrail#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts">SentinelDataConnectorAwsCloudTrailTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwsRoleArn`<sup>Required</sup> <a name="AwsRoleArn" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.awsRoleArn"></a>

```go
AwsRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/sentinel_data_connector_aws_cloud_trail#aws_role_arn SentinelDataConnectorAwsCloudTrail#aws_role_arn}.

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.logAnalyticsWorkspaceId"></a>

```go
LogAnalyticsWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/sentinel_data_connector_aws_cloud_trail#log_analytics_workspace_id SentinelDataConnectorAwsCloudTrail#log_analytics_workspace_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/sentinel_data_connector_aws_cloud_trail#name SentinelDataConnectorAwsCloudTrail#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/sentinel_data_connector_aws_cloud_trail#id SentinelDataConnectorAwsCloudTrail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailConfig.property.timeouts"></a>

```go
Timeouts SentinelDataConnectorAwsCloudTrailTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts">SentinelDataConnectorAwsCloudTrailTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/sentinel_data_connector_aws_cloud_trail#timeouts SentinelDataConnectorAwsCloudTrail#timeouts}

---

### SentinelDataConnectorAwsCloudTrailTimeouts <a name="SentinelDataConnectorAwsCloudTrailTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sentineldataconnectorawscloudtrail"

&sentineldataconnectorawscloudtrail.SentinelDataConnectorAwsCloudTrailTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/sentinel_data_connector_aws_cloud_trail#create SentinelDataConnectorAwsCloudTrail#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/sentinel_data_connector_aws_cloud_trail#delete SentinelDataConnectorAwsCloudTrail#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/sentinel_data_connector_aws_cloud_trail#read SentinelDataConnectorAwsCloudTrail#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/sentinel_data_connector_aws_cloud_trail#update SentinelDataConnectorAwsCloudTrail#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/sentinel_data_connector_aws_cloud_trail#create SentinelDataConnectorAwsCloudTrail#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/sentinel_data_connector_aws_cloud_trail#delete SentinelDataConnectorAwsCloudTrail#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/sentinel_data_connector_aws_cloud_trail#read SentinelDataConnectorAwsCloudTrail#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/sentinel_data_connector_aws_cloud_trail#update SentinelDataConnectorAwsCloudTrail#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference <a name="SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sentineldataconnectorawscloudtrail"

sentineldataconnectorawscloudtrail.NewSentinelDataConnectorAwsCloudTrailTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelDataConnectorAwsCloudTrail.SentinelDataConnectorAwsCloudTrailTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



