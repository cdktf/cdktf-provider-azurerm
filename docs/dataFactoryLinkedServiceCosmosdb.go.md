# `dataFactoryLinkedServiceCosmosdb` Submodule <a name="`dataFactoryLinkedServiceCosmosdb` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceCosmosdb <a name="DataFactoryLinkedServiceCosmosdb" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb azurerm_data_factory_linked_service_cosmosdb}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedservicecosmosdb"

datafactorylinkedservicecosmosdb.NewDataFactoryLinkedServiceCosmosdb(scope Construct, id *string, config DataFactoryLinkedServiceCosmosdbConfig) DataFactoryLinkedServiceCosmosdb
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig">DataFactoryLinkedServiceCosmosdbConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig">DataFactoryLinkedServiceCosmosdbConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetAccountEndpoint">ResetAccountEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetAccountKey">ResetAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetConnectionString">ResetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetIntegrationRuntimeName">ResetIntegrationRuntimeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.putTimeouts"></a>

```go
func PutTimeouts(value DataFactoryLinkedServiceCosmosdbTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts">DataFactoryLinkedServiceCosmosdbTimeouts</a>

---

##### `ResetAccountEndpoint` <a name="ResetAccountEndpoint" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetAccountEndpoint"></a>

```go
func ResetAccountEndpoint()
```

##### `ResetAccountKey` <a name="ResetAccountKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetAccountKey"></a>

```go
func ResetAccountKey()
```

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetAdditionalProperties"></a>

```go
func ResetAdditionalProperties()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetConnectionString` <a name="ResetConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetConnectionString"></a>

```go
func ResetConnectionString()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetId"></a>

```go
func ResetId()
```

##### `ResetIntegrationRuntimeName` <a name="ResetIntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetIntegrationRuntimeName"></a>

```go
func ResetIntegrationRuntimeName()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryLinkedServiceCosmosdb resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedservicecosmosdb"

datafactorylinkedservicecosmosdb.DataFactoryLinkedServiceCosmosdb_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedservicecosmosdb"

datafactorylinkedservicecosmosdb.DataFactoryLinkedServiceCosmosdb_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedservicecosmosdb"

datafactorylinkedservicecosmosdb.DataFactoryLinkedServiceCosmosdb_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedservicecosmosdb"

datafactorylinkedservicecosmosdb.DataFactoryLinkedServiceCosmosdb_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataFactoryLinkedServiceCosmosdb resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataFactoryLinkedServiceCosmosdb to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataFactoryLinkedServiceCosmosdb that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryLinkedServiceCosmosdb to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference">DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.accountEndpointInput">AccountEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.accountKeyInput">AccountKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.annotationsInput">AnnotationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.connectionStringInput">ConnectionStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.integrationRuntimeNameInput">IntegrationRuntimeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.accountEndpoint">AccountEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.accountKey">AccountKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.additionalProperties">AdditionalProperties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.annotations">Annotations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.connectionString">ConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.integrationRuntimeName">IntegrationRuntimeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.timeouts"></a>

```go
func Timeouts() DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference">DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference</a>

---

##### `AccountEndpointInput`<sup>Optional</sup> <a name="AccountEndpointInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.accountEndpointInput"></a>

```go
func AccountEndpointInput() *string
```

- *Type:* *string

---

##### `AccountKeyInput`<sup>Optional</sup> <a name="AccountKeyInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.accountKeyInput"></a>

```go
func AccountKeyInput() *string
```

- *Type:* *string

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.additionalPropertiesInput"></a>

```go
func AdditionalPropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.annotationsInput"></a>

```go
func AnnotationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.connectionStringInput"></a>

```go
func ConnectionStringInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.dataFactoryIdInput"></a>

```go
func DataFactoryIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntegrationRuntimeNameInput`<sup>Optional</sup> <a name="IntegrationRuntimeNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.integrationRuntimeNameInput"></a>

```go
func IntegrationRuntimeNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountEndpoint`<sup>Required</sup> <a name="AccountEndpoint" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.accountEndpoint"></a>

```go
func AccountEndpoint() *string
```

- *Type:* *string

---

##### `AccountKey`<sup>Required</sup> <a name="AccountKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.accountKey"></a>

```go
func AccountKey() *string
```

- *Type:* *string

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.additionalProperties"></a>

```go
func AdditionalProperties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.annotations"></a>

```go
func Annotations() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.connectionString"></a>

```go
func ConnectionString() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.dataFactoryId"></a>

