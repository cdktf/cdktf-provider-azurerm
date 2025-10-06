# `dataFactoryLinkedServiceCosmosdb` Submodule <a name="`dataFactoryLinkedServiceCosmosdb` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceCosmosdb <a name="DataFactoryLinkedServiceCosmosdb" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb azurerm_data_factory_linked_service_cosmosdb}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceCosmosdb } from '@cdktf/provider-azurerm'

new dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb(scope: Construct, id: string, config: DataFactoryLinkedServiceCosmosdbConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig">DataFactoryLinkedServiceCosmosdbConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig">DataFactoryLinkedServiceCosmosdbConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetAccountEndpoint">resetAccountEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetAccountKey">resetAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetIntegrationRuntimeName">resetIntegrationRuntimeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.putTimeouts"></a>

```typescript
public putTimeouts(value: DataFactoryLinkedServiceCosmosdbTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts">DataFactoryLinkedServiceCosmosdbTimeouts</a>

---

##### `resetAccountEndpoint` <a name="resetAccountEndpoint" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetAccountEndpoint"></a>

```typescript
public resetAccountEndpoint(): void
```

##### `resetAccountKey` <a name="resetAccountKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetAccountKey"></a>

```typescript
public resetAccountKey(): void
```

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetAdditionalProperties"></a>

```typescript
public resetAdditionalProperties(): void
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetConnectionString` <a name="resetConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetConnectionString"></a>

```typescript
public resetConnectionString(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIntegrationRuntimeName` <a name="resetIntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetIntegrationRuntimeName"></a>

```typescript
public resetIntegrationRuntimeName(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryLinkedServiceCosmosdb resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isConstruct"></a>

```typescript
import { dataFactoryLinkedServiceCosmosdb } from '@cdktf/provider-azurerm'

dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isTerraformElement"></a>

```typescript
import { dataFactoryLinkedServiceCosmosdb } from '@cdktf/provider-azurerm'

dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isTerraformResource"></a>

```typescript
import { dataFactoryLinkedServiceCosmosdb } from '@cdktf/provider-azurerm'

dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.generateConfigForImport"></a>

```typescript
import { dataFactoryLinkedServiceCosmosdb } from '@cdktf/provider-azurerm'

dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataFactoryLinkedServiceCosmosdb resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryLinkedServiceCosmosdb to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryLinkedServiceCosmosdb that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryLinkedServiceCosmosdb to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference">DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.accountEndpointInput">accountEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.accountKeyInput">accountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.annotationsInput">annotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.connectionStringInput">connectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.integrationRuntimeNameInput">integrationRuntimeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts">DataFactoryLinkedServiceCosmosdbTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.accountEndpoint">accountEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.accountKey">accountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.annotations">annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.connectionString">connectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.integrationRuntimeName">integrationRuntimeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference">DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference</a>

---

##### `accountEndpointInput`<sup>Optional</sup> <a name="accountEndpointInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.accountEndpointInput"></a>

```typescript
public readonly accountEndpointInput: string;
```

- *Type:* string

---

##### `accountKeyInput`<sup>Optional</sup> <a name="accountKeyInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.accountKeyInput"></a>

```typescript
public readonly accountKeyInput: string;
```

- *Type:* string

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.additionalPropertiesInput"></a>

```typescript
public readonly additionalPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: string[];
```

- *Type:* string[]

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.connectionStringInput"></a>

```typescript
public readonly connectionStringInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.dataFactoryIdInput"></a>

```typescript
public readonly dataFactoryIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationRuntimeNameInput`<sup>Optional</sup> <a name="integrationRuntimeNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.integrationRuntimeNameInput"></a>

```typescript
public readonly integrationRuntimeNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataFactoryLinkedServiceCosmosdbTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts">DataFactoryLinkedServiceCosmosdbTimeouts</a>

---

##### `accountEndpoint`<sup>Required</sup> <a name="accountEndpoint" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.accountEndpoint"></a>

```typescript
public readonly accountEndpoint: string;
```

- *Type:* string

---

##### `accountKey`<sup>Required</sup> <a name="accountKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.accountKey"></a>

```typescript
public readonly accountKey: string;
```

- *Type:* string

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationRuntimeName`<sup>Required</sup> <a name="integrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.integrationRuntimeName"></a>

```typescript
public readonly integrationRuntimeName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceCosmosdbConfig <a name="DataFactoryLinkedServiceCosmosdbConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceCosmosdb } from '@cdktf/provider-azurerm'

const dataFactoryLinkedServiceCosmosdbConfig: dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#data_factory_id DataFactoryLinkedServiceCosmosdb#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#name DataFactoryLinkedServiceCosmosdb#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.accountEndpoint">accountEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#account_endpoint DataFactoryLinkedServiceCosmosdb#account_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.accountKey">accountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#account_key DataFactoryLinkedServiceCosmosdb#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#additional_properties DataFactoryLinkedServiceCosmosdb#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.annotations">annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#annotations DataFactoryLinkedServiceCosmosdb#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.connectionString">connectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#connection_string DataFactoryLinkedServiceCosmosdb#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.database">database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#database DataFactoryLinkedServiceCosmosdb#database}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#description DataFactoryLinkedServiceCosmosdb#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#id DataFactoryLinkedServiceCosmosdb#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.integrationRuntimeName">integrationRuntimeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#integration_runtime_name DataFactoryLinkedServiceCosmosdb#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#parameters DataFactoryLinkedServiceCosmosdb#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts">DataFactoryLinkedServiceCosmosdbTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#data_factory_id DataFactoryLinkedServiceCosmosdb#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#name DataFactoryLinkedServiceCosmosdb#name}.

---

##### `accountEndpoint`<sup>Optional</sup> <a name="accountEndpoint" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.accountEndpoint"></a>

```typescript
public readonly accountEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#account_endpoint DataFactoryLinkedServiceCosmosdb#account_endpoint}.

---

##### `accountKey`<sup>Optional</sup> <a name="accountKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.accountKey"></a>

```typescript
public readonly accountKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#account_key DataFactoryLinkedServiceCosmosdb#account_key}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#additional_properties DataFactoryLinkedServiceCosmosdb#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#annotations DataFactoryLinkedServiceCosmosdb#annotations}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#connection_string DataFactoryLinkedServiceCosmosdb#connection_string}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#database DataFactoryLinkedServiceCosmosdb#database}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#description DataFactoryLinkedServiceCosmosdb#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#id DataFactoryLinkedServiceCosmosdb#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationRuntimeName`<sup>Optional</sup> <a name="integrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.integrationRuntimeName"></a>

```typescript
public readonly integrationRuntimeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#integration_runtime_name DataFactoryLinkedServiceCosmosdb#integration_runtime_name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#parameters DataFactoryLinkedServiceCosmosdb#parameters}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryLinkedServiceCosmosdbTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts">DataFactoryLinkedServiceCosmosdbTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#timeouts DataFactoryLinkedServiceCosmosdb#timeouts}

---

### DataFactoryLinkedServiceCosmosdbTimeouts <a name="DataFactoryLinkedServiceCosmosdbTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceCosmosdb } from '@cdktf/provider-azurerm'

const dataFactoryLinkedServiceCosmosdbTimeouts: dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#create DataFactoryLinkedServiceCosmosdb#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#delete DataFactoryLinkedServiceCosmosdb#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#read DataFactoryLinkedServiceCosmosdb#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#update DataFactoryLinkedServiceCosmosdb#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#create DataFactoryLinkedServiceCosmosdb#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#delete DataFactoryLinkedServiceCosmosdb#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#read DataFactoryLinkedServiceCosmosdb#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_factory_linked_service_cosmosdb#update DataFactoryLinkedServiceCosmosdb#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference <a name="DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceCosmosdb } from '@cdktf/provider-azurerm'

new dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts">DataFactoryLinkedServiceCosmosdbTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryLinkedServiceCosmosdbTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts">DataFactoryLinkedServiceCosmosdbTimeouts</a>

---



