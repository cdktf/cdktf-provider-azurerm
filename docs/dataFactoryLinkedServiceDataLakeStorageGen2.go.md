# `dataFactoryLinkedServiceDataLakeStorageGen2` Submodule <a name="`dataFactoryLinkedServiceDataLakeStorageGen2` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceDataLakeStorageGen2 <a name="DataFactoryLinkedServiceDataLakeStorageGen2" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2 azurerm_data_factory_linked_service_data_lake_storage_gen2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedservicedatalakestoragegen2"

datafactorylinkedservicedatalakestoragegen2.NewDataFactoryLinkedServiceDataLakeStorageGen2(scope Construct, id *string, config DataFactoryLinkedServiceDataLakeStorageGen2Config) DataFactoryLinkedServiceDataLakeStorageGen2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config">DataFactoryLinkedServiceDataLakeStorageGen2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config">DataFactoryLinkedServiceDataLakeStorageGen2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetIntegrationRuntimeName">ResetIntegrationRuntimeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetServicePrincipalId">ResetServicePrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetServicePrincipalKey">ResetServicePrincipalKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetStorageAccountKey">ResetStorageAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetTenant">ResetTenant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetUseManagedIdentity">ResetUseManagedIdentity</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.putTimeouts"></a>

```go
func PutTimeouts(value DataFactoryLinkedServiceDataLakeStorageGen2Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a>

---

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetAdditionalProperties"></a>

```go
func ResetAdditionalProperties()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetId"></a>

```go
func ResetId()
```

##### `ResetIntegrationRuntimeName` <a name="ResetIntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetIntegrationRuntimeName"></a>

```go
func ResetIntegrationRuntimeName()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetServicePrincipalId` <a name="ResetServicePrincipalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetServicePrincipalId"></a>

```go
func ResetServicePrincipalId()
```

##### `ResetServicePrincipalKey` <a name="ResetServicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetServicePrincipalKey"></a>

```go
func ResetServicePrincipalKey()
```

##### `ResetStorageAccountKey` <a name="ResetStorageAccountKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetStorageAccountKey"></a>

```go
func ResetStorageAccountKey()
```

##### `ResetTenant` <a name="ResetTenant" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetTenant"></a>

```go
func ResetTenant()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUseManagedIdentity` <a name="ResetUseManagedIdentity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetUseManagedIdentity"></a>

```go
func ResetUseManagedIdentity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryLinkedServiceDataLakeStorageGen2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedservicedatalakestoragegen2"

datafactorylinkedservicedatalakestoragegen2.DataFactoryLinkedServiceDataLakeStorageGen2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedservicedatalakestoragegen2"

datafactorylinkedservicedatalakestoragegen2.DataFactoryLinkedServiceDataLakeStorageGen2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedservicedatalakestoragegen2"

datafactorylinkedservicedatalakestoragegen2.DataFactoryLinkedServiceDataLakeStorageGen2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedservicedatalakestoragegen2"

datafactorylinkedservicedatalakestoragegen2.DataFactoryLinkedServiceDataLakeStorageGen2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataFactoryLinkedServiceDataLakeStorageGen2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataFactoryLinkedServiceDataLakeStorageGen2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataFactoryLinkedServiceDataLakeStorageGen2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryLinkedServiceDataLakeStorageGen2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference">DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.annotationsInput">AnnotationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.integrationRuntimeNameInput">IntegrationRuntimeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalIdInput">ServicePrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalKeyInput">ServicePrincipalKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.storageAccountKeyInput">StorageAccountKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.tenantInput">TenantInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.useManagedIdentityInput">UseManagedIdentityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.additionalProperties">AdditionalProperties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.annotations">Annotations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.integrationRuntimeName">IntegrationRuntimeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalKey">ServicePrincipalKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.storageAccountKey">StorageAccountKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.tenant">Tenant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.useManagedIdentity">UseManagedIdentity</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.timeouts"></a>

```go
func Timeouts() DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference">DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference</a>

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.additionalPropertiesInput"></a>

