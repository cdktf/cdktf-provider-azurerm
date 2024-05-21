# `trafficManagerAzureEndpoint` Submodule <a name="`trafficManagerAzureEndpoint` Submodule" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TrafficManagerAzureEndpoint <a name="TrafficManagerAzureEndpoint" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint azurerm_traffic_manager_azure_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.Initializer"></a>

```typescript
import { trafficManagerAzureEndpoint } from '@cdktf/provider-azurerm'

new trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint(scope: Construct, id: string, config: TrafficManagerAzureEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig">TrafficManagerAzureEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig">TrafficManagerAzureEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.putCustomHeader">putCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.putSubnet">putSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetAlwaysServeEnabled">resetAlwaysServeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetCustomHeader">resetCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetGeoMappings">resetGeoMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetSubnet">resetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomHeader` <a name="putCustomHeader" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.putCustomHeader"></a>

```typescript
public putCustomHeader(value: IResolvable | TrafficManagerAzureEndpointCustomHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.putCustomHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeader">TrafficManagerAzureEndpointCustomHeader</a>[]

---

##### `putSubnet` <a name="putSubnet" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.putSubnet"></a>

```typescript
public putSubnet(value: IResolvable | TrafficManagerAzureEndpointSubnet[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.putSubnet.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnet">TrafficManagerAzureEndpointSubnet</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: TrafficManagerAzureEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts">TrafficManagerAzureEndpointTimeouts</a>

---

##### `resetAlwaysServeEnabled` <a name="resetAlwaysServeEnabled" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetAlwaysServeEnabled"></a>

```typescript
public resetAlwaysServeEnabled(): void
```

##### `resetCustomHeader` <a name="resetCustomHeader" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetCustomHeader"></a>

```typescript
public resetCustomHeader(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetGeoMappings` <a name="resetGeoMappings" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetGeoMappings"></a>

```typescript
public resetGeoMappings(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetSubnet` <a name="resetSubnet" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetSubnet"></a>

```typescript
public resetSubnet(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetWeight"></a>

```typescript
public resetWeight(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TrafficManagerAzureEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.isConstruct"></a>

```typescript
import { trafficManagerAzureEndpoint } from '@cdktf/provider-azurerm'

trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.isTerraformElement"></a>

```typescript
import { trafficManagerAzureEndpoint } from '@cdktf/provider-azurerm'

trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.isTerraformResource"></a>

```typescript
import { trafficManagerAzureEndpoint } from '@cdktf/provider-azurerm'

trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.generateConfigForImport"></a>

```typescript
import { trafficManagerAzureEndpoint } from '@cdktf/provider-azurerm'

trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a TrafficManagerAzureEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TrafficManagerAzureEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TrafficManagerAzureEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TrafficManagerAzureEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.customHeader">customHeader</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList">TrafficManagerAzureEndpointCustomHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList">TrafficManagerAzureEndpointSubnetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference">TrafficManagerAzureEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.alwaysServeEnabledInput">alwaysServeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.customHeaderInput">customHeaderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeader">TrafficManagerAzureEndpointCustomHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.geoMappingsInput">geoMappingsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.profileIdInput">profileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.subnetInput">subnetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnet">TrafficManagerAzureEndpointSubnet</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.targetResourceIdInput">targetResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts">TrafficManagerAzureEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.alwaysServeEnabled">alwaysServeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.geoMappings">geoMappings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.targetResourceId">targetResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.weight">weight</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customHeader`<sup>Required</sup> <a name="customHeader" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.customHeader"></a>

```typescript
public readonly customHeader: TrafficManagerAzureEndpointCustomHeaderList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList">TrafficManagerAzureEndpointCustomHeaderList</a>

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.subnet"></a>

```typescript
public readonly subnet: TrafficManagerAzureEndpointSubnetList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList">TrafficManagerAzureEndpointSubnetList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: TrafficManagerAzureEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference">TrafficManagerAzureEndpointTimeoutsOutputReference</a>

---

##### `alwaysServeEnabledInput`<sup>Optional</sup> <a name="alwaysServeEnabledInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.alwaysServeEnabledInput"></a>

```typescript
public readonly alwaysServeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customHeaderInput`<sup>Optional</sup> <a name="customHeaderInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.customHeaderInput"></a>

```typescript
public readonly customHeaderInput: IResolvable | TrafficManagerAzureEndpointCustomHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeader">TrafficManagerAzureEndpointCustomHeader</a>[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `geoMappingsInput`<sup>Optional</sup> <a name="geoMappingsInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.geoMappingsInput"></a>

```typescript
public readonly geoMappingsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.profileIdInput"></a>

```typescript
public readonly profileIdInput: string;
```

- *Type:* string

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.subnetInput"></a>

```typescript
public readonly subnetInput: IResolvable | TrafficManagerAzureEndpointSubnet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnet">TrafficManagerAzureEndpointSubnet</a>[]

---

##### `targetResourceIdInput`<sup>Optional</sup> <a name="targetResourceIdInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.targetResourceIdInput"></a>

```typescript
public readonly targetResourceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | TrafficManagerAzureEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts">TrafficManagerAzureEndpointTimeouts</a>

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `alwaysServeEnabled`<sup>Required</sup> <a name="alwaysServeEnabled" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.alwaysServeEnabled"></a>

```typescript
public readonly alwaysServeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `geoMappings`<sup>Required</sup> <a name="geoMappings" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.geoMappings"></a>

```typescript
public readonly geoMappings: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.targetResourceId"></a>

```typescript
public readonly targetResourceId: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TrafficManagerAzureEndpointConfig <a name="TrafficManagerAzureEndpointConfig" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.Initializer"></a>

```typescript
import { trafficManagerAzureEndpoint } from '@cdktf/provider-azurerm'

const trafficManagerAzureEndpointConfig: trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#name TrafficManagerAzureEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.profileId">profileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#profile_id TrafficManagerAzureEndpoint#profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.targetResourceId">targetResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#target_resource_id TrafficManagerAzureEndpoint#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.alwaysServeEnabled">alwaysServeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#always_serve_enabled TrafficManagerAzureEndpoint#always_serve_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.customHeader">customHeader</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeader">TrafficManagerAzureEndpointCustomHeader</a>[]</code> | custom_header block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#enabled TrafficManagerAzureEndpoint#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.geoMappings">geoMappings</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#geo_mappings TrafficManagerAzureEndpoint#geo_mappings}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#id TrafficManagerAzureEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#priority TrafficManagerAzureEndpoint#priority}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.subnet">subnet</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnet">TrafficManagerAzureEndpointSubnet</a>[]</code> | subnet block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts">TrafficManagerAzureEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#weight TrafficManagerAzureEndpoint#weight}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#name TrafficManagerAzureEndpoint#name}.

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#profile_id TrafficManagerAzureEndpoint#profile_id}.

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.targetResourceId"></a>

```typescript
public readonly targetResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#target_resource_id TrafficManagerAzureEndpoint#target_resource_id}.

---

##### `alwaysServeEnabled`<sup>Optional</sup> <a name="alwaysServeEnabled" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.alwaysServeEnabled"></a>

```typescript
public readonly alwaysServeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#always_serve_enabled TrafficManagerAzureEndpoint#always_serve_enabled}.

---

##### `customHeader`<sup>Optional</sup> <a name="customHeader" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.customHeader"></a>

```typescript
public readonly customHeader: IResolvable | TrafficManagerAzureEndpointCustomHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeader">TrafficManagerAzureEndpointCustomHeader</a>[]

custom_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#custom_header TrafficManagerAzureEndpoint#custom_header}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#enabled TrafficManagerAzureEndpoint#enabled}.

---

##### `geoMappings`<sup>Optional</sup> <a name="geoMappings" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.geoMappings"></a>

```typescript
public readonly geoMappings: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#geo_mappings TrafficManagerAzureEndpoint#geo_mappings}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#id TrafficManagerAzureEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#priority TrafficManagerAzureEndpoint#priority}.

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.subnet"></a>

```typescript
public readonly subnet: IResolvable | TrafficManagerAzureEndpointSubnet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnet">TrafficManagerAzureEndpointSubnet</a>[]

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#subnet TrafficManagerAzureEndpoint#subnet}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: TrafficManagerAzureEndpointTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts">TrafficManagerAzureEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#timeouts TrafficManagerAzureEndpoint#timeouts}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#weight TrafficManagerAzureEndpoint#weight}.

---

### TrafficManagerAzureEndpointCustomHeader <a name="TrafficManagerAzureEndpointCustomHeader" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeader.Initializer"></a>

```typescript
import { trafficManagerAzureEndpoint } from '@cdktf/provider-azurerm'

const trafficManagerAzureEndpointCustomHeader: trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeader.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#name TrafficManagerAzureEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeader.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#value TrafficManagerAzureEndpoint#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#name TrafficManagerAzureEndpoint#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#value TrafficManagerAzureEndpoint#value}.

---

### TrafficManagerAzureEndpointSubnet <a name="TrafficManagerAzureEndpointSubnet" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnet.Initializer"></a>

```typescript
import { trafficManagerAzureEndpoint } from '@cdktf/provider-azurerm'

const trafficManagerAzureEndpointSubnet: trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnet.property.first">first</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#first TrafficManagerAzureEndpoint#first}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnet.property.last">last</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#last TrafficManagerAzureEndpoint#last}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnet.property.scope">scope</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#scope TrafficManagerAzureEndpoint#scope}. |

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnet.property.first"></a>

```typescript
public readonly first: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#first TrafficManagerAzureEndpoint#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnet.property.last"></a>

```typescript
public readonly last: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#last TrafficManagerAzureEndpoint#last}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnet.property.scope"></a>

```typescript
public readonly scope: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#scope TrafficManagerAzureEndpoint#scope}.

---

### TrafficManagerAzureEndpointTimeouts <a name="TrafficManagerAzureEndpointTimeouts" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts.Initializer"></a>

```typescript
import { trafficManagerAzureEndpoint } from '@cdktf/provider-azurerm'

const trafficManagerAzureEndpointTimeouts: trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#create TrafficManagerAzureEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#delete TrafficManagerAzureEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#read TrafficManagerAzureEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#update TrafficManagerAzureEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#create TrafficManagerAzureEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#delete TrafficManagerAzureEndpoint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#read TrafficManagerAzureEndpoint#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/traffic_manager_azure_endpoint#update TrafficManagerAzureEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TrafficManagerAzureEndpointCustomHeaderList <a name="TrafficManagerAzureEndpointCustomHeaderList" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.Initializer"></a>

```typescript
import { trafficManagerAzureEndpoint } from '@cdktf/provider-azurerm'

new trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.get"></a>

```typescript
public get(index: number): TrafficManagerAzureEndpointCustomHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeader">TrafficManagerAzureEndpointCustomHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TrafficManagerAzureEndpointCustomHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeader">TrafficManagerAzureEndpointCustomHeader</a>[]

---


### TrafficManagerAzureEndpointCustomHeaderOutputReference <a name="TrafficManagerAzureEndpointCustomHeaderOutputReference" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.Initializer"></a>

```typescript
import { trafficManagerAzureEndpoint } from '@cdktf/provider-azurerm'

new trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeader">TrafficManagerAzureEndpointCustomHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TrafficManagerAzureEndpointCustomHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeader">TrafficManagerAzureEndpointCustomHeader</a>

---


### TrafficManagerAzureEndpointSubnetList <a name="TrafficManagerAzureEndpointSubnetList" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.Initializer"></a>

```typescript
import { trafficManagerAzureEndpoint } from '@cdktf/provider-azurerm'

new trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.get"></a>

```typescript
public get(index: number): TrafficManagerAzureEndpointSubnetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnet">TrafficManagerAzureEndpointSubnet</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TrafficManagerAzureEndpointSubnet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnet">TrafficManagerAzureEndpointSubnet</a>[]

---


### TrafficManagerAzureEndpointSubnetOutputReference <a name="TrafficManagerAzureEndpointSubnetOutputReference" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.Initializer"></a>

```typescript
import { trafficManagerAzureEndpoint } from '@cdktf/provider-azurerm'

new trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.resetLast">resetLast</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLast` <a name="resetLast" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.resetLast"></a>

```typescript
public resetLast(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.firstInput">firstInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.lastInput">lastInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.scopeInput">scopeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.first">first</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.last">last</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.scope">scope</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnet">TrafficManagerAzureEndpointSubnet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.firstInput"></a>

```typescript
public readonly firstInput: string;
```

- *Type:* string

---

##### `lastInput`<sup>Optional</sup> <a name="lastInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.lastInput"></a>

```typescript
public readonly lastInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: number;
```

- *Type:* number

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.first"></a>

```typescript
public readonly first: string;
```

- *Type:* string

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.last"></a>

```typescript
public readonly last: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.scope"></a>

```typescript
public readonly scope: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TrafficManagerAzureEndpointSubnet;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnet">TrafficManagerAzureEndpointSubnet</a>

---


### TrafficManagerAzureEndpointTimeoutsOutputReference <a name="TrafficManagerAzureEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { trafficManagerAzureEndpoint } from '@cdktf/provider-azurerm'

new trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts">TrafficManagerAzureEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TrafficManagerAzureEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts">TrafficManagerAzureEndpointTimeouts</a>

---



