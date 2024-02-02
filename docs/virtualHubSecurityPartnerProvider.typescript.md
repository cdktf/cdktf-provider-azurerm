# `virtualHubSecurityPartnerProvider` Submodule <a name="`virtualHubSecurityPartnerProvider` Submodule" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualHubSecurityPartnerProvider <a name="VirtualHubSecurityPartnerProvider" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_hub_security_partner_provider azurerm_virtual_hub_security_partner_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer"></a>

```typescript
import { virtualHubSecurityPartnerProvider } from '@cdktf/provider-azurerm'

new virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider(scope: Construct, id: string, config: VirtualHubSecurityPartnerProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig">VirtualHubSecurityPartnerProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig">VirtualHubSecurityPartnerProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetVirtualHubId">resetVirtualHubId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.putTimeouts"></a>

```typescript
public putTimeouts(value: VirtualHubSecurityPartnerProviderTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts">VirtualHubSecurityPartnerProviderTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVirtualHubId` <a name="resetVirtualHubId" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetVirtualHubId"></a>

```typescript
public resetVirtualHubId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualHubSecurityPartnerProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isConstruct"></a>

```typescript
import { virtualHubSecurityPartnerProvider } from '@cdktf/provider-azurerm'

virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isTerraformElement"></a>

```typescript
import { virtualHubSecurityPartnerProvider } from '@cdktf/provider-azurerm'

virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isTerraformResource"></a>

```typescript
import { virtualHubSecurityPartnerProvider } from '@cdktf/provider-azurerm'

virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.generateConfigForImport"></a>

```typescript
import { virtualHubSecurityPartnerProvider } from '@cdktf/provider-azurerm'

virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VirtualHubSecurityPartnerProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualHubSecurityPartnerProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualHubSecurityPartnerProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_hub_security_partner_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualHubSecurityPartnerProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference">VirtualHubSecurityPartnerProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.securityProviderNameInput">securityProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts">VirtualHubSecurityPartnerProviderTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.virtualHubIdInput">virtualHubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.securityProviderName">securityProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.virtualHubId">virtualHubId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualHubSecurityPartnerProviderTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference">VirtualHubSecurityPartnerProviderTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `securityProviderNameInput`<sup>Optional</sup> <a name="securityProviderNameInput" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.securityProviderNameInput"></a>

```typescript
public readonly securityProviderNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VirtualHubSecurityPartnerProviderTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts">VirtualHubSecurityPartnerProviderTimeouts</a>

---

##### `virtualHubIdInput`<sup>Optional</sup> <a name="virtualHubIdInput" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.virtualHubIdInput"></a>

```typescript
public readonly virtualHubIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `securityProviderName`<sup>Required</sup> <a name="securityProviderName" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.securityProviderName"></a>

```typescript
public readonly securityProviderName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `virtualHubId`<sup>Required</sup> <a name="virtualHubId" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.virtualHubId"></a>

```typescript
public readonly virtualHubId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualHubSecurityPartnerProviderConfig <a name="VirtualHubSecurityPartnerProviderConfig" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.Initializer"></a>

```typescript
import { virtualHubSecurityPartnerProvider } from '@cdktf/provider-azurerm'

const virtualHubSecurityPartnerProviderConfig: virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_hub_security_partner_provider#location VirtualHubSecurityPartnerProvider#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_hub_security_partner_provider#name VirtualHubSecurityPartnerProvider#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_hub_security_partner_provider#resource_group_name VirtualHubSecurityPartnerProvider#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.securityProviderName">securityProviderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_hub_security_partner_provider#security_provider_name VirtualHubSecurityPartnerProvider#security_provider_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_hub_security_partner_provider#id VirtualHubSecurityPartnerProvider#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_hub_security_partner_provider#tags VirtualHubSecurityPartnerProvider#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts">VirtualHubSecurityPartnerProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.virtualHubId">virtualHubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_hub_security_partner_provider#virtual_hub_id VirtualHubSecurityPartnerProvider#virtual_hub_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_hub_security_partner_provider#location VirtualHubSecurityPartnerProvider#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_hub_security_partner_provider#name VirtualHubSecurityPartnerProvider#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_hub_security_partner_provider#resource_group_name VirtualHubSecurityPartnerProvider#resource_group_name}.

---

##### `securityProviderName`<sup>Required</sup> <a name="securityProviderName" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.securityProviderName"></a>

```typescript
public readonly securityProviderName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_hub_security_partner_provider#security_provider_name VirtualHubSecurityPartnerProvider#security_provider_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_hub_security_partner_provider#id VirtualHubSecurityPartnerProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_hub_security_partner_provider#tags VirtualHubSecurityPartnerProvider#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualHubSecurityPartnerProviderTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts">VirtualHubSecurityPartnerProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_hub_security_partner_provider#timeouts VirtualHubSecurityPartnerProvider#timeouts}

---

##### `virtualHubId`<sup>Optional</sup> <a name="virtualHubId" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.virtualHubId"></a>

```typescript
public readonly virtualHubId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_hub_security_partner_provider#virtual_hub_id VirtualHubSecurityPartnerProvider#virtual_hub_id}.

---

### VirtualHubSecurityPartnerProviderTimeouts <a name="VirtualHubSecurityPartnerProviderTimeouts" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.Initializer"></a>

```typescript
import { virtualHubSecurityPartnerProvider } from '@cdktf/provider-azurerm'

const virtualHubSecurityPartnerProviderTimeouts: virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_hub_security_partner_provider#create VirtualHubSecurityPartnerProvider#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_hub_security_partner_provider#delete VirtualHubSecurityPartnerProvider#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_hub_security_partner_provider#read VirtualHubSecurityPartnerProvider#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_hub_security_partner_provider#update VirtualHubSecurityPartnerProvider#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_hub_security_partner_provider#create VirtualHubSecurityPartnerProvider#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_hub_security_partner_provider#delete VirtualHubSecurityPartnerProvider#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_hub_security_partner_provider#read VirtualHubSecurityPartnerProvider#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/virtual_hub_security_partner_provider#update VirtualHubSecurityPartnerProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualHubSecurityPartnerProviderTimeoutsOutputReference <a name="VirtualHubSecurityPartnerProviderTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.Initializer"></a>

```typescript
import { virtualHubSecurityPartnerProvider } from '@cdktf/provider-azurerm'

new virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts">VirtualHubSecurityPartnerProviderTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualHubSecurityPartnerProviderTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts">VirtualHubSecurityPartnerProviderTimeouts</a>

---



