# `iothubEndpointCosmosdbAccount` Submodule <a name="`iothubEndpointCosmosdbAccount` Submodule" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IothubEndpointCosmosdbAccount <a name="IothubEndpointCosmosdbAccount" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account azurerm_iothub_endpoint_cosmosdb_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer"></a>

```typescript
import { iothubEndpointCosmosdbAccount } from '@cdktf/provider-azurerm'

new iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount(scope: Construct, id: string, config: IothubEndpointCosmosdbAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig">IothubEndpointCosmosdbAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig">IothubEndpointCosmosdbAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetAuthenticationType">resetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetIdentityId">resetIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetPartitionKeyName">resetPartitionKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetPartitionKeyTemplate">resetPartitionKeyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetPrimaryKey">resetPrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetSecondaryKey">resetSecondaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.putTimeouts"></a>

```typescript
public putTimeouts(value: IothubEndpointCosmosdbAccountTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts">IothubEndpointCosmosdbAccountTimeouts</a>

---

##### `resetAuthenticationType` <a name="resetAuthenticationType" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetAuthenticationType"></a>

```typescript
public resetAuthenticationType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentityId` <a name="resetIdentityId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetIdentityId"></a>

```typescript
public resetIdentityId(): void
```

##### `resetPartitionKeyName` <a name="resetPartitionKeyName" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetPartitionKeyName"></a>

```typescript
public resetPartitionKeyName(): void
```

##### `resetPartitionKeyTemplate` <a name="resetPartitionKeyTemplate" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetPartitionKeyTemplate"></a>

```typescript
public resetPartitionKeyTemplate(): void
```

##### `resetPrimaryKey` <a name="resetPrimaryKey" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetPrimaryKey"></a>

```typescript
public resetPrimaryKey(): void
```

##### `resetSecondaryKey` <a name="resetSecondaryKey" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetSecondaryKey"></a>

```typescript
public resetSecondaryKey(): void
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetSubscriptionId"></a>

```typescript
public resetSubscriptionId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IothubEndpointCosmosdbAccount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.isConstruct"></a>

```typescript
import { iothubEndpointCosmosdbAccount } from '@cdktf/provider-azurerm'

iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.isTerraformElement"></a>

```typescript
import { iothubEndpointCosmosdbAccount } from '@cdktf/provider-azurerm'

iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.isTerraformResource"></a>

```typescript
import { iothubEndpointCosmosdbAccount } from '@cdktf/provider-azurerm'

iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.generateConfigForImport"></a>

```typescript
import { iothubEndpointCosmosdbAccount } from '@cdktf/provider-azurerm'

iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IothubEndpointCosmosdbAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IothubEndpointCosmosdbAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IothubEndpointCosmosdbAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IothubEndpointCosmosdbAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference">IothubEndpointCosmosdbAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.endpointUriInput">endpointUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.identityIdInput">identityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.iothubIdInput">iothubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.partitionKeyNameInput">partitionKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.partitionKeyTemplateInput">partitionKeyTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.primaryKeyInput">primaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.secondaryKeyInput">secondaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts">IothubEndpointCosmosdbAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.endpointUri">endpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.identityId">identityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.iothubId">iothubId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.partitionKeyName">partitionKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.partitionKeyTemplate">partitionKeyTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.primaryKey">primaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.secondaryKey">secondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.timeouts"></a>

```typescript
public readonly timeouts: IothubEndpointCosmosdbAccountTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference">IothubEndpointCosmosdbAccountTimeoutsOutputReference</a>

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.authenticationTypeInput"></a>

```typescript
public readonly authenticationTypeInput: string;
```

- *Type:* string

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `endpointUriInput`<sup>Optional</sup> <a name="endpointUriInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.endpointUriInput"></a>

```typescript
public readonly endpointUriInput: string;
```

- *Type:* string

---

##### `identityIdInput`<sup>Optional</sup> <a name="identityIdInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.identityIdInput"></a>

```typescript
public readonly identityIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `iothubIdInput`<sup>Optional</sup> <a name="iothubIdInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.iothubIdInput"></a>

```typescript
public readonly iothubIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `partitionKeyNameInput`<sup>Optional</sup> <a name="partitionKeyNameInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.partitionKeyNameInput"></a>

```typescript
public readonly partitionKeyNameInput: string;
```

- *Type:* string

---

##### `partitionKeyTemplateInput`<sup>Optional</sup> <a name="partitionKeyTemplateInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.partitionKeyTemplateInput"></a>

```typescript
public readonly partitionKeyTemplateInput: string;
```

- *Type:* string

---

##### `primaryKeyInput`<sup>Optional</sup> <a name="primaryKeyInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.primaryKeyInput"></a>

```typescript
public readonly primaryKeyInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `secondaryKeyInput`<sup>Optional</sup> <a name="secondaryKeyInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.secondaryKeyInput"></a>

```typescript
public readonly secondaryKeyInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IothubEndpointCosmosdbAccountTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts">IothubEndpointCosmosdbAccountTimeouts</a>

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.endpointUri"></a>

```typescript
public readonly endpointUri: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityId`<sup>Required</sup> <a name="identityId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.identityId"></a>

```typescript
public readonly identityId: string;
```

- *Type:* string

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.iothubId"></a>

```typescript
public readonly iothubId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partitionKeyName`<sup>Required</sup> <a name="partitionKeyName" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.partitionKeyName"></a>

```typescript
public readonly partitionKeyName: string;
```

- *Type:* string

---

##### `partitionKeyTemplate`<sup>Required</sup> <a name="partitionKeyTemplate" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.partitionKeyTemplate"></a>

```typescript
public readonly partitionKeyTemplate: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `secondaryKey`<sup>Required</sup> <a name="secondaryKey" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.secondaryKey"></a>

```typescript
public readonly secondaryKey: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IothubEndpointCosmosdbAccountConfig <a name="IothubEndpointCosmosdbAccountConfig" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.Initializer"></a>

```typescript
import { iothubEndpointCosmosdbAccount } from '@cdktf/provider-azurerm'

const iothubEndpointCosmosdbAccountConfig: iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.containerName">containerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#container_name IothubEndpointCosmosdbAccount#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#database_name IothubEndpointCosmosdbAccount#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.endpointUri">endpointUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#endpoint_uri IothubEndpointCosmosdbAccount#endpoint_uri}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.iothubId">iothubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#iothub_id IothubEndpointCosmosdbAccount#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#name IothubEndpointCosmosdbAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#resource_group_name IothubEndpointCosmosdbAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.authenticationType">authenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#authentication_type IothubEndpointCosmosdbAccount#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#id IothubEndpointCosmosdbAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.identityId">identityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#identity_id IothubEndpointCosmosdbAccount#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.partitionKeyName">partitionKeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#partition_key_name IothubEndpointCosmosdbAccount#partition_key_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.partitionKeyTemplate">partitionKeyTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#partition_key_template IothubEndpointCosmosdbAccount#partition_key_template}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.primaryKey">primaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#primary_key IothubEndpointCosmosdbAccount#primary_key}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.secondaryKey">secondaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#secondary_key IothubEndpointCosmosdbAccount#secondary_key}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#subscription_id IothubEndpointCosmosdbAccount#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts">IothubEndpointCosmosdbAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#container_name IothubEndpointCosmosdbAccount#container_name}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#database_name IothubEndpointCosmosdbAccount#database_name}.

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.endpointUri"></a>

```typescript
public readonly endpointUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#endpoint_uri IothubEndpointCosmosdbAccount#endpoint_uri}.

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.iothubId"></a>

```typescript
public readonly iothubId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#iothub_id IothubEndpointCosmosdbAccount#iothub_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#name IothubEndpointCosmosdbAccount#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#resource_group_name IothubEndpointCosmosdbAccount#resource_group_name}.

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#authentication_type IothubEndpointCosmosdbAccount#authentication_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#id IothubEndpointCosmosdbAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityId`<sup>Optional</sup> <a name="identityId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.identityId"></a>

```typescript
public readonly identityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#identity_id IothubEndpointCosmosdbAccount#identity_id}.

---

##### `partitionKeyName`<sup>Optional</sup> <a name="partitionKeyName" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.partitionKeyName"></a>

```typescript
public readonly partitionKeyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#partition_key_name IothubEndpointCosmosdbAccount#partition_key_name}.

---

##### `partitionKeyTemplate`<sup>Optional</sup> <a name="partitionKeyTemplate" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.partitionKeyTemplate"></a>

```typescript
public readonly partitionKeyTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#partition_key_template IothubEndpointCosmosdbAccount#partition_key_template}.

---

##### `primaryKey`<sup>Optional</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#primary_key IothubEndpointCosmosdbAccount#primary_key}.

---

##### `secondaryKey`<sup>Optional</sup> <a name="secondaryKey" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.secondaryKey"></a>

```typescript
public readonly secondaryKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#secondary_key IothubEndpointCosmosdbAccount#secondary_key}.

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#subscription_id IothubEndpointCosmosdbAccount#subscription_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IothubEndpointCosmosdbAccountTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts">IothubEndpointCosmosdbAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#timeouts IothubEndpointCosmosdbAccount#timeouts}

---

### IothubEndpointCosmosdbAccountTimeouts <a name="IothubEndpointCosmosdbAccountTimeouts" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts.Initializer"></a>

```typescript
import { iothubEndpointCosmosdbAccount } from '@cdktf/provider-azurerm'

const iothubEndpointCosmosdbAccountTimeouts: iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#create IothubEndpointCosmosdbAccount#create}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#delete IothubEndpointCosmosdbAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#read IothubEndpointCosmosdbAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#update IothubEndpointCosmosdbAccount#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#create IothubEndpointCosmosdbAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#delete IothubEndpointCosmosdbAccount#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#read IothubEndpointCosmosdbAccount#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/iothub_endpoint_cosmosdb_account#update IothubEndpointCosmosdbAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IothubEndpointCosmosdbAccountTimeoutsOutputReference <a name="IothubEndpointCosmosdbAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.Initializer"></a>

```typescript
import { iothubEndpointCosmosdbAccount } from '@cdktf/provider-azurerm'

new iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts">IothubEndpointCosmosdbAccountTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IothubEndpointCosmosdbAccountTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts">IothubEndpointCosmosdbAccountTimeouts</a>

---



