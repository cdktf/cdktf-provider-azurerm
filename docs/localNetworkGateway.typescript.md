# `localNetworkGateway` Submodule <a name="`localNetworkGateway` Submodule" id="@cdktf/provider-azurerm.localNetworkGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LocalNetworkGateway <a name="LocalNetworkGateway" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway azurerm_local_network_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.Initializer"></a>

```typescript
import { localNetworkGateway } from '@cdktf/provider-azurerm'

new localNetworkGateway.LocalNetworkGateway(scope: Construct, id: string, config: LocalNetworkGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig">LocalNetworkGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig">LocalNetworkGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.putBgpSettings">putBgpSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.resetAddressSpace">resetAddressSpace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.resetBgpSettings">resetBgpSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.resetGatewayAddress">resetGatewayAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.resetGatewayFqdn">resetGatewayFqdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBgpSettings` <a name="putBgpSettings" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.putBgpSettings"></a>

```typescript
public putBgpSettings(value: LocalNetworkGatewayBgpSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.putBgpSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettings">LocalNetworkGatewayBgpSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.putTimeouts"></a>

```typescript
public putTimeouts(value: LocalNetworkGatewayTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeouts">LocalNetworkGatewayTimeouts</a>

---

##### `resetAddressSpace` <a name="resetAddressSpace" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.resetAddressSpace"></a>

```typescript
public resetAddressSpace(): void
```

##### `resetBgpSettings` <a name="resetBgpSettings" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.resetBgpSettings"></a>

```typescript
public resetBgpSettings(): void
```

##### `resetGatewayAddress` <a name="resetGatewayAddress" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.resetGatewayAddress"></a>

```typescript
public resetGatewayAddress(): void
```

##### `resetGatewayFqdn` <a name="resetGatewayFqdn" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.resetGatewayFqdn"></a>

```typescript
public resetGatewayFqdn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LocalNetworkGateway resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.isConstruct"></a>

```typescript
import { localNetworkGateway } from '@cdktf/provider-azurerm'

localNetworkGateway.LocalNetworkGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.isTerraformElement"></a>

```typescript
import { localNetworkGateway } from '@cdktf/provider-azurerm'

localNetworkGateway.LocalNetworkGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.isTerraformResource"></a>

```typescript
import { localNetworkGateway } from '@cdktf/provider-azurerm'

localNetworkGateway.LocalNetworkGateway.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.generateConfigForImport"></a>

```typescript
import { localNetworkGateway } from '@cdktf/provider-azurerm'

localNetworkGateway.LocalNetworkGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LocalNetworkGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LocalNetworkGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LocalNetworkGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LocalNetworkGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.bgpSettings">bgpSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference">LocalNetworkGatewayBgpSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference">LocalNetworkGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.addressSpaceInput">addressSpaceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.bgpSettingsInput">bgpSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettings">LocalNetworkGatewayBgpSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.gatewayAddressInput">gatewayAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.gatewayFqdnInput">gatewayFqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeouts">LocalNetworkGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.addressSpace">addressSpace</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.gatewayAddress">gatewayAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.gatewayFqdn">gatewayFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bgpSettings`<sup>Required</sup> <a name="bgpSettings" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.bgpSettings"></a>

```typescript
public readonly bgpSettings: LocalNetworkGatewayBgpSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference">LocalNetworkGatewayBgpSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.timeouts"></a>

```typescript
public readonly timeouts: LocalNetworkGatewayTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference">LocalNetworkGatewayTimeoutsOutputReference</a>

---

##### `addressSpaceInput`<sup>Optional</sup> <a name="addressSpaceInput" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.addressSpaceInput"></a>

```typescript
public readonly addressSpaceInput: string[];
```

- *Type:* string[]

---

##### `bgpSettingsInput`<sup>Optional</sup> <a name="bgpSettingsInput" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.bgpSettingsInput"></a>

```typescript
public readonly bgpSettingsInput: LocalNetworkGatewayBgpSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettings">LocalNetworkGatewayBgpSettings</a>

---

##### `gatewayAddressInput`<sup>Optional</sup> <a name="gatewayAddressInput" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.gatewayAddressInput"></a>

```typescript
public readonly gatewayAddressInput: string;
```

- *Type:* string

---

##### `gatewayFqdnInput`<sup>Optional</sup> <a name="gatewayFqdnInput" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.gatewayFqdnInput"></a>

```typescript
public readonly gatewayFqdnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LocalNetworkGatewayTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeouts">LocalNetworkGatewayTimeouts</a>

---

##### `addressSpace`<sup>Required</sup> <a name="addressSpace" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.addressSpace"></a>

```typescript
public readonly addressSpace: string[];
```

- *Type:* string[]

---

##### `gatewayAddress`<sup>Required</sup> <a name="gatewayAddress" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.gatewayAddress"></a>

```typescript
public readonly gatewayAddress: string;
```

- *Type:* string

---

##### `gatewayFqdn`<sup>Required</sup> <a name="gatewayFqdn" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.gatewayFqdn"></a>

```typescript
public readonly gatewayFqdn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LocalNetworkGatewayBgpSettings <a name="LocalNetworkGatewayBgpSettings" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettings.Initializer"></a>

```typescript
import { localNetworkGateway } from '@cdktf/provider-azurerm'

const localNetworkGatewayBgpSettings: localNetworkGateway.LocalNetworkGatewayBgpSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettings.property.asn">asn</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#asn LocalNetworkGateway#asn}. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettings.property.bgpPeeringAddress">bgpPeeringAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#bgp_peering_address LocalNetworkGateway#bgp_peering_address}. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettings.property.peerWeight">peerWeight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#peer_weight LocalNetworkGateway#peer_weight}. |

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettings.property.asn"></a>

```typescript
public readonly asn: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#asn LocalNetworkGateway#asn}.

---

##### `bgpPeeringAddress`<sup>Required</sup> <a name="bgpPeeringAddress" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettings.property.bgpPeeringAddress"></a>

```typescript
public readonly bgpPeeringAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#bgp_peering_address LocalNetworkGateway#bgp_peering_address}.

---

##### `peerWeight`<sup>Optional</sup> <a name="peerWeight" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettings.property.peerWeight"></a>

```typescript
public readonly peerWeight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#peer_weight LocalNetworkGateway#peer_weight}.

---

### LocalNetworkGatewayConfig <a name="LocalNetworkGatewayConfig" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.Initializer"></a>

```typescript
import { localNetworkGateway } from '@cdktf/provider-azurerm'

const localNetworkGatewayConfig: localNetworkGateway.LocalNetworkGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#location LocalNetworkGateway#location}. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#name LocalNetworkGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#resource_group_name LocalNetworkGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.addressSpace">addressSpace</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#address_space LocalNetworkGateway#address_space}. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.bgpSettings">bgpSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettings">LocalNetworkGatewayBgpSettings</a></code> | bgp_settings block. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.gatewayAddress">gatewayAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#gateway_address LocalNetworkGateway#gateway_address}. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.gatewayFqdn">gatewayFqdn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#gateway_fqdn LocalNetworkGateway#gateway_fqdn}. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#id LocalNetworkGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#tags LocalNetworkGateway#tags}. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeouts">LocalNetworkGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#location LocalNetworkGateway#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#name LocalNetworkGateway#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#resource_group_name LocalNetworkGateway#resource_group_name}.

---

##### `addressSpace`<sup>Optional</sup> <a name="addressSpace" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.addressSpace"></a>

```typescript
public readonly addressSpace: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#address_space LocalNetworkGateway#address_space}.

---

##### `bgpSettings`<sup>Optional</sup> <a name="bgpSettings" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.bgpSettings"></a>

```typescript
public readonly bgpSettings: LocalNetworkGatewayBgpSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettings">LocalNetworkGatewayBgpSettings</a>

bgp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#bgp_settings LocalNetworkGateway#bgp_settings}

---

##### `gatewayAddress`<sup>Optional</sup> <a name="gatewayAddress" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.gatewayAddress"></a>

```typescript
public readonly gatewayAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#gateway_address LocalNetworkGateway#gateway_address}.

---

##### `gatewayFqdn`<sup>Optional</sup> <a name="gatewayFqdn" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.gatewayFqdn"></a>

```typescript
public readonly gatewayFqdn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#gateway_fqdn LocalNetworkGateway#gateway_fqdn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#id LocalNetworkGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#tags LocalNetworkGateway#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LocalNetworkGatewayTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeouts">LocalNetworkGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#timeouts LocalNetworkGateway#timeouts}

---

### LocalNetworkGatewayTimeouts <a name="LocalNetworkGatewayTimeouts" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeouts.Initializer"></a>

```typescript
import { localNetworkGateway } from '@cdktf/provider-azurerm'

const localNetworkGatewayTimeouts: localNetworkGateway.LocalNetworkGatewayTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#create LocalNetworkGateway#create}. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#delete LocalNetworkGateway#delete}. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#read LocalNetworkGateway#read}. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#update LocalNetworkGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#create LocalNetworkGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#delete LocalNetworkGateway#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#read LocalNetworkGateway#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/local_network_gateway#update LocalNetworkGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LocalNetworkGatewayBgpSettingsOutputReference <a name="LocalNetworkGatewayBgpSettingsOutputReference" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.Initializer"></a>

```typescript
import { localNetworkGateway } from '@cdktf/provider-azurerm'

new localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.resetPeerWeight">resetPeerWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeerWeight` <a name="resetPeerWeight" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.resetPeerWeight"></a>

```typescript
public resetPeerWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.property.asnInput">asnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.property.bgpPeeringAddressInput">bgpPeeringAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.property.peerWeightInput">peerWeightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.property.asn">asn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.property.bgpPeeringAddress">bgpPeeringAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.property.peerWeight">peerWeight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettings">LocalNetworkGatewayBgpSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `asnInput`<sup>Optional</sup> <a name="asnInput" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.property.asnInput"></a>

```typescript
public readonly asnInput: number;
```

- *Type:* number

---

##### `bgpPeeringAddressInput`<sup>Optional</sup> <a name="bgpPeeringAddressInput" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.property.bgpPeeringAddressInput"></a>

```typescript
public readonly bgpPeeringAddressInput: string;
```

- *Type:* string

---

##### `peerWeightInput`<sup>Optional</sup> <a name="peerWeightInput" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.property.peerWeightInput"></a>

```typescript
public readonly peerWeightInput: number;
```

- *Type:* number

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.property.asn"></a>

```typescript
public readonly asn: number;
```

- *Type:* number

---

##### `bgpPeeringAddress`<sup>Required</sup> <a name="bgpPeeringAddress" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.property.bgpPeeringAddress"></a>

```typescript
public readonly bgpPeeringAddress: string;
```

- *Type:* string

---

##### `peerWeight`<sup>Required</sup> <a name="peerWeight" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.property.peerWeight"></a>

```typescript
public readonly peerWeight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LocalNetworkGatewayBgpSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayBgpSettings">LocalNetworkGatewayBgpSettings</a>

---


### LocalNetworkGatewayTimeoutsOutputReference <a name="LocalNetworkGatewayTimeoutsOutputReference" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.Initializer"></a>

```typescript
import { localNetworkGateway } from '@cdktf/provider-azurerm'

new localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeouts">LocalNetworkGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LocalNetworkGatewayTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.localNetworkGateway.LocalNetworkGatewayTimeouts">LocalNetworkGatewayTimeouts</a>

---