```go
func DataFactoryId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IntegrationRuntimeName`<sup>Required</sup> <a name="IntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.integrationRuntimeName"></a>

```go
func IntegrationRuntimeName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceCosmosdbConfig <a name="DataFactoryLinkedServiceCosmosdbConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedservicecosmosdb"

&datafactorylinkedservicecosmosdb.DataFactoryLinkedServiceCosmosdbConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataFactoryId: *string,
	Name: *string,
	AccountEndpoint: *string,
	AccountKey: *string,
	AdditionalProperties: *map[string]*string,
	Annotations: *[]*string,
	ConnectionString: *string,
	Database: *string,
	Description: *string,
	Id: *string,
	IntegrationRuntimeName: *string,
	Parameters: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#data_factory_id DataFactoryLinkedServiceCosmosdb#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#name DataFactoryLinkedServiceCosmosdb#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.accountEndpoint">AccountEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#account_endpoint DataFactoryLinkedServiceCosmosdb#account_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.accountKey">AccountKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#account_key DataFactoryLinkedServiceCosmosdb#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.additionalProperties">AdditionalProperties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#additional_properties DataFactoryLinkedServiceCosmosdb#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.annotations">Annotations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#annotations DataFactoryLinkedServiceCosmosdb#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.connectionString">ConnectionString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#connection_string DataFactoryLinkedServiceCosmosdb#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.database">Database</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#database DataFactoryLinkedServiceCosmosdb#database}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#description DataFactoryLinkedServiceCosmosdb#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#id DataFactoryLinkedServiceCosmosdb#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.integrationRuntimeName">IntegrationRuntimeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#integration_runtime_name DataFactoryLinkedServiceCosmosdb#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#parameters DataFactoryLinkedServiceCosmosdb#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts">DataFactoryLinkedServiceCosmosdbTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.dataFactoryId"></a>

```go
DataFactoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#data_factory_id DataFactoryLinkedServiceCosmosdb#data_factory_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#name DataFactoryLinkedServiceCosmosdb#name}.

---

##### `AccountEndpoint`<sup>Optional</sup> <a name="AccountEndpoint" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.accountEndpoint"></a>

```go
AccountEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#account_endpoint DataFactoryLinkedServiceCosmosdb#account_endpoint}.

---

##### `AccountKey`<sup>Optional</sup> <a name="AccountKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.accountKey"></a>

```go
AccountKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#account_key DataFactoryLinkedServiceCosmosdb#account_key}.

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.additionalProperties"></a>

```go
AdditionalProperties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#additional_properties DataFactoryLinkedServiceCosmosdb#additional_properties}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.annotations"></a>

```go
Annotations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#annotations DataFactoryLinkedServiceCosmosdb#annotations}.

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.connectionString"></a>

```go
ConnectionString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#connection_string DataFactoryLinkedServiceCosmosdb#connection_string}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#database DataFactoryLinkedServiceCosmosdb#database}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#description DataFactoryLinkedServiceCosmosdb#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#id DataFactoryLinkedServiceCosmosdb#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IntegrationRuntimeName`<sup>Optional</sup> <a name="IntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.integrationRuntimeName"></a>

```go
IntegrationRuntimeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#integration_runtime_name DataFactoryLinkedServiceCosmosdb#integration_runtime_name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#parameters DataFactoryLinkedServiceCosmosdb#parameters}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.timeouts"></a>

```go
Timeouts DataFactoryLinkedServiceCosmosdbTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts">DataFactoryLinkedServiceCosmosdbTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#timeouts DataFactoryLinkedServiceCosmosdb#timeouts}

---

### DataFactoryLinkedServiceCosmosdbTimeouts <a name="DataFactoryLinkedServiceCosmosdbTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedservicecosmosdb"

&datafactorylinkedservicecosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#create DataFactoryLinkedServiceCosmosdb#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#delete DataFactoryLinkedServiceCosmosdb#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#read DataFactoryLinkedServiceCosmosdb#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#update DataFactoryLinkedServiceCosmosdb#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#create DataFactoryLinkedServiceCosmosdb#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#delete DataFactoryLinkedServiceCosmosdb#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#read DataFactoryLinkedServiceCosmosdb#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/data_factory_linked_service_cosmosdb#update DataFactoryLinkedServiceCosmosdb#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference <a name="DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedservicecosmosdb"

datafactorylinkedservicecosmosdb.NewDataFactoryLinkedServiceCosmosdbTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



