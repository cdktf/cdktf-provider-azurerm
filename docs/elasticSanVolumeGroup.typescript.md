# `elasticSanVolumeGroup` Submodule <a name="`elasticSanVolumeGroup` Submodule" id="@cdktf/provider-azurerm.elasticSanVolumeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticSanVolumeGroup <a name="ElasticSanVolumeGroup" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group azurerm_elastic_san_volume_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer"></a>

```typescript
import { elasticSanVolumeGroup } from '@cdktf/provider-azurerm'

new elasticSanVolumeGroup.ElasticSanVolumeGroup(scope: Construct, id: string, config: ElasticSanVolumeGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig">ElasticSanVolumeGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig">ElasticSanVolumeGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putEncryption">putEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putNetworkRule">putNetworkRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetNetworkRule">resetNetworkRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetProtocolType">resetProtocolType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryption` <a name="putEncryption" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putEncryption"></a>

```typescript
public putEncryption(value: ElasticSanVolumeGroupEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption">ElasticSanVolumeGroupEncryption</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putIdentity"></a>

```typescript
public putIdentity(value: ElasticSanVolumeGroupIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity">ElasticSanVolumeGroupIdentity</a>

---

##### `putNetworkRule` <a name="putNetworkRule" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putNetworkRule"></a>

```typescript
public putNetworkRule(value: IResolvable | ElasticSanVolumeGroupNetworkRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putNetworkRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule">ElasticSanVolumeGroupNetworkRule</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: ElasticSanVolumeGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts">ElasticSanVolumeGroupTimeouts</a>

---

##### `resetEncryption` <a name="resetEncryption" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetEncryption"></a>

```typescript
public resetEncryption(): void
```

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetEncryptionType"></a>

```typescript
public resetEncryptionType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetNetworkRule` <a name="resetNetworkRule" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetNetworkRule"></a>

```typescript
public resetNetworkRule(): void
```

##### `resetProtocolType` <a name="resetProtocolType" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetProtocolType"></a>

```typescript
public resetProtocolType(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ElasticSanVolumeGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isConstruct"></a>

```typescript
import { elasticSanVolumeGroup } from '@cdktf/provider-azurerm'

elasticSanVolumeGroup.ElasticSanVolumeGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isTerraformElement"></a>

```typescript
import { elasticSanVolumeGroup } from '@cdktf/provider-azurerm'

elasticSanVolumeGroup.ElasticSanVolumeGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isTerraformResource"></a>

```typescript
import { elasticSanVolumeGroup } from '@cdktf/provider-azurerm'

elasticSanVolumeGroup.ElasticSanVolumeGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.generateConfigForImport"></a>

```typescript
import { elasticSanVolumeGroup } from '@cdktf/provider-azurerm'

elasticSanVolumeGroup.ElasticSanVolumeGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ElasticSanVolumeGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticSanVolumeGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticSanVolumeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ElasticSanVolumeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference">ElasticSanVolumeGroupEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference">ElasticSanVolumeGroupIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.networkRule">networkRule</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList">ElasticSanVolumeGroupNetworkRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference">ElasticSanVolumeGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.elasticSanIdInput">elasticSanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.encryptionInput">encryptionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption">ElasticSanVolumeGroupEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity">ElasticSanVolumeGroupIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.networkRuleInput">networkRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule">ElasticSanVolumeGroupNetworkRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.protocolTypeInput">protocolTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts">ElasticSanVolumeGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.elasticSanId">elasticSanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.protocolType">protocolType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.encryption"></a>

```typescript
public readonly encryption: ElasticSanVolumeGroupEncryptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference">ElasticSanVolumeGroupEncryptionOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.identity"></a>

```typescript
public readonly identity: ElasticSanVolumeGroupIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference">ElasticSanVolumeGroupIdentityOutputReference</a>

---

##### `networkRule`<sup>Required</sup> <a name="networkRule" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.networkRule"></a>

```typescript
public readonly networkRule: ElasticSanVolumeGroupNetworkRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList">ElasticSanVolumeGroupNetworkRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.timeouts"></a>

```typescript
public readonly timeouts: ElasticSanVolumeGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference">ElasticSanVolumeGroupTimeoutsOutputReference</a>

---

##### `elasticSanIdInput`<sup>Optional</sup> <a name="elasticSanIdInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.elasticSanIdInput"></a>

```typescript
public readonly elasticSanIdInput: string;
```

- *Type:* string

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.encryptionInput"></a>

```typescript
public readonly encryptionInput: ElasticSanVolumeGroupEncryption;
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption">ElasticSanVolumeGroupEncryption</a>

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.encryptionTypeInput"></a>

```typescript
public readonly encryptionTypeInput: string;
```

- *Type:* string

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.identityInput"></a>

```typescript
public readonly identityInput: ElasticSanVolumeGroupIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity">ElasticSanVolumeGroupIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkRuleInput`<sup>Optional</sup> <a name="networkRuleInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.networkRuleInput"></a>

```typescript
public readonly networkRuleInput: IResolvable | ElasticSanVolumeGroupNetworkRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule">ElasticSanVolumeGroupNetworkRule</a>[]

---

##### `protocolTypeInput`<sup>Optional</sup> <a name="protocolTypeInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.protocolTypeInput"></a>

```typescript
public readonly protocolTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ElasticSanVolumeGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts">ElasticSanVolumeGroupTimeouts</a>

---

##### `elasticSanId`<sup>Required</sup> <a name="elasticSanId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.elasticSanId"></a>

```typescript
public readonly elasticSanId: string;
```

- *Type:* string

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocolType`<sup>Required</sup> <a name="protocolType" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.protocolType"></a>

```typescript
public readonly protocolType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticSanVolumeGroupConfig <a name="ElasticSanVolumeGroupConfig" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.Initializer"></a>

```typescript
import { elasticSanVolumeGroup } from '@cdktf/provider-azurerm'

const elasticSanVolumeGroupConfig: elasticSanVolumeGroup.ElasticSanVolumeGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.elasticSanId">elasticSanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#elastic_san_id ElasticSanVolumeGroup#elastic_san_id}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#name ElasticSanVolumeGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption">ElasticSanVolumeGroupEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.encryptionType">encryptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#encryption_type ElasticSanVolumeGroup#encryption_type}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#id ElasticSanVolumeGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity">ElasticSanVolumeGroupIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.networkRule">networkRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule">ElasticSanVolumeGroupNetworkRule</a>[]</code> | network_rule block. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.protocolType">protocolType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#protocol_type ElasticSanVolumeGroup#protocol_type}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts">ElasticSanVolumeGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `elasticSanId`<sup>Required</sup> <a name="elasticSanId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.elasticSanId"></a>

```typescript
public readonly elasticSanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#elastic_san_id ElasticSanVolumeGroup#elastic_san_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#name ElasticSanVolumeGroup#name}.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.encryption"></a>

```typescript
public readonly encryption: ElasticSanVolumeGroupEncryption;
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption">ElasticSanVolumeGroupEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#encryption ElasticSanVolumeGroup#encryption}

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#encryption_type ElasticSanVolumeGroup#encryption_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#id ElasticSanVolumeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.identity"></a>

```typescript
public readonly identity: ElasticSanVolumeGroupIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity">ElasticSanVolumeGroupIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#identity ElasticSanVolumeGroup#identity}

---

##### `networkRule`<sup>Optional</sup> <a name="networkRule" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.networkRule"></a>

```typescript
public readonly networkRule: IResolvable | ElasticSanVolumeGroupNetworkRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule">ElasticSanVolumeGroupNetworkRule</a>[]

network_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#network_rule ElasticSanVolumeGroup#network_rule}

---

##### `protocolType`<sup>Optional</sup> <a name="protocolType" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.protocolType"></a>

```typescript
public readonly protocolType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#protocol_type ElasticSanVolumeGroup#protocol_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ElasticSanVolumeGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts">ElasticSanVolumeGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#timeouts ElasticSanVolumeGroup#timeouts}

---

### ElasticSanVolumeGroupEncryption <a name="ElasticSanVolumeGroupEncryption" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption.Initializer"></a>

```typescript
import { elasticSanVolumeGroup } from '@cdktf/provider-azurerm'

const elasticSanVolumeGroupEncryption: elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#key_vault_key_id ElasticSanVolumeGroup#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#user_assigned_identity_id ElasticSanVolumeGroup#user_assigned_identity_id}. |

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#key_vault_key_id ElasticSanVolumeGroup#key_vault_key_id}.

---

##### `userAssignedIdentityId`<sup>Optional</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#user_assigned_identity_id ElasticSanVolumeGroup#user_assigned_identity_id}.

---

### ElasticSanVolumeGroupIdentity <a name="ElasticSanVolumeGroupIdentity" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity.Initializer"></a>

```typescript
import { elasticSanVolumeGroup } from '@cdktf/provider-azurerm'

const elasticSanVolumeGroupIdentity: elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#type ElasticSanVolumeGroup#type}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#identity_ids ElasticSanVolumeGroup#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#type ElasticSanVolumeGroup#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#identity_ids ElasticSanVolumeGroup#identity_ids}.

---

### ElasticSanVolumeGroupNetworkRule <a name="ElasticSanVolumeGroupNetworkRule" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule.Initializer"></a>

```typescript
import { elasticSanVolumeGroup } from '@cdktf/provider-azurerm'

const elasticSanVolumeGroupNetworkRule: elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#subnet_id ElasticSanVolumeGroup#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#action ElasticSanVolumeGroup#action}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#subnet_id ElasticSanVolumeGroup#subnet_id}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#action ElasticSanVolumeGroup#action}.

---

### ElasticSanVolumeGroupTimeouts <a name="ElasticSanVolumeGroupTimeouts" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.Initializer"></a>

```typescript
import { elasticSanVolumeGroup } from '@cdktf/provider-azurerm'

const elasticSanVolumeGroupTimeouts: elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#create ElasticSanVolumeGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#delete ElasticSanVolumeGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#read ElasticSanVolumeGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#update ElasticSanVolumeGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#create ElasticSanVolumeGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#delete ElasticSanVolumeGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#read ElasticSanVolumeGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/elastic_san_volume_group#update ElasticSanVolumeGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticSanVolumeGroupEncryptionOutputReference <a name="ElasticSanVolumeGroupEncryptionOutputReference" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.Initializer"></a>

```typescript
import { elasticSanVolumeGroup } from '@cdktf/provider-azurerm'

new elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.resetUserAssignedIdentityId">resetUserAssignedIdentityId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUserAssignedIdentityId` <a name="resetUserAssignedIdentityId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.resetUserAssignedIdentityId"></a>

```typescript
public resetUserAssignedIdentityId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.currentVersionedKeyExpirationTimestamp">currentVersionedKeyExpirationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.currentVersionedKeyId">currentVersionedKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.lastKeyRotationTimestamp">lastKeyRotationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.userAssignedIdentityIdInput">userAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption">ElasticSanVolumeGroupEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currentVersionedKeyExpirationTimestamp`<sup>Required</sup> <a name="currentVersionedKeyExpirationTimestamp" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.currentVersionedKeyExpirationTimestamp"></a>

```typescript
public readonly currentVersionedKeyExpirationTimestamp: string;
```

- *Type:* string

---

##### `currentVersionedKeyId`<sup>Required</sup> <a name="currentVersionedKeyId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.currentVersionedKeyId"></a>

```typescript
public readonly currentVersionedKeyId: string;
```

- *Type:* string

---

##### `lastKeyRotationTimestamp`<sup>Required</sup> <a name="lastKeyRotationTimestamp" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.lastKeyRotationTimestamp"></a>

```typescript
public readonly lastKeyRotationTimestamp: string;
```

- *Type:* string

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.keyVaultKeyIdInput"></a>

```typescript
public readonly keyVaultKeyIdInput: string;
```

- *Type:* string

---

##### `userAssignedIdentityIdInput`<sup>Optional</sup> <a name="userAssignedIdentityIdInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.userAssignedIdentityIdInput"></a>

```typescript
public readonly userAssignedIdentityIdInput: string;
```

- *Type:* string

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticSanVolumeGroupEncryption;
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupEncryption">ElasticSanVolumeGroupEncryption</a>

---


### ElasticSanVolumeGroupIdentityOutputReference <a name="ElasticSanVolumeGroupIdentityOutputReference" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.Initializer"></a>

```typescript
import { elasticSanVolumeGroup } from '@cdktf/provider-azurerm'

new elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity">ElasticSanVolumeGroupIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticSanVolumeGroupIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupIdentity">ElasticSanVolumeGroupIdentity</a>

---


### ElasticSanVolumeGroupNetworkRuleList <a name="ElasticSanVolumeGroupNetworkRuleList" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.Initializer"></a>

```typescript
import { elasticSanVolumeGroup } from '@cdktf/provider-azurerm'

new elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.get"></a>

```typescript
public get(index: number): ElasticSanVolumeGroupNetworkRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule">ElasticSanVolumeGroupNetworkRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticSanVolumeGroupNetworkRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule">ElasticSanVolumeGroupNetworkRule</a>[]

---


### ElasticSanVolumeGroupNetworkRuleOutputReference <a name="ElasticSanVolumeGroupNetworkRuleOutputReference" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer"></a>

```typescript
import { elasticSanVolumeGroup } from '@cdktf/provider-azurerm'

new elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.resetAction">resetAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule">ElasticSanVolumeGroupNetworkRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticSanVolumeGroupNetworkRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupNetworkRule">ElasticSanVolumeGroupNetworkRule</a>

---


### ElasticSanVolumeGroupTimeoutsOutputReference <a name="ElasticSanVolumeGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { elasticSanVolumeGroup } from '@cdktf/provider-azurerm'

new elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts">ElasticSanVolumeGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticSanVolumeGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.elasticSanVolumeGroup.ElasticSanVolumeGroupTimeouts">ElasticSanVolumeGroupTimeouts</a>

---