```go
func AdditionalPropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.annotationsInput"></a>

```go
func AnnotationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.dataFactoryIdInput"></a>

```go
func DataFactoryIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntegrationRuntimeNameInput`<sup>Optional</sup> <a name="IntegrationRuntimeNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.integrationRuntimeNameInput"></a>

```go
func IntegrationRuntimeNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ServicePrincipalIdInput`<sup>Optional</sup> <a name="ServicePrincipalIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalIdInput"></a>

```go
func ServicePrincipalIdInput() *string
```

- *Type:* *string

---

##### `ServicePrincipalKeyInput`<sup>Optional</sup> <a name="ServicePrincipalKeyInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalKeyInput"></a>

```go
func ServicePrincipalKeyInput() *string
```

- *Type:* *string

---

##### `StorageAccountKeyInput`<sup>Optional</sup> <a name="StorageAccountKeyInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.storageAccountKeyInput"></a>

```go
func StorageAccountKeyInput() *string
```

- *Type:* *string

---

##### `TenantInput`<sup>Optional</sup> <a name="TenantInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.tenantInput"></a>

```go
func TenantInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UseManagedIdentityInput`<sup>Optional</sup> <a name="UseManagedIdentityInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.useManagedIdentityInput"></a>

```go
func UseManagedIdentityInput() interface{}
```

- *Type:* interface{}

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.additionalProperties"></a>

```go
func AdditionalProperties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.annotations"></a>

```go
func Annotations() *[]*string
```

- *Type:* *[]*string

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.dataFactoryId"></a>

```go
func DataFactoryId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IntegrationRuntimeName`<sup>Required</sup> <a name="IntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.integrationRuntimeName"></a>

```go
func IntegrationRuntimeName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalId"></a>

```go
func ServicePrincipalId() *string
```

- *Type:* *string

---

##### `ServicePrincipalKey`<sup>Required</sup> <a name="ServicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalKey"></a>

```go
func ServicePrincipalKey() *string
```

- *Type:* *string

---

##### `StorageAccountKey`<sup>Required</sup> <a name="StorageAccountKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.storageAccountKey"></a>

```go
func StorageAccountKey() *string
```

- *Type:* *string

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.tenant"></a>

```go
func Tenant() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UseManagedIdentity`<sup>Required</sup> <a name="UseManagedIdentity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.useManagedIdentity"></a>

```go
func UseManagedIdentity() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceDataLakeStorageGen2Config <a name="DataFactoryLinkedServiceDataLakeStorageGen2Config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedservicedatalakestoragegen2"

&datafactorylinkedservicedatalakestoragegen2.DataFactoryLinkedServiceDataLakeStorageGen2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataFactoryId: *string,
	Name: *string,
	Url: *string,
	AdditionalProperties: *map[string]*string,
	Annotations: *[]*string,
	Description: *string,
	Id: *string,
	IntegrationRuntimeName: *string,
	Parameters: *map[string]*string,
	ServicePrincipalId: *string,
	ServicePrincipalKey: *string,
	StorageAccountKey: *string,
	Tenant: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts,
	UseManagedIdentity: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#data_factory_id DataFactoryLinkedServiceDataLakeStorageGen2#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#name DataFactoryLinkedServiceDataLakeStorageGen2#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#url DataFactoryLinkedServiceDataLakeStorageGen2#url}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.additionalProperties">AdditionalProperties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#additional_properties DataFactoryLinkedServiceDataLakeStorageGen2#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.annotations">Annotations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#annotations DataFactoryLinkedServiceDataLakeStorageGen2#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#description DataFactoryLinkedServiceDataLakeStorageGen2#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#id DataFactoryLinkedServiceDataLakeStorageGen2#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.integrationRuntimeName">IntegrationRuntimeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#integration_runtime_name DataFactoryLinkedServiceDataLakeStorageGen2#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#parameters DataFactoryLinkedServiceDataLakeStorageGen2#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#service_principal_id DataFactoryLinkedServiceDataLakeStorageGen2#service_principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.servicePrincipalKey">ServicePrincipalKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#service_principal_key DataFactoryLinkedServiceDataLakeStorageGen2#service_principal_key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.storageAccountKey">StorageAccountKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#storage_account_key DataFactoryLinkedServiceDataLakeStorageGen2#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.tenant">Tenant</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#tenant DataFactoryLinkedServiceDataLakeStorageGen2#tenant}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.useManagedIdentity">UseManagedIdentity</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#use_managed_identity DataFactoryLinkedServiceDataLakeStorageGen2#use_managed_identity}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.dataFactoryId"></a>

```go
DataFactoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#data_factory_id DataFactoryLinkedServiceDataLakeStorageGen2#data_factory_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#name DataFactoryLinkedServiceDataLakeStorageGen2#name}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#url DataFactoryLinkedServiceDataLakeStorageGen2#url}.

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.additionalProperties"></a>

