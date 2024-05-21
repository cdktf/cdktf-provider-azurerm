# `dataFactoryCredentialServicePrincipal` Submodule <a name="`dataFactoryCredentialServicePrincipal` Submodule" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryCredentialServicePrincipal <a name="DataFactoryCredentialServicePrincipal" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/data_factory_credential_service_principal azurerm_data_factory_credential_service_principal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer"></a>

```typescript
import { dataFactoryCredentialServicePrincipal } from '@cdktf/provider-azurerm'

new dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal(scope: Construct, id: string, config: DataFactoryCredentialServicePrincipalConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig">DataFactoryCredentialServicePrincipalConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig">DataFactoryCredentialServicePrincipalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.putServicePrincipalKey">putServicePrincipalKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetServicePrincipalKey">resetServicePrincipalKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putServicePrincipalKey` <a name="putServicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.putServicePrincipalKey"></a>

```typescript
public putServicePrincipalKey(value: DataFactoryCredentialServicePrincipalServicePrincipalKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.putServicePrincipalKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey">DataFactoryCredentialServicePrincipalServicePrincipalKey</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.putTimeouts"></a>

```typescript
public putTimeouts(value: DataFactoryCredentialServicePrincipalTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts">DataFactoryCredentialServicePrincipalTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetId"></a>

```typescript
public resetId(): void
```

##### `resetServicePrincipalKey` <a name="resetServicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetServicePrincipalKey"></a>

```typescript
public resetServicePrincipalKey(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryCredentialServicePrincipal resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isConstruct"></a>

```typescript
import { dataFactoryCredentialServicePrincipal } from '@cdktf/provider-azurerm'

dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isTerraformElement"></a>

```typescript
import { dataFactoryCredentialServicePrincipal } from '@cdktf/provider-azurerm'

dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isTerraformResource"></a>

```typescript
import { dataFactoryCredentialServicePrincipal } from '@cdktf/provider-azurerm'

dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.generateConfigForImport"></a>

```typescript
import { dataFactoryCredentialServicePrincipal } from '@cdktf/provider-azurerm'

dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataFactoryCredentialServicePrincipal resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryCredentialServicePrincipal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryCredentialServicePrincipal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/data_factory_credential_service_principal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryCredentialServicePrincipal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.servicePrincipalKey">servicePrincipalKey</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference">DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference">DataFactoryCredentialServicePrincipalTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.annotationsInput">annotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.servicePrincipalIdInput">servicePrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.servicePrincipalKeyInput">servicePrincipalKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey">DataFactoryCredentialServicePrincipalServicePrincipalKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts">DataFactoryCredentialServicePrincipalTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.annotations">annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.servicePrincipalId">servicePrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `servicePrincipalKey`<sup>Required</sup> <a name="servicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.servicePrincipalKey"></a>

```typescript
public readonly servicePrincipalKey: DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference">DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryCredentialServicePrincipalTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference">DataFactoryCredentialServicePrincipalTimeoutsOutputReference</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: string[];
```

- *Type:* string[]

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.dataFactoryIdInput"></a>

```typescript
public readonly dataFactoryIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `servicePrincipalIdInput`<sup>Optional</sup> <a name="servicePrincipalIdInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.servicePrincipalIdInput"></a>

```typescript
public readonly servicePrincipalIdInput: string;
```

- *Type:* string

---

##### `servicePrincipalKeyInput`<sup>Optional</sup> <a name="servicePrincipalKeyInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.servicePrincipalKeyInput"></a>

```typescript
public readonly servicePrincipalKeyInput: DataFactoryCredentialServicePrincipalServicePrincipalKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey">DataFactoryCredentialServicePrincipalServicePrincipalKey</a>

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataFactoryCredentialServicePrincipalTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts">DataFactoryCredentialServicePrincipalTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipal.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryCredentialServicePrincipalConfig <a name="DataFactoryCredentialServicePrincipalConfig" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.Initializer"></a>

```typescript
import { dataFactoryCredentialServicePrincipal } from '@cdktf/provider-azurerm'

const dataFactoryCredentialServicePrincipalConfig: dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | The resource ID of the parent Data Factory. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.name">name</a></code> | <code>string</code> | The desired name of the credential resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.servicePrincipalId">servicePrincipalId</a></code> | <code>string</code> | The Client ID of the Service Principal. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.tenantId">tenantId</a></code> | <code>string</code> | The Tenant ID of the Service Principal. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.annotations">annotations</a></code> | <code>string[]</code> | (Optional) List of string annotations. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.description">description</a></code> | <code>string</code> | (Optional) Short text description. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/data_factory_credential_service_principal#id DataFactoryCredentialServicePrincipal#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.servicePrincipalKey">servicePrincipalKey</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey">DataFactoryCredentialServicePrincipalServicePrincipalKey</a></code> | service_principal_key block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts">DataFactoryCredentialServicePrincipalTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

The resource ID of the parent Data Factory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/data_factory_credential_service_principal#data_factory_id DataFactoryCredentialServicePrincipal#data_factory_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The desired name of the credential resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/data_factory_credential_service_principal#name DataFactoryCredentialServicePrincipal#name}

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* string

The Client ID of the Service Principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/data_factory_credential_service_principal#service_principal_id DataFactoryCredentialServicePrincipal#service_principal_id}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

The Tenant ID of the Service Principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/data_factory_credential_service_principal#tenant_id DataFactoryCredentialServicePrincipal#tenant_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

(Optional) List of string annotations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/data_factory_credential_service_principal#annotations DataFactoryCredentialServicePrincipal#annotations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

(Optional) Short text description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/data_factory_credential_service_principal#description DataFactoryCredentialServicePrincipal#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/data_factory_credential_service_principal#id DataFactoryCredentialServicePrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `servicePrincipalKey`<sup>Optional</sup> <a name="servicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.servicePrincipalKey"></a>

```typescript
public readonly servicePrincipalKey: DataFactoryCredentialServicePrincipalServicePrincipalKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey">DataFactoryCredentialServicePrincipalServicePrincipalKey</a>

service_principal_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/data_factory_credential_service_principal#service_principal_key DataFactoryCredentialServicePrincipal#service_principal_key}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryCredentialServicePrincipalTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts">DataFactoryCredentialServicePrincipalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/data_factory_credential_service_principal#timeouts DataFactoryCredentialServicePrincipal#timeouts}

---

### DataFactoryCredentialServicePrincipalServicePrincipalKey <a name="DataFactoryCredentialServicePrincipalServicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey.Initializer"></a>

```typescript
import { dataFactoryCredentialServicePrincipal } from '@cdktf/provider-azurerm'

const dataFactoryCredentialServicePrincipalServicePrincipalKey: dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey.property.linkedServiceName">linkedServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/data_factory_credential_service_principal#linked_service_name DataFactoryCredentialServicePrincipal#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey.property.secretName">secretName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/data_factory_credential_service_principal#secret_name DataFactoryCredentialServicePrincipal#secret_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey.property.secretVersion">secretVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/data_factory_credential_service_principal#secret_version DataFactoryCredentialServicePrincipal#secret_version}. |

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey.property.linkedServiceName"></a>

```typescript
public readonly linkedServiceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/data_factory_credential_service_principal#linked_service_name DataFactoryCredentialServicePrincipal#linked_service_name}.

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/data_factory_credential_service_principal#secret_name DataFactoryCredentialServicePrincipal#secret_name}.

---

##### `secretVersion`<sup>Optional</sup> <a name="secretVersion" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/data_factory_credential_service_principal#secret_version DataFactoryCredentialServicePrincipal#secret_version}.

---

### DataFactoryCredentialServicePrincipalTimeouts <a name="DataFactoryCredentialServicePrincipalTimeouts" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.Initializer"></a>

```typescript
import { dataFactoryCredentialServicePrincipal } from '@cdktf/provider-azurerm'

const dataFactoryCredentialServicePrincipalTimeouts: dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/data_factory_credential_service_principal#create DataFactoryCredentialServicePrincipal#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/data_factory_credential_service_principal#delete DataFactoryCredentialServicePrincipal#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/data_factory_credential_service_principal#read DataFactoryCredentialServicePrincipal#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/data_factory_credential_service_principal#update DataFactoryCredentialServicePrincipal#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/data_factory_credential_service_principal#create DataFactoryCredentialServicePrincipal#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/data_factory_credential_service_principal#delete DataFactoryCredentialServicePrincipal#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/data_factory_credential_service_principal#read DataFactoryCredentialServicePrincipal#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/data_factory_credential_service_principal#update DataFactoryCredentialServicePrincipal#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference <a name="DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.Initializer"></a>

```typescript
import { dataFactoryCredentialServicePrincipal } from '@cdktf/provider-azurerm'

new dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.resetSecretVersion">resetSecretVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretVersion` <a name="resetSecretVersion" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.resetSecretVersion"></a>

```typescript
public resetSecretVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.linkedServiceNameInput">linkedServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.secretVersionInput">secretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.linkedServiceName">linkedServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.secretVersion">secretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey">DataFactoryCredentialServicePrincipalServicePrincipalKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `linkedServiceNameInput`<sup>Optional</sup> <a name="linkedServiceNameInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.linkedServiceNameInput"></a>

```typescript
public readonly linkedServiceNameInput: string;
```

- *Type:* string

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.secretNameInput"></a>

```typescript
public readonly secretNameInput: string;
```

- *Type:* string

---

##### `secretVersionInput`<sup>Optional</sup> <a name="secretVersionInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.secretVersionInput"></a>

```typescript
public readonly secretVersionInput: string;
```

- *Type:* string

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.linkedServiceName"></a>

```typescript
public readonly linkedServiceName: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataFactoryCredentialServicePrincipalServicePrincipalKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalServicePrincipalKey">DataFactoryCredentialServicePrincipalServicePrincipalKey</a>

---


### DataFactoryCredentialServicePrincipalTimeoutsOutputReference <a name="DataFactoryCredentialServicePrincipalTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataFactoryCredentialServicePrincipal } from '@cdktf/provider-azurerm'

new dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts">DataFactoryCredentialServicePrincipalTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryCredentialServicePrincipalTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryCredentialServicePrincipal.DataFactoryCredentialServicePrincipalTimeouts">DataFactoryCredentialServicePrincipalTimeouts</a>

---



