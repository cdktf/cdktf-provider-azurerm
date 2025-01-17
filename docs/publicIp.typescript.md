# `publicIp` Submodule <a name="`publicIp` Submodule" id="@cdktf/provider-azurerm.publicIp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PublicIp <a name="PublicIp" id="@cdktf/provider-azurerm.publicIp.PublicIp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip azurerm_public_ip}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.publicIp.PublicIp.Initializer"></a>

```typescript
import { publicIp } from '@cdktf/provider-azurerm'

new publicIp.PublicIp(scope: Construct, id: string, config: PublicIpConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig">PublicIpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.publicIp.PublicIp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.publicIp.PublicIp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.publicIp.PublicIp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig">PublicIpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.resetDdosProtectionMode">resetDdosProtectionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.resetDdosProtectionPlanId">resetDdosProtectionPlanId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.resetDomainNameLabel">resetDomainNameLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.resetDomainNameLabelScope">resetDomainNameLabelScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.resetEdgeZone">resetEdgeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.resetIdleTimeoutInMinutes">resetIdleTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.resetIpTags">resetIpTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.resetPublicIpPrefixId">resetPublicIpPrefixId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.resetReverseFqdn">resetReverseFqdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.resetSku">resetSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.resetSkuTier">resetSkuTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.resetZones">resetZones</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.publicIp.PublicIp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.publicIp.PublicIp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.publicIp.PublicIp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.publicIp.PublicIp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.publicIp.PublicIp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.publicIp.PublicIp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.publicIp.PublicIp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.publicIp.PublicIp.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.publicIp.PublicIp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.publicIp.PublicIp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.publicIp.PublicIp.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.publicIp.PublicIp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.publicIp.PublicIp.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.publicIp.PublicIp.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.publicIp.PublicIp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.publicIp.PublicIp.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.publicIp.PublicIp.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.publicIp.PublicIp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.publicIp.PublicIp.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.publicIp.PublicIp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.publicIp.PublicIp.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.publicIp.PublicIp.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.publicIp.PublicIp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.publicIp.PublicIp.putTimeouts"></a>

```typescript
public putTimeouts(value: PublicIpTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.publicIp.PublicIp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeouts">PublicIpTimeouts</a>

---

##### `resetDdosProtectionMode` <a name="resetDdosProtectionMode" id="@cdktf/provider-azurerm.publicIp.PublicIp.resetDdosProtectionMode"></a>

```typescript
public resetDdosProtectionMode(): void
```

##### `resetDdosProtectionPlanId` <a name="resetDdosProtectionPlanId" id="@cdktf/provider-azurerm.publicIp.PublicIp.resetDdosProtectionPlanId"></a>

```typescript
public resetDdosProtectionPlanId(): void
```

##### `resetDomainNameLabel` <a name="resetDomainNameLabel" id="@cdktf/provider-azurerm.publicIp.PublicIp.resetDomainNameLabel"></a>

```typescript
public resetDomainNameLabel(): void
```

##### `resetDomainNameLabelScope` <a name="resetDomainNameLabelScope" id="@cdktf/provider-azurerm.publicIp.PublicIp.resetDomainNameLabelScope"></a>

```typescript
public resetDomainNameLabelScope(): void
```

##### `resetEdgeZone` <a name="resetEdgeZone" id="@cdktf/provider-azurerm.publicIp.PublicIp.resetEdgeZone"></a>

```typescript
public resetEdgeZone(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.publicIp.PublicIp.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdleTimeoutInMinutes` <a name="resetIdleTimeoutInMinutes" id="@cdktf/provider-azurerm.publicIp.PublicIp.resetIdleTimeoutInMinutes"></a>

```typescript
public resetIdleTimeoutInMinutes(): void
```

##### `resetIpTags` <a name="resetIpTags" id="@cdktf/provider-azurerm.publicIp.PublicIp.resetIpTags"></a>

```typescript
public resetIpTags(): void
```

##### `resetIpVersion` <a name="resetIpVersion" id="@cdktf/provider-azurerm.publicIp.PublicIp.resetIpVersion"></a>

```typescript
public resetIpVersion(): void
```

##### `resetPublicIpPrefixId` <a name="resetPublicIpPrefixId" id="@cdktf/provider-azurerm.publicIp.PublicIp.resetPublicIpPrefixId"></a>

```typescript
public resetPublicIpPrefixId(): void
```

##### `resetReverseFqdn` <a name="resetReverseFqdn" id="@cdktf/provider-azurerm.publicIp.PublicIp.resetReverseFqdn"></a>

```typescript
public resetReverseFqdn(): void
```

##### `resetSku` <a name="resetSku" id="@cdktf/provider-azurerm.publicIp.PublicIp.resetSku"></a>

```typescript
public resetSku(): void
```

##### `resetSkuTier` <a name="resetSkuTier" id="@cdktf/provider-azurerm.publicIp.PublicIp.resetSkuTier"></a>

```typescript
public resetSkuTier(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.publicIp.PublicIp.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.publicIp.PublicIp.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZones` <a name="resetZones" id="@cdktf/provider-azurerm.publicIp.PublicIp.resetZones"></a>

```typescript
public resetZones(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PublicIp resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.publicIp.PublicIp.isConstruct"></a>

```typescript
import { publicIp } from '@cdktf/provider-azurerm'

publicIp.PublicIp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.publicIp.PublicIp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.publicIp.PublicIp.isTerraformElement"></a>

```typescript
import { publicIp } from '@cdktf/provider-azurerm'

publicIp.PublicIp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.publicIp.PublicIp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.publicIp.PublicIp.isTerraformResource"></a>

```typescript
import { publicIp } from '@cdktf/provider-azurerm'

publicIp.PublicIp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.publicIp.PublicIp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.publicIp.PublicIp.generateConfigForImport"></a>

```typescript
import { publicIp } from '@cdktf/provider-azurerm'

publicIp.PublicIp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PublicIp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.publicIp.PublicIp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.publicIp.PublicIp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PublicIp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.publicIp.PublicIp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PublicIp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.publicIp.PublicIp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PublicIp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference">PublicIpTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.allocationMethodInput">allocationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.ddosProtectionModeInput">ddosProtectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.ddosProtectionPlanIdInput">ddosProtectionPlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.domainNameLabelInput">domainNameLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.domainNameLabelScopeInput">domainNameLabelScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.edgeZoneInput">edgeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.idleTimeoutInMinutesInput">idleTimeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.ipTagsInput">ipTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.ipVersionInput">ipVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.publicIpPrefixIdInput">publicIpPrefixIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.reverseFqdnInput">reverseFqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.skuInput">skuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.skuTierInput">skuTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeouts">PublicIpTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.zonesInput">zonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.allocationMethod">allocationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.ddosProtectionMode">ddosProtectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.ddosProtectionPlanId">ddosProtectionPlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.domainNameLabel">domainNameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.domainNameLabelScope">domainNameLabelScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.edgeZone">edgeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.ipTags">ipTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.ipVersion">ipVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.publicIpPrefixId">publicIpPrefixId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.reverseFqdn">reverseFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.sku">sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.skuTier">skuTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.timeouts"></a>

```typescript
public readonly timeouts: PublicIpTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference">PublicIpTimeoutsOutputReference</a>

---

##### `allocationMethodInput`<sup>Optional</sup> <a name="allocationMethodInput" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.allocationMethodInput"></a>

```typescript
public readonly allocationMethodInput: string;
```

- *Type:* string

---

##### `ddosProtectionModeInput`<sup>Optional</sup> <a name="ddosProtectionModeInput" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.ddosProtectionModeInput"></a>

```typescript
public readonly ddosProtectionModeInput: string;
```

- *Type:* string

---

##### `ddosProtectionPlanIdInput`<sup>Optional</sup> <a name="ddosProtectionPlanIdInput" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.ddosProtectionPlanIdInput"></a>

```typescript
public readonly ddosProtectionPlanIdInput: string;
```

- *Type:* string

---

##### `domainNameLabelInput`<sup>Optional</sup> <a name="domainNameLabelInput" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.domainNameLabelInput"></a>

```typescript
public readonly domainNameLabelInput: string;
```

- *Type:* string

---

##### `domainNameLabelScopeInput`<sup>Optional</sup> <a name="domainNameLabelScopeInput" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.domainNameLabelScopeInput"></a>

```typescript
public readonly domainNameLabelScopeInput: string;
```

- *Type:* string

---

##### `edgeZoneInput`<sup>Optional</sup> <a name="edgeZoneInput" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.edgeZoneInput"></a>

```typescript
public readonly edgeZoneInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idleTimeoutInMinutesInput`<sup>Optional</sup> <a name="idleTimeoutInMinutesInput" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.idleTimeoutInMinutesInput"></a>

```typescript
public readonly idleTimeoutInMinutesInput: number;
```

- *Type:* number

---

##### `ipTagsInput`<sup>Optional</sup> <a name="ipTagsInput" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.ipTagsInput"></a>

```typescript
public readonly ipTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.ipVersionInput"></a>

```typescript
public readonly ipVersionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `publicIpPrefixIdInput`<sup>Optional</sup> <a name="publicIpPrefixIdInput" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.publicIpPrefixIdInput"></a>

```typescript
public readonly publicIpPrefixIdInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `reverseFqdnInput`<sup>Optional</sup> <a name="reverseFqdnInput" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.reverseFqdnInput"></a>

```typescript
public readonly reverseFqdnInput: string;
```

- *Type:* string

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.skuInput"></a>

```typescript
public readonly skuInput: string;
```

- *Type:* string

---

##### `skuTierInput`<sup>Optional</sup> <a name="skuTierInput" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.skuTierInput"></a>

```typescript
public readonly skuTierInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PublicIpTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeouts">PublicIpTimeouts</a>

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.zonesInput"></a>

```typescript
public readonly zonesInput: string[];
```

- *Type:* string[]

---

##### `allocationMethod`<sup>Required</sup> <a name="allocationMethod" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.allocationMethod"></a>

```typescript
public readonly allocationMethod: string;
```

- *Type:* string

---

##### `ddosProtectionMode`<sup>Required</sup> <a name="ddosProtectionMode" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.ddosProtectionMode"></a>

```typescript
public readonly ddosProtectionMode: string;
```

- *Type:* string

---

##### `ddosProtectionPlanId`<sup>Required</sup> <a name="ddosProtectionPlanId" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.ddosProtectionPlanId"></a>

```typescript
public readonly ddosProtectionPlanId: string;
```

- *Type:* string

---

##### `domainNameLabel`<sup>Required</sup> <a name="domainNameLabel" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.domainNameLabel"></a>

```typescript
public readonly domainNameLabel: string;
```

- *Type:* string

---

##### `domainNameLabelScope`<sup>Required</sup> <a name="domainNameLabelScope" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.domainNameLabelScope"></a>

```typescript
public readonly domainNameLabelScope: string;
```

- *Type:* string

---

##### `edgeZone`<sup>Required</sup> <a name="edgeZone" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.edgeZone"></a>

```typescript
public readonly edgeZone: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idleTimeoutInMinutes`<sup>Required</sup> <a name="idleTimeoutInMinutes" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.idleTimeoutInMinutes"></a>

```typescript
public readonly idleTimeoutInMinutes: number;
```

- *Type:* number

---

##### `ipTags`<sup>Required</sup> <a name="ipTags" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.ipTags"></a>

```typescript
public readonly ipTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publicIpPrefixId`<sup>Required</sup> <a name="publicIpPrefixId" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.publicIpPrefixId"></a>

```typescript
public readonly publicIpPrefixId: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `reverseFqdn`<sup>Required</sup> <a name="reverseFqdn" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.reverseFqdn"></a>

```typescript
public readonly reverseFqdn: string;
```

- *Type:* string

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

---

##### `skuTier`<sup>Required</sup> <a name="skuTier" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.skuTier"></a>

```typescript
public readonly skuTier: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.publicIp.PublicIp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PublicIpConfig <a name="PublicIpConfig" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.Initializer"></a>

```typescript
import { publicIp } from '@cdktf/provider-azurerm'

const publicIpConfig: publicIp.PublicIpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.allocationMethod">allocationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#allocation_method PublicIp#allocation_method}. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#location PublicIp#location}. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#name PublicIp#name}. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#resource_group_name PublicIp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.ddosProtectionMode">ddosProtectionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#ddos_protection_mode PublicIp#ddos_protection_mode}. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.ddosProtectionPlanId">ddosProtectionPlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#ddos_protection_plan_id PublicIp#ddos_protection_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.domainNameLabel">domainNameLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#domain_name_label PublicIp#domain_name_label}. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.domainNameLabelScope">domainNameLabelScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#domain_name_label_scope PublicIp#domain_name_label_scope}. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.edgeZone">edgeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#edge_zone PublicIp#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#id PublicIp#id}. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#idle_timeout_in_minutes PublicIp#idle_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.ipTags">ipTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#ip_tags PublicIp#ip_tags}. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.ipVersion">ipVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#ip_version PublicIp#ip_version}. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.publicIpPrefixId">publicIpPrefixId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#public_ip_prefix_id PublicIp#public_ip_prefix_id}. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.reverseFqdn">reverseFqdn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#reverse_fqdn PublicIp#reverse_fqdn}. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.sku">sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#sku PublicIp#sku}. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.skuTier">skuTier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#sku_tier PublicIp#sku_tier}. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#tags PublicIp#tags}. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeouts">PublicIpTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.zones">zones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#zones PublicIp#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allocationMethod`<sup>Required</sup> <a name="allocationMethod" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.allocationMethod"></a>

```typescript
public readonly allocationMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#allocation_method PublicIp#allocation_method}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#location PublicIp#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#name PublicIp#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#resource_group_name PublicIp#resource_group_name}.

---

##### `ddosProtectionMode`<sup>Optional</sup> <a name="ddosProtectionMode" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.ddosProtectionMode"></a>

```typescript
public readonly ddosProtectionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#ddos_protection_mode PublicIp#ddos_protection_mode}.

---

##### `ddosProtectionPlanId`<sup>Optional</sup> <a name="ddosProtectionPlanId" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.ddosProtectionPlanId"></a>

```typescript
public readonly ddosProtectionPlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#ddos_protection_plan_id PublicIp#ddos_protection_plan_id}.

---

##### `domainNameLabel`<sup>Optional</sup> <a name="domainNameLabel" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.domainNameLabel"></a>

```typescript
public readonly domainNameLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#domain_name_label PublicIp#domain_name_label}.

---

##### `domainNameLabelScope`<sup>Optional</sup> <a name="domainNameLabelScope" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.domainNameLabelScope"></a>

```typescript
public readonly domainNameLabelScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#domain_name_label_scope PublicIp#domain_name_label_scope}.

---

##### `edgeZone`<sup>Optional</sup> <a name="edgeZone" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.edgeZone"></a>

```typescript
public readonly edgeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#edge_zone PublicIp#edge_zone}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#id PublicIp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleTimeoutInMinutes`<sup>Optional</sup> <a name="idleTimeoutInMinutes" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.idleTimeoutInMinutes"></a>

```typescript
public readonly idleTimeoutInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#idle_timeout_in_minutes PublicIp#idle_timeout_in_minutes}.

---

##### `ipTags`<sup>Optional</sup> <a name="ipTags" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.ipTags"></a>

```typescript
public readonly ipTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#ip_tags PublicIp#ip_tags}.

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#ip_version PublicIp#ip_version}.

---

##### `publicIpPrefixId`<sup>Optional</sup> <a name="publicIpPrefixId" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.publicIpPrefixId"></a>

```typescript
public readonly publicIpPrefixId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#public_ip_prefix_id PublicIp#public_ip_prefix_id}.

---

##### `reverseFqdn`<sup>Optional</sup> <a name="reverseFqdn" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.reverseFqdn"></a>

```typescript
public readonly reverseFqdn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#reverse_fqdn PublicIp#reverse_fqdn}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#sku PublicIp#sku}.

---

##### `skuTier`<sup>Optional</sup> <a name="skuTier" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.skuTier"></a>

```typescript
public readonly skuTier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#sku_tier PublicIp#sku_tier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#tags PublicIp#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PublicIpTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeouts">PublicIpTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#timeouts PublicIp#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.publicIp.PublicIpConfig.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#zones PublicIp#zones}.

---

### PublicIpTimeouts <a name="PublicIpTimeouts" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeouts.Initializer"></a>

```typescript
import { publicIp } from '@cdktf/provider-azurerm'

const publicIpTimeouts: publicIp.PublicIpTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#create PublicIp#create}. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#delete PublicIp#delete}. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#read PublicIp#read}. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#update PublicIp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#create PublicIp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#delete PublicIp#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#read PublicIp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/public_ip#update PublicIp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PublicIpTimeoutsOutputReference <a name="PublicIpTimeoutsOutputReference" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.Initializer"></a>

```typescript
import { publicIp } from '@cdktf/provider-azurerm'

new publicIp.PublicIpTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeouts">PublicIpTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.publicIp.PublicIpTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PublicIpTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.publicIp.PublicIpTimeouts">PublicIpTimeouts</a>

---