```go
AdditionalProperties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#additional_properties DataFactoryLinkedServiceDataLakeStorageGen2#additional_properties}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.annotations"></a>

```go
Annotations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#annotations DataFactoryLinkedServiceDataLakeStorageGen2#annotations}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#description DataFactoryLinkedServiceDataLakeStorageGen2#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#id DataFactoryLinkedServiceDataLakeStorageGen2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IntegrationRuntimeName`<sup>Optional</sup> <a name="IntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.integrationRuntimeName"></a>

```go
IntegrationRuntimeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#integration_runtime_name DataFactoryLinkedServiceDataLakeStorageGen2#integration_runtime_name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#parameters DataFactoryLinkedServiceDataLakeStorageGen2#parameters}.

---

##### `ServicePrincipalId`<sup>Optional</sup> <a name="ServicePrincipalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.servicePrincipalId"></a>

```go
ServicePrincipalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#service_principal_id DataFactoryLinkedServiceDataLakeStorageGen2#service_principal_id}.

---

##### `ServicePrincipalKey`<sup>Optional</sup> <a name="ServicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.servicePrincipalKey"></a>

```go
ServicePrincipalKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#service_principal_key DataFactoryLinkedServiceDataLakeStorageGen2#service_principal_key}.

---

##### `StorageAccountKey`<sup>Optional</sup> <a name="StorageAccountKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.storageAccountKey"></a>

```go
StorageAccountKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#storage_account_key DataFactoryLinkedServiceDataLakeStorageGen2#storage_account_key}.

---

##### `Tenant`<sup>Optional</sup> <a name="Tenant" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.tenant"></a>

```go
Tenant *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#tenant DataFactoryLinkedServiceDataLakeStorageGen2#tenant}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.timeouts"></a>

```go
Timeouts DataFactoryLinkedServiceDataLakeStorageGen2Timeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#timeouts DataFactoryLinkedServiceDataLakeStorageGen2#timeouts}

---

##### `UseManagedIdentity`<sup>Optional</sup> <a name="UseManagedIdentity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.useManagedIdentity"></a>

```go
UseManagedIdentity interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#use_managed_identity DataFactoryLinkedServiceDataLakeStorageGen2#use_managed_identity}.

---

### DataFactoryLinkedServiceDataLakeStorageGen2Timeouts <a name="DataFactoryLinkedServiceDataLakeStorageGen2Timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedservicedatalakestoragegen2"

&datafactorylinkedservicedatalakestoragegen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#create DataFactoryLinkedServiceDataLakeStorageGen2#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#delete DataFactoryLinkedServiceDataLakeStorageGen2#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#read DataFactoryLinkedServiceDataLakeStorageGen2#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#update DataFactoryLinkedServiceDataLakeStorageGen2#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#create DataFactoryLinkedServiceDataLakeStorageGen2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#delete DataFactoryLinkedServiceDataLakeStorageGen2#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#read DataFactoryLinkedServiceDataLakeStorageGen2#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#update DataFactoryLinkedServiceDataLakeStorageGen2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference <a name="DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorylinkedservicedatalakestoragegen2"

datafactorylinkedservicedatalakestoragegen2.NewDataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



