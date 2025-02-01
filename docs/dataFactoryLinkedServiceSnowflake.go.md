# `dataFactoryLinkedServiceSnowflake` Submodule <a name="`dataFactoryLinkedServiceSnowflake` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceSnowflake <a name="DataFactoryLinkedServiceSnowflake" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake azurerm_data_factory_linked_service_snowflake}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorylinkedservicesnowflake"

datafactorylinkedservicesnowflake.NewDataFactoryLinkedServiceSnowflake(scope Construct, id *string, config DataFactoryLinkedServiceSnowflakeConfig) DataFactoryLinkedServiceSnowflake
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig">DataFactoryLinkedServiceSnowflakeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig">DataFactoryLinkedServiceSnowflakeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.putKeyVaultPassword">PutKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetIntegrationRuntimeName">ResetIntegrationRuntimeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetKeyVaultPassword">ResetKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKeyVaultPassword` <a name="PutKeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.putKeyVaultPassword"></a>

```go
func PutKeyVaultPassword(value DataFactoryLinkedServiceSnowflakeKeyVaultPassword)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.putKeyVaultPassword.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword">DataFactoryLinkedServiceSnowflakeKeyVaultPassword</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.putTimeouts"></a>

```go
func PutTimeouts(value DataFactoryLinkedServiceSnowflakeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts">DataFactoryLinkedServiceSnowflakeTimeouts</a>

---

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetAdditionalProperties"></a>

```go
func ResetAdditionalProperties()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetId"></a>

```go
func ResetId()
```

##### `ResetIntegrationRuntimeName` <a name="ResetIntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetIntegrationRuntimeName"></a>

```go
func ResetIntegrationRuntimeName()
```

##### `ResetKeyVaultPassword` <a name="ResetKeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetKeyVaultPassword"></a>

```go
func ResetKeyVaultPassword()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryLinkedServiceSnowflake resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorylinkedservicesnowflake"

datafactorylinkedservicesnowflake.DataFactoryLinkedServiceSnowflake_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorylinkedservicesnowflake"

datafactorylinkedservicesnowflake.DataFactoryLinkedServiceSnowflake_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorylinkedservicesnowflake"

datafactorylinkedservicesnowflake.DataFactoryLinkedServiceSnowflake_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorylinkedservicesnowflake"

datafactorylinkedservicesnowflake.DataFactoryLinkedServiceSnowflake_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataFactoryLinkedServiceSnowflake resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataFactoryLinkedServiceSnowflake to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataFactoryLinkedServiceSnowflake that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryLinkedServiceSnowflake to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.keyVaultPassword">KeyVaultPassword</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference">DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference">DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.annotationsInput">AnnotationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.connectionStringInput">ConnectionStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.integrationRuntimeNameInput">IntegrationRuntimeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.keyVaultPasswordInput">KeyVaultPasswordInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword">DataFactoryLinkedServiceSnowflakeKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.additionalProperties">AdditionalProperties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.annotations">Annotations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.connectionString">ConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.integrationRuntimeName">IntegrationRuntimeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyVaultPassword`<sup>Required</sup> <a name="KeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.keyVaultPassword"></a>

```go
func KeyVaultPassword() DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference">DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.timeouts"></a>

```go
func Timeouts() DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference">DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference</a>

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.additionalPropertiesInput"></a>

```go
func AdditionalPropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.annotationsInput"></a>

```go
func AnnotationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.connectionStringInput"></a>

```go
func ConnectionStringInput() *string
```

- *Type:* *string

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.dataFactoryIdInput"></a>

```go
func DataFactoryIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntegrationRuntimeNameInput`<sup>Optional</sup> <a name="IntegrationRuntimeNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.integrationRuntimeNameInput"></a>

```go
func IntegrationRuntimeNameInput() *string
```

- *Type:* *string

---

##### `KeyVaultPasswordInput`<sup>Optional</sup> <a name="KeyVaultPasswordInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.keyVaultPasswordInput"></a>

```go
func KeyVaultPasswordInput() DataFactoryLinkedServiceSnowflakeKeyVaultPassword
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword">DataFactoryLinkedServiceSnowflakeKeyVaultPassword</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.additionalProperties"></a>

```go
func AdditionalProperties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.annotations"></a>

```go
func Annotations() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.connectionString"></a>

```go
func ConnectionString() *string
```

- *Type:* *string

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.dataFactoryId"></a>

```go
func DataFactoryId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IntegrationRuntimeName`<sup>Required</sup> <a name="IntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.integrationRuntimeName"></a>

```go
func IntegrationRuntimeName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflake.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceSnowflakeConfig <a name="DataFactoryLinkedServiceSnowflakeConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorylinkedservicesnowflake"

&datafactorylinkedservicesnowflake.DataFactoryLinkedServiceSnowflakeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectionString: *string,
	DataFactoryId: *string,
	Name: *string,
	AdditionalProperties: *map[string]*string,
	Annotations: *[]*string,
	Description: *string,
	Id: *string,
	IntegrationRuntimeName: *string,
	KeyVaultPassword: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword,
	Parameters: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.connectionString">ConnectionString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#connection_string DataFactoryLinkedServiceSnowflake#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#data_factory_id DataFactoryLinkedServiceSnowflake#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#name DataFactoryLinkedServiceSnowflake#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.additionalProperties">AdditionalProperties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#additional_properties DataFactoryLinkedServiceSnowflake#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.annotations">Annotations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#annotations DataFactoryLinkedServiceSnowflake#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#description DataFactoryLinkedServiceSnowflake#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#id DataFactoryLinkedServiceSnowflake#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.integrationRuntimeName">IntegrationRuntimeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#integration_runtime_name DataFactoryLinkedServiceSnowflake#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.keyVaultPassword">KeyVaultPassword</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword">DataFactoryLinkedServiceSnowflakeKeyVaultPassword</a></code> | key_vault_password block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#parameters DataFactoryLinkedServiceSnowflake#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts">DataFactoryLinkedServiceSnowflakeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.connectionString"></a>

```go
ConnectionString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#connection_string DataFactoryLinkedServiceSnowflake#connection_string}.

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.dataFactoryId"></a>

```go
DataFactoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#data_factory_id DataFactoryLinkedServiceSnowflake#data_factory_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#name DataFactoryLinkedServiceSnowflake#name}.

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.additionalProperties"></a>

```go
AdditionalProperties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#additional_properties DataFactoryLinkedServiceSnowflake#additional_properties}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.annotations"></a>

```go
Annotations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#annotations DataFactoryLinkedServiceSnowflake#annotations}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#description DataFactoryLinkedServiceSnowflake#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#id DataFactoryLinkedServiceSnowflake#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IntegrationRuntimeName`<sup>Optional</sup> <a name="IntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.integrationRuntimeName"></a>

```go
IntegrationRuntimeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#integration_runtime_name DataFactoryLinkedServiceSnowflake#integration_runtime_name}.

---

##### `KeyVaultPassword`<sup>Optional</sup> <a name="KeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.keyVaultPassword"></a>

```go
KeyVaultPassword DataFactoryLinkedServiceSnowflakeKeyVaultPassword
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword">DataFactoryLinkedServiceSnowflakeKeyVaultPassword</a>

key_vault_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#key_vault_password DataFactoryLinkedServiceSnowflake#key_vault_password}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#parameters DataFactoryLinkedServiceSnowflake#parameters}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeConfig.property.timeouts"></a>

```go
Timeouts DataFactoryLinkedServiceSnowflakeTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts">DataFactoryLinkedServiceSnowflakeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#timeouts DataFactoryLinkedServiceSnowflake#timeouts}

---

### DataFactoryLinkedServiceSnowflakeKeyVaultPassword <a name="DataFactoryLinkedServiceSnowflakeKeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorylinkedservicesnowflake"

&datafactorylinkedservicesnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword {
	LinkedServiceName: *string,
	SecretName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword.property.linkedServiceName">LinkedServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#linked_service_name DataFactoryLinkedServiceSnowflake#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword.property.secretName">SecretName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#secret_name DataFactoryLinkedServiceSnowflake#secret_name}. |

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword.property.linkedServiceName"></a>

```go
LinkedServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#linked_service_name DataFactoryLinkedServiceSnowflake#linked_service_name}.

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#secret_name DataFactoryLinkedServiceSnowflake#secret_name}.

---

### DataFactoryLinkedServiceSnowflakeTimeouts <a name="DataFactoryLinkedServiceSnowflakeTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorylinkedservicesnowflake"

&datafactorylinkedservicesnowflake.DataFactoryLinkedServiceSnowflakeTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#create DataFactoryLinkedServiceSnowflake#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#delete DataFactoryLinkedServiceSnowflake#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#read DataFactoryLinkedServiceSnowflake#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#update DataFactoryLinkedServiceSnowflake#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#create DataFactoryLinkedServiceSnowflake#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#delete DataFactoryLinkedServiceSnowflake#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#read DataFactoryLinkedServiceSnowflake#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_snowflake#update DataFactoryLinkedServiceSnowflake#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference <a name="DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorylinkedservicesnowflake"

datafactorylinkedservicesnowflake.NewDataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.linkedServiceNameInput">LinkedServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.linkedServiceName">LinkedServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword">DataFactoryLinkedServiceSnowflakeKeyVaultPassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LinkedServiceNameInput`<sup>Optional</sup> <a name="LinkedServiceNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.linkedServiceNameInput"></a>

```go
func LinkedServiceNameInput() *string
```

- *Type:* *string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.linkedServiceName"></a>

```go
func LinkedServiceName() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPasswordOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryLinkedServiceSnowflakeKeyVaultPassword
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeKeyVaultPassword">DataFactoryLinkedServiceSnowflakeKeyVaultPassword</a>

---


### DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference <a name="DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/datafactorylinkedservicesnowflake"

datafactorylinkedservicesnowflake.NewDataFactoryLinkedServiceSnowflakeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceSnowflake.DataFactoryLinkedServiceSnowflakeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



