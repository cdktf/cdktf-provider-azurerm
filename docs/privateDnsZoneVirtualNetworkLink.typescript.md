# `privateDnsZoneVirtualNetworkLink` Submodule <a name="`privateDnsZoneVirtualNetworkLink` Submodule" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateDnsZoneVirtualNetworkLink <a name="PrivateDnsZoneVirtualNetworkLink" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/private_dns_zone_virtual_network_link azurerm_private_dns_zone_virtual_network_link}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer"></a>

```typescript
import { privateDnsZoneVirtualNetworkLink } from '@cdktf/provider-azurerm'

new privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink(scope: Construct, id: string, config: PrivateDnsZoneVirtualNetworkLinkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig">PrivateDnsZoneVirtualNetworkLinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig">PrivateDnsZoneVirtualNetworkLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetRegistrationEnabled">resetRegistrationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.putTimeouts"></a>

```typescript
public putTimeouts(value: PrivateDnsZoneVirtualNetworkLinkTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegistrationEnabled` <a name="resetRegistrationEnabled" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetRegistrationEnabled"></a>

```typescript
public resetRegistrationEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrivateDnsZoneVirtualNetworkLink resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isConstruct"></a>

```typescript
import { privateDnsZoneVirtualNetworkLink } from '@cdktf/provider-azurerm'

privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isTerraformElement"></a>

```typescript
import { privateDnsZoneVirtualNetworkLink } from '@cdktf/provider-azurerm'

privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isTerraformResource"></a>

```typescript
import { privateDnsZoneVirtualNetworkLink } from '@cdktf/provider-azurerm'

privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.generateConfigForImport"></a>

```typescript
import { privateDnsZoneVirtualNetworkLink } from '@cdktf/provider-azurerm'

privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PrivateDnsZoneVirtualNetworkLink resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivateDnsZoneVirtualNetworkLink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivateDnsZoneVirtualNetworkLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/private_dns_zone_virtual_network_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrivateDnsZoneVirtualNetworkLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference">PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneNameInput">privateDnsZoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.registrationEnabledInput">registrationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneName">privateDnsZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.registrationEnabled">registrationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.timeouts"></a>

```typescript
public readonly timeouts: PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference">PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privateDnsZoneNameInput`<sup>Optional</sup> <a name="privateDnsZoneNameInput" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneNameInput"></a>

```typescript
public readonly privateDnsZoneNameInput: string;
```

- *Type:* string

---

##### `registrationEnabledInput`<sup>Optional</sup> <a name="registrationEnabledInput" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.registrationEnabledInput"></a>

```typescript
public readonly registrationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PrivateDnsZoneVirtualNetworkLinkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a>

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.virtualNetworkIdInput"></a>

```typescript
public readonly virtualNetworkIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateDnsZoneName`<sup>Required</sup> <a name="privateDnsZoneName" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneName"></a>

```typescript
public readonly privateDnsZoneName: string;
```

- *Type:* string

---

##### `registrationEnabled`<sup>Required</sup> <a name="registrationEnabled" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.registrationEnabled"></a>

```typescript
public readonly registrationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateDnsZoneVirtualNetworkLinkConfig <a name="PrivateDnsZoneVirtualNetworkLinkConfig" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.Initializer"></a>

```typescript
import { privateDnsZoneVirtualNetworkLink } from '@cdktf/provider-azurerm'

const privateDnsZoneVirtualNetworkLinkConfig: privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/private_dns_zone_virtual_network_link#name PrivateDnsZoneVirtualNetworkLink#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.privateDnsZoneName">privateDnsZoneName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/private_dns_zone_virtual_network_link#private_dns_zone_name PrivateDnsZoneVirtualNetworkLink#private_dns_zone_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/private_dns_zone_virtual_network_link#resource_group_name PrivateDnsZoneVirtualNetworkLink#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/private_dns_zone_virtual_network_link#virtual_network_id PrivateDnsZoneVirtualNetworkLink#virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/private_dns_zone_virtual_network_link#id PrivateDnsZoneVirtualNetworkLink#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.registrationEnabled">registrationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/private_dns_zone_virtual_network_link#registration_enabled PrivateDnsZoneVirtualNetworkLink#registration_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/private_dns_zone_virtual_network_link#tags PrivateDnsZoneVirtualNetworkLink#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/private_dns_zone_virtual_network_link#name PrivateDnsZoneVirtualNetworkLink#name}.

---

##### `privateDnsZoneName`<sup>Required</sup> <a name="privateDnsZoneName" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.privateDnsZoneName"></a>

```typescript
public readonly privateDnsZoneName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/private_dns_zone_virtual_network_link#private_dns_zone_name PrivateDnsZoneVirtualNetworkLink#private_dns_zone_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/private_dns_zone_virtual_network_link#resource_group_name PrivateDnsZoneVirtualNetworkLink#resource_group_name}.

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/private_dns_zone_virtual_network_link#virtual_network_id PrivateDnsZoneVirtualNetworkLink#virtual_network_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/private_dns_zone_virtual_network_link#id PrivateDnsZoneVirtualNetworkLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `registrationEnabled`<sup>Optional</sup> <a name="registrationEnabled" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.registrationEnabled"></a>

```typescript
public readonly registrationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/private_dns_zone_virtual_network_link#registration_enabled PrivateDnsZoneVirtualNetworkLink#registration_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/private_dns_zone_virtual_network_link#tags PrivateDnsZoneVirtualNetworkLink#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PrivateDnsZoneVirtualNetworkLinkTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/private_dns_zone_virtual_network_link#timeouts PrivateDnsZoneVirtualNetworkLink#timeouts}

---

### PrivateDnsZoneVirtualNetworkLinkTimeouts <a name="PrivateDnsZoneVirtualNetworkLinkTimeouts" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.Initializer"></a>

```typescript
import { privateDnsZoneVirtualNetworkLink } from '@cdktf/provider-azurerm'

const privateDnsZoneVirtualNetworkLinkTimeouts: privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/private_dns_zone_virtual_network_link#create PrivateDnsZoneVirtualNetworkLink#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/private_dns_zone_virtual_network_link#delete PrivateDnsZoneVirtualNetworkLink#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/private_dns_zone_virtual_network_link#read PrivateDnsZoneVirtualNetworkLink#read}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/private_dns_zone_virtual_network_link#update PrivateDnsZoneVirtualNetworkLink#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/private_dns_zone_virtual_network_link#create PrivateDnsZoneVirtualNetworkLink#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/private_dns_zone_virtual_network_link#delete PrivateDnsZoneVirtualNetworkLink#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/private_dns_zone_virtual_network_link#read PrivateDnsZoneVirtualNetworkLink#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/private_dns_zone_virtual_network_link#update PrivateDnsZoneVirtualNetworkLink#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference <a name="PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer"></a>

```typescript
import { privateDnsZoneVirtualNetworkLink } from '@cdktf/provider-azurerm'

new privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivateDnsZoneVirtualNetworkLinkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a>

---



