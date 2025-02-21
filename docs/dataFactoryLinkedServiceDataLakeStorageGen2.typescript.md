# `dataFactoryLinkedServiceDataLakeStorageGen2` Submodule <a name="`dataFactoryLinkedServiceDataLakeStorageGen2` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceDataLakeStorageGen2 <a name="DataFactoryLinkedServiceDataLakeStorageGen2" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2 azurerm_data_factory_linked_service_data_lake_storage_gen2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceDataLakeStorageGen2 } from '@cdktf/provider-azurerm'

new dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2(scope: Construct, id: string, config: DataFactoryLinkedServiceDataLakeStorageGen2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config">DataFactoryLinkedServiceDataLakeStorageGen2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config">DataFactoryLinkedServiceDataLakeStorageGen2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetIntegrationRuntimeName">resetIntegrationRuntimeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetServicePrincipalId">resetServicePrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetServicePrincipalKey">resetServicePrincipalKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetStorageAccountKey">resetStorageAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetTenant">resetTenant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetUseManagedIdentity">resetUseManagedIdentity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.putTimeouts"></a>

```typescript
public putTimeouts(value: DataFactoryLinkedServiceDataLakeStorageGen2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a>

---

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetAdditionalProperties"></a>

```typescript
public resetAdditionalProperties(): void
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIntegrationRuntimeName` <a name="resetIntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetIntegrationRuntimeName"></a>

```typescript
public resetIntegrationRuntimeName(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetServicePrincipalId` <a name="resetServicePrincipalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetServicePrincipalId"></a>

```typescript
public resetServicePrincipalId(): void
```

##### `resetServicePrincipalKey` <a name="resetServicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetServicePrincipalKey"></a>

```typescript
public resetServicePrincipalKey(): void
```

##### `resetStorageAccountKey` <a name="resetStorageAccountKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetStorageAccountKey"></a>

```typescript
public resetStorageAccountKey(): void
```

##### `resetTenant` <a name="resetTenant" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetTenant"></a>

```typescript
public resetTenant(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUseManagedIdentity` <a name="resetUseManagedIdentity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetUseManagedIdentity"></a>

```typescript
public resetUseManagedIdentity(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryLinkedServiceDataLakeStorageGen2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isConstruct"></a>

```typescript
import { dataFactoryLinkedServiceDataLakeStorageGen2 } from '@cdktf/provider-azurerm'

dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformElement"></a>

```typescript
import { dataFactoryLinkedServiceDataLakeStorageGen2 } from '@cdktf/provider-azurerm'

dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformResource"></a>

```typescript
import { dataFactoryLinkedServiceDataLakeStorageGen2 } from '@cdktf/provider-azurerm'

dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport"></a>

```typescript
import { dataFactoryLinkedServiceDataLakeStorageGen2 } from '@cdktf/provider-azurerm'

dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataFactoryLinkedServiceDataLakeStorageGen2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryLinkedServiceDataLakeStorageGen2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryLinkedServiceDataLakeStorageGen2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryLinkedServiceDataLakeStorageGen2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference">DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.annotationsInput">annotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.integrationRuntimeNameInput">integrationRuntimeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalIdInput">servicePrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalKeyInput">servicePrincipalKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.storageAccountKeyInput">storageAccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.tenantInput">tenantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.useManagedIdentityInput">useManagedIdentityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.annotations">annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.integrationRuntimeName">integrationRuntimeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalId">servicePrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalKey">servicePrincipalKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.storageAccountKey">storageAccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.tenant">tenant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.useManagedIdentity">useManagedIdentity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference">DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference</a>

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.additionalPropertiesInput"></a>

```typescript
public readonly additionalPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: string[];
```

- *Type:* string[]

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.dataFactoryIdInput"></a>

```typescript
public readonly dataFactoryIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationRuntimeNameInput`<sup>Optional</sup> <a name="integrationRuntimeNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.integrationRuntimeNameInput"></a>

```typescript
public readonly integrationRuntimeNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `servicePrincipalIdInput`<sup>Optional</sup> <a name="servicePrincipalIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalIdInput"></a>

```typescript
public readonly servicePrincipalIdInput: string;
```

- *Type:* string

---

##### `servicePrincipalKeyInput`<sup>Optional</sup> <a name="servicePrincipalKeyInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalKeyInput"></a>

```typescript
public readonly servicePrincipalKeyInput: string;
```

- *Type:* string

---

##### `storageAccountKeyInput`<sup>Optional</sup> <a name="storageAccountKeyInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.storageAccountKeyInput"></a>

```typescript
public readonly storageAccountKeyInput: string;
```

- *Type:* string

---

##### `tenantInput`<sup>Optional</sup> <a name="tenantInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.tenantInput"></a>

```typescript
public readonly tenantInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataFactoryLinkedServiceDataLakeStorageGen2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `useManagedIdentityInput`<sup>Optional</sup> <a name="useManagedIdentityInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.useManagedIdentityInput"></a>

```typescript
public readonly useManagedIdentityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationRuntimeName`<sup>Required</sup> <a name="integrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.integrationRuntimeName"></a>

```typescript
public readonly integrationRuntimeName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* string

---

##### `servicePrincipalKey`<sup>Required</sup> <a name="servicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalKey"></a>

```typescript
public readonly servicePrincipalKey: string;
```

- *Type:* string

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.storageAccountKey"></a>

```typescript
public readonly storageAccountKey: string;
```

- *Type:* string

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.tenant"></a>

```typescript
public readonly tenant: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `useManagedIdentity`<sup>Required</sup> <a name="useManagedIdentity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.useManagedIdentity"></a>

```typescript
public readonly useManagedIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceDataLakeStorageGen2Config <a name="DataFactoryLinkedServiceDataLakeStorageGen2Config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceDataLakeStorageGen2 } from '@cdktf/provider-azurerm'

const dataFactoryLinkedServiceDataLakeStorageGen2Config: dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#data_factory_id DataFactoryLinkedServiceDataLakeStorageGen2#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#name DataFactoryLinkedServiceDataLakeStorageGen2#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#url DataFactoryLinkedServiceDataLakeStorageGen2#url}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#additional_properties DataFactoryLinkedServiceDataLakeStorageGen2#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.annotations">annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#annotations DataFactoryLinkedServiceDataLakeStorageGen2#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#description DataFactoryLinkedServiceDataLakeStorageGen2#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#id DataFactoryLinkedServiceDataLakeStorageGen2#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.integrationRuntimeName">integrationRuntimeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#integration_runtime_name DataFactoryLinkedServiceDataLakeStorageGen2#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#parameters DataFactoryLinkedServiceDataLakeStorageGen2#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.servicePrincipalId">servicePrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#service_principal_id DataFactoryLinkedServiceDataLakeStorageGen2#service_principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.servicePrincipalKey">servicePrincipalKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#service_principal_key DataFactoryLinkedServiceDataLakeStorageGen2#service_principal_key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.storageAccountKey">storageAccountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#storage_account_key DataFactoryLinkedServiceDataLakeStorageGen2#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.tenant">tenant</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#tenant DataFactoryLinkedServiceDataLakeStorageGen2#tenant}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.useManagedIdentity">useManagedIdentity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#use_managed_identity DataFactoryLinkedServiceDataLakeStorageGen2#use_managed_identity}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#data_factory_id DataFactoryLinkedServiceDataLakeStorageGen2#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#name DataFactoryLinkedServiceDataLakeStorageGen2#name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#url DataFactoryLinkedServiceDataLakeStorageGen2#url}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#additional_properties DataFactoryLinkedServiceDataLakeStorageGen2#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#annotations DataFactoryLinkedServiceDataLakeStorageGen2#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#description DataFactoryLinkedServiceDataLakeStorageGen2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#id DataFactoryLinkedServiceDataLakeStorageGen2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationRuntimeName`<sup>Optional</sup> <a name="integrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.integrationRuntimeName"></a>

```typescript
public readonly integrationRuntimeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#integration_runtime_name DataFactoryLinkedServiceDataLakeStorageGen2#integration_runtime_name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#parameters DataFactoryLinkedServiceDataLakeStorageGen2#parameters}.

---

##### `servicePrincipalId`<sup>Optional</sup> <a name="servicePrincipalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#service_principal_id DataFactoryLinkedServiceDataLakeStorageGen2#service_principal_id}.

---

##### `servicePrincipalKey`<sup>Optional</sup> <a name="servicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.servicePrincipalKey"></a>

```typescript
public readonly servicePrincipalKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#service_principal_key DataFactoryLinkedServiceDataLakeStorageGen2#service_principal_key}.

---

##### `storageAccountKey`<sup>Optional</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.storageAccountKey"></a>

```typescript
public readonly storageAccountKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#storage_account_key DataFactoryLinkedServiceDataLakeStorageGen2#storage_account_key}.

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.tenant"></a>

```typescript
public readonly tenant: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#tenant DataFactoryLinkedServiceDataLakeStorageGen2#tenant}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryLinkedServiceDataLakeStorageGen2Timeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#timeouts DataFactoryLinkedServiceDataLakeStorageGen2#timeouts}

---

##### `useManagedIdentity`<sup>Optional</sup> <a name="useManagedIdentity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.useManagedIdentity"></a>

```typescript
public readonly useManagedIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#use_managed_identity DataFactoryLinkedServiceDataLakeStorageGen2#use_managed_identity}.

---

### DataFactoryLinkedServiceDataLakeStorageGen2Timeouts <a name="DataFactoryLinkedServiceDataLakeStorageGen2Timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceDataLakeStorageGen2 } from '@cdktf/provider-azurerm'

const dataFactoryLinkedServiceDataLakeStorageGen2Timeouts: dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#create DataFactoryLinkedServiceDataLakeStorageGen2#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#delete DataFactoryLinkedServiceDataLakeStorageGen2#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#read DataFactoryLinkedServiceDataLakeStorageGen2#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#update DataFactoryLinkedServiceDataLakeStorageGen2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#create DataFactoryLinkedServiceDataLakeStorageGen2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#delete DataFactoryLinkedServiceDataLakeStorageGen2#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#read DataFactoryLinkedServiceDataLakeStorageGen2#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#update DataFactoryLinkedServiceDataLakeStorageGen2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference <a name="DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceDataLakeStorageGen2 } from '@cdktf/provider-azurerm'

new dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryLinkedServiceDataLakeStorageGen2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a>

---



